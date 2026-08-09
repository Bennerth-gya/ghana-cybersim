import os
import sqlite3
from pathlib import Path

from flask import Flask, jsonify, render_template, request


APP_DIR = Path(__file__).resolve().parent
DATABASE_PATH = Path(os.environ.get("PESALINK_DB_PATH", "/tmp/pesalink.db"))
SEED_PATH = APP_DIR / "seed.sql"

app = Flask(__name__)


def initialize_database() -> None:
    DATABASE_PATH.parent.mkdir(parents=True, exist_ok=True)
    if DATABASE_PATH.exists():
        DATABASE_PATH.unlink()

    with sqlite3.connect(DATABASE_PATH) as connection:
        connection.executescript(SEED_PATH.read_text(encoding="utf-8"))


def get_connection() -> sqlite3.Connection:
    connection = sqlite3.connect(DATABASE_PATH)
    connection.row_factory = sqlite3.Row
    return connection


def lookup_transactions(phone_number: str) -> list[sqlite3.Row]:
    # VULNERABLE ON PURPOSE — DO NOT FIX.
    # This lab intentionally concatenates user input into SQL so students can
    # practice UNION and boolean-based blind SQL injection against SQLite.
    query = (
        "SELECT id, reference, phone_number, recipient, amount, status, created_at "
        "FROM transactions "
        f"WHERE phone_number = '{phone_number}' "
        "ORDER BY created_at DESC "
        "LIMIT 20"
    )

    with get_connection() as connection:
        return connection.execute(query).fetchall()


@app.get("/")
def index():
    return render_template("index.html", rows=None, phone_number="")


@app.get("/lookup")
def lookup_page():
    phone_number = request.args.get("phone", "")
    rows = []
    error = None

    if phone_number:
        try:
            rows = lookup_transactions(phone_number)
        except sqlite3.Error:
            error = "The transaction lookup service could not process that request."

    return render_template(
        "index.html",
        rows=rows,
        phone_number=phone_number,
        error=error,
    )


@app.get("/api/lookup")
def lookup_api():
    phone_number = request.args.get("phone", "")
    if not phone_number:
        return jsonify({"results": []})

    try:
        rows = lookup_transactions(phone_number)
    except sqlite3.Error as exc:
        return jsonify({"error": "lookup_failed", "detail": str(exc)}), 400

    return jsonify({"results": [dict(row) for row in rows]})


@app.get("/health")
def health():
    try:
        with get_connection() as connection:
            connection.execute("SELECT 1").fetchone()
    except sqlite3.Error:
        return jsonify({"ok": False}), 500

    return jsonify({"ok": True})


initialize_database()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", "8000")))

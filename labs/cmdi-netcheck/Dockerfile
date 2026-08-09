FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=8000

WORKDIR /app

# ── System utilities ──────────────────────────────────────────────────────────
# python:3.12-slim already includes: sh, ls, cat, find, whoami, id, ps, env.
# We add iputils-ping so the legitimate ping command works; the rest of the
# shell exploration toolkit (ls, find, cat, id, whoami) is already present.
RUN apt-get update -qq \
    && apt-get install -y --no-install-recommends iputils-ping \
    && rm -rf /var/lib/apt/lists/*

# ── Application dependencies ──────────────────────────────────────────────────
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# ── Non-root user ─────────────────────────────────────────────────────────────
# Running as a dedicated non-root user means a successful command injection
# gives the student a shell as 'netcheck', not root. Combined with CapDrop:ALL
# applied by the lab manager, privilege escalation inside the container is
# effectively blocked.
RUN groupadd --system netcheck \
    && useradd --system --gid netcheck --no-create-home netcheck

# ── Flag file ─────────────────────────────────────────────────────────────────
# Placed at a realistic-but-discoverable path. The decoy config at
# /etc/netcheck/config.yml is the expected first stop for students; the real
# flag is one level deeper at /opt/netcheck/flag.txt.
RUN mkdir -p /opt/netcheck /etc/netcheck \
    && echo 'CYBERSIM{c0mm4nd_1nj3ct10n_ch4mp10n_2026}' > /opt/netcheck/flag.txt \
    && chmod 644 /opt/netcheck/flag.txt

# ── Decoy config ──────────────────────────────────────────────────────────────
# Students who run `ls /etc/netcheck` will find this first. It looks like
# real ISP internal config but contains no flag — they must keep exploring.
RUN printf '%s\n' \
    '# NetCheck Ghana — Internal Gateway Config' \
    '# Generated: 2026-01-15  Version: 3.2.1' \
    '' \
    'gateway:' \
    '  host: 10.20.0.1' \
    '  port: 8443' \
    '  region: accra-east' \
    '' \
    'database:' \
    '  host: pg-internal.netcheck.local' \
    '  port: 5432' \
    '  name: netcheck_prod' \
    '  user: nc_app' \
    '  password: Nc@Pr0d!2026#Acc' \
    '' \
    'api:' \
    '  nca_endpoint: https://api.nca.gov.gh/v2/isp' \
    '  api_key: nca-isk-7f3a29e1c84d0b56' \
    '  timeout_ms: 5000' \
    '' \
    'ping:' \
    '  count: 4' \
    '  max_rtt_ms: 250' \
    '' \
    'logging:' \
    '  level: info' \
    '  path: /var/log/netcheck/app.log' \
    > /etc/netcheck/config.yml \
    && chmod 644 /etc/netcheck/config.yml

# ── Application source ────────────────────────────────────────────────────────
COPY app.py .
COPY templates ./templates
COPY static ./static

RUN chown -R netcheck:netcheck /app

USER netcheck

EXPOSE 8000

HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=6 \
  CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:8000/health', timeout=2).read()"

CMD ["python", "app.py"]

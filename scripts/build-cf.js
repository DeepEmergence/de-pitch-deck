const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const SLIDES_HTML_PATH = path.join(ROOT, 'slides.html');
const WORKER_DIR = path.join(ROOT, 'cf-worker');
const WORKER_SRC_DIR = path.join(WORKER_DIR, 'src');
const WORKER_OUT_PATH = path.join(WORKER_SRC_DIR, 'index.js');

// Predefined allowed email to invite code mapping (6-digit alphanumeric)
const ALLOWED_USERS = {
  "ajay@deepemergence.io": "DE772X",
  "aman@deepemergence.io": "DE883Y",
  "ajay@deepemergence.com": "DE119K",
  "aman@deepemergence.com": "DE445L",
  "partner@deepemergence.io": "PRT902",
  "investor@deepemergence.io": "INV206",
  "vc@deepemergence.io": "VC889P"
};

const MASTER_CODE = "SOPHON";

function build() {
  console.log('1. Building latest slides.html...');
  execSync('node scripts/build-html.js', { stdio: 'inherit', cwd: ROOT });

  if (!fs.existsSync(SLIDES_HTML_PATH)) {
    throw new Error('slides.html was not generated successfully.');
  }

  console.log('2. Reading slides.html content...');
  const slidesHtml = fs.readFileSync(SLIDES_HTML_PATH, 'utf8');

  console.log('3. Generating cf-worker/src/index.js...');
  
  const loginHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DeepEmergence — Investor Access</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Sans:wght@500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg: #f5f3ef;
      --bg-card: #fdfcfa;
      --text: #1c1a17;
      --text-strong: #0a0908;
      --muted: #5c5852;
      --border: #d9d4cb;
      --accent: #1e3a5f;
      --accent-soft: rgba(30, 58, 95, 0.07);
      --error-bg: rgba(139, 58, 44, 0.06);
      --error-border: rgba(139, 58, 44, 0.28);
      --error-text: #8b3a2c;
      --radius: 8px;
      --font: "Inter", system-ui, -apple-system, sans-serif;
      --display: "Instrument Sans", "Inter", sans-serif;
      --shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #0b0b0d;
        --bg-card: #121214;
        --text: #e8e6e2;
        --text-strong: #f8f7f5;
        --muted: #9c9890;
        --border: #2a2a2f;
        --accent: #7eb3e8;
        --accent-soft: rgba(126, 179, 232, 0.1);
        --error-bg: rgba(220, 140, 110, 0.07);
        --error-border: rgba(220, 140, 110, 0.32);
        --error-text: #dc8c6e;
        --shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
      }
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font);
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 1.5rem;
    }
    .card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      width: 100%;
      max-width: 25rem;
      padding: 2.2rem 2rem;
      text-align: center;
    }
    .header {
      margin-bottom: 1.8rem;
    }
    h1 {
      font-family: var(--display);
      font-weight: 600;
      font-size: 1.6rem;
      color: var(--text-strong);
      letter-spacing: -0.02em;
      margin-bottom: 0.4rem;
    }
    p.subtitle {
      font-size: 0.8125rem;
      color: var(--muted);
      line-height: 1.45;
    }
    .form-group {
      text-align: left;
      margin-bottom: 1.2rem;
    }
    label {
      display: block;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.4rem;
    }
    input {
      width: 100%;
      background: transparent;
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 0.65rem 0.85rem;
      font-family: inherit;
      font-size: 0.875rem;
      color: var(--text-strong);
      outline: none;
      transition: border-color 0.15s, box-shadow 0.15s;
    }
    input:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--accent-soft);
    }
    .btn {
      width: 100%;
      background: var(--accent);
      color: var(--bg-card);
      border: none;
      border-radius: 6px;
      padding: 0.7rem;
      font-family: var(--font);
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;
      transition: opacity 0.15s, background-color 0.15s;
      margin-top: 0.5rem;
    }
    .btn:hover {
      opacity: 0.92;
    }
    .btn:active {
      opacity: 0.85;
    }
    .error-msg {
      background: var(--error-bg);
      border: 1px solid var(--error-border);
      border-radius: 6px;
      padding: 0.6rem 0.8rem;
      font-size: 0.75rem;
      color: var(--error-text);
      text-align: left;
      line-height: 1.4;
      margin-bottom: 1.2rem;
      display: none;
    }
    .footer {
      margin-top: 2rem;
      font-size: 0.6875rem;
      color: var(--muted);
      letter-spacing: 0.02em;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>DeepEmergence</h1>
      <p class="subtitle">Enter your registered email & invite code to access the Confidential Investor Pitch Deck.</p>
    </div>
    
    <div class="error-msg" id="errorBox"></div>

    <form id="loginForm">
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" required placeholder="name@company.com" autocomplete="email" />
      </div>
      <div class="form-group">
        <label for="code">Invite Code</label>
        <input type="text" id="code" required placeholder="6-digit code" autocomplete="off" style="text-transform: uppercase;" />
      </div>
      <button type="submit" class="btn" id="submitBtn">Verify & View Deck</button>
    </form>

    <div class="footer">
      CONFIDENTIAL · © 2026 DEEPEMERGENCE
    </div>
  </div>

  <script>
    const form = document.getElementById('loginForm');
    const errorBox = document.getElementById('errorBox');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      errorBox.style.display = 'none';
      submitBtn.textContent = 'Verifying...';
      submitBtn.disabled = true;

      const email = document.getElementById('email').value.trim().toLowerCase();
      const code = document.getElementById('code').value.trim().toUpperCase();

      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, code })
        });

        const result = await response.json();

        if (response.ok && result.success) {
          window.location.reload();
        } else {
          errorBox.textContent = result.message || 'Invalid email or invite code.';
          errorBox.style.display = 'block';
          submitBtn.textContent = 'Verify & View Deck';
          submitBtn.disabled = false;
        }
      } catch (err) {
        errorBox.textContent = 'A connection error occurred. Please try again.';
        errorBox.style.display = 'block';
        submitBtn.textContent = 'Verify & View Deck';
        submitBtn.disabled = false;
      }
    });
  </script>
</body>
</html>
  `.trim();

  // Escape special backtick/expression characters inside slides.html
  // so it doesn't break the template literal in the output index.js
  const escapedSlidesHtml = slidesHtml
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');

  const workerCode = `
const ALLOWED_USERS = ${JSON.stringify(ALLOWED_USERS, null, 2)};
const MASTER_CODE = ${JSON.stringify(MASTER_CODE)};
const SESSION_COOKIE_NAME = "de_session_token";
const SESSION_SECRET = "de-secret-salt-2026-sophon";

async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function createSessionToken(email) {
  const hash = await sha256(email + SESSION_SECRET);
  return email + "|" + hash;
}

async function verifySessionToken(token) {
  if (!token) return null;
  const parts = token.split("|");
  if (parts.length !== 2) return null;
  const [email, hash] = parts;
  const expectedHash = await sha256(email + SESSION_SECRET);
  if (hash === expectedHash) {
    return email;
  }
  return null;
}

function getCookie(request, name) {
  const cookieString = request.headers.get("Cookie");
  if (!cookieString) return null;
  const cookies = cookieString.split(";");
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Handle login submission
    if (request.method === "POST" && url.pathname === "/login") {
      try {
        const { email, code } = await request.json();
        const formattedEmail = (email || "").trim().toLowerCase();
        const formattedCode = (code || "").trim().toUpperCase();

        if (!formattedEmail || !formattedCode) {
          return new Response(JSON.stringify({ success: false, message: "Email and code are required." }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
          });
        }

        // Verify the code
        const expectedCode = ALLOWED_USERS[formattedEmail];
        const isMasterCode = formattedCode === MASTER_CODE;

        if (expectedCode === formattedCode || (isMasterCode && formattedEmail.includes("@"))) {
          // Success! Set session cookie
          const sessionValue = await createSessionToken(formattedEmail);
          const responseHeaders = new Headers({
            "Content-Type": "application/json",
            "Set-Cookie": \`\${SESSION_COOKIE_NAME}=\${encodeURIComponent(sessionValue)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000\` // 30 days
          });
          return new Response(JSON.stringify({ success: true }), { status: 200, headers: responseHeaders });
        } else {
          return new Response(JSON.stringify({ success: false, message: "Invalid email or invite code." }), {
            status: 401,
            headers: { "Content-Type": "application/json" }
          });
        }
      } catch (err) {
        return new Response(JSON.stringify({ success: false, message: "Bad Request." }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    // 2. Check for active session
    const sessionToken = getCookie(request, SESSION_COOKIE_NAME);
    const authorizedUser = await verifySessionToken(sessionToken);

    if (authorizedUser) {
      // User is authorized. Serve slides.html
      return new Response(\`${escapedSlidesHtml}\`, {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    // 3. User is not authorized. Serve login page
    return new Response(\`${loginHtml.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
  `.trim();

  fs.writeFileSync(WORKER_OUT_PATH, workerCode, 'utf8');
  console.log(`Successfully generated ${WORKER_OUT_PATH}`);
}

build();

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const SLIDES_HTML_PATH = path.join(ROOT, 'slides.html');
const PUBLIC_DIR = path.join(ROOT, 'public');
const PUBLIC_INDEX_PATH = path.join(PUBLIC_DIR, 'index.html');

function build() {
  console.log('1. Building latest slides.html...');
  execSync('node scripts/build-html.js', { stdio: 'inherit', cwd: ROOT });

  if (!fs.existsSync(SLIDES_HTML_PATH)) {
    throw new Error('slides.html was not generated successfully.');
  }

  console.log('2. Creating public/ directory...');
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  console.log('3. Copying slides.html to public/index.html...');
  fs.copyFileSync(SLIDES_HTML_PATH, PUBLIC_INDEX_PATH);
  console.log('Successfully prepared public/index.html for Pages!');
}

build();

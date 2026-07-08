#!/usr/bin/env node
/**
 * Build investor-grade HTML deck from slides.md
 * Usage: npm run build:html
 */

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'slides.md');
const OUT = path.join(ROOT, 'slides.html');

function splitSlides(markdown) {
  const body = markdown.replace(/^---[\r\n]+[\s\S]*?---[\r\n]+/, '');
  const slides = [];
  const boundary =
    /\n---\n(?:layout:\s*([^\n]+)\n)?(?:class:\s*([^\n]+)\n)?---\n/;

  const firstBoundary = body.search(boundary);
  if (firstBoundary === -1) {
    const only = body.trim();
    return only ? [{ content: only, meta: { layout: null, className: null } }] : [];
  }

  const opening = body.slice(0, firstBoundary).trim();
  if (opening) {
    slides.push({ content: opening, meta: { layout: null, className: null } });
  }

  const rest = body.slice(firstBoundary);
  const parts = rest.split(boundary);
  // parts: [delimiter-prefix, layout?, class?, content, layout?, class?, content, ...]
  for (let i = 1; i < parts.length; i += 3) {
    const content = (parts[i + 2] || '').trim();
    if (!content) continue;
    slides.push({
      meta: {
        layout: parts[i]?.trim() || null,
        className: parts[i + 1]?.trim() || null,
      },
      content,
    });
  }

  return slides;
}

const renderer = new marked.Renderer();
renderer.code = function (token) {
  const lang = (token.lang || '').split(/\s/)[0];
  if (lang === 'mermaid') {
    const src = token.text.replace(/"/g, '&quot;');
    return `<div class="mermaid" data-src="${src}">${token.text}</div>`;
  }
  const escaped = token.text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return `<pre><code>${escaped}</code></pre>`;
};

function renderCell(cell) {
  const align = cell.align ? ` style="text-align:${cell.align}"` : '';
  const inner = marked.parseInline(cell.text || '');
  const tag = cell.header ? 'th' : 'td';
  return `<${tag}${align}>${inner}</${tag}>`;
}

renderer.table = function (token) {
  const header = token.header.map((cell) => renderCell({ ...cell, header: true })).join('');
  const body = token.rows
    .map((row) => `<tr>${row.map((cell) => renderCell(cell)).join('')}</tr>`)
    .join('');
  return `<div class="deck-table-wrap"><table class="deck-table"><thead><tr>${header}</tr></thead><tbody>${body}</tbody></table></div>`;
};

const STYLES_DIR = path.join(ROOT, 'styles');
const CSS =
  fs.readFileSync(path.join(STYLES_DIR, 'index.css'), 'utf8') +
  '\n' +
  fs.readFileSync(path.join(STYLES_DIR, 'html-shell.css'), 'utf8');

const SLIDE_SLUGS = [
  'cover',
  'problem',
  'solution',
  'team',
  'advisors',
  'market',
  'competition',
  'products',
  'biz-phase-1',
  'biz-phase-2',
  'biz-phase-3',
  'gtm',
  'funding-viz',
  'burn-viz',
  'path-to-profitability',
  'ask-angel',
  'ask-preseed',
  'ask-seed',
  'unified-timeline',
  'closing',
];

marked.use({ gfm: true, breaks: true, renderer });

const JS = `
let index = 0;
const slides = document.querySelectorAll('.slide-frame');
const counter = document.getElementById('counter');
const progress = document.getElementById('progress');

async function renderMermaid(slide) {
  if (!window.mermaid) return;
  const nodes = slide.querySelectorAll('.mermaid:not([data-processed])');
  if (!nodes.length) return;
  nodes.forEach(n => { n.style.minHeight = minChartHeight(n) + 'px'; });
  try {
    await mermaid.run({ nodes });
    nodes.forEach(n => {
      n.setAttribute('data-processed', '1');
      scaleMermaid(n);
    });
  } catch (e) { console.warn('Mermaid:', e); }
}

function scaleMermaid(node) {
  const svg = node.querySelector('svg');
  if (!svg) return;
  svg.removeAttribute('width');
  svg.removeAttribute('height');
  svg.style.transform = '';
  svg.style.display = 'block';
  const pw = node.clientWidth || node.parentElement?.clientWidth || 400;
  const ph = node.clientHeight || minChartHeight(node);
  requestAnimationFrame(() => {
    const rect = svg.getBoundingClientRect();
    const sw = rect.width || svg.viewBox?.baseVal?.width || 400;
    const sh = rect.height || svg.viewBox?.baseVal?.height || 300;
    if (!sw || !sh) return;
    const scale = Math.min(pw / sw, ph / sh) * 0.92;
    if (Math.abs(scale - 1) > 0.03) {
      svg.style.transform = 'scale(' + scale + ')';
      svg.style.transformOrigin = 'center center';
    }
  });
}

function minChartHeight(node) {
  const slide = node.closest('.slide-frame');
  const dense = slide?.classList.contains('dense');
  const inner = node.closest('.slide-inner');
  const base = inner ? inner.clientHeight * (dense ? 0.34 : 0.4) : window.innerHeight * 0.32;
  if (node.closest('.deck-chart') || node.closest('.col-span-2')) return Math.max(base, dense ? 150 : 180);
  if (node.closest('.grid')) return Math.max(base * 0.9, dense ? 140 : 165);
  return Math.max(base * 0.85, dense ? 130 : 155);
}

function fitSlide(slide) {
  const inner = slide.querySelector('.slide-inner');
  const content = slide.querySelector('.slide-content');
  if (!inner || slide.classList.contains('center')) return;
  if (content) {
    content.style.transform = 'none';
    content.style.width = '100%';
  }
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const target = content || inner;
      const h1 = inner.querySelector('h1');
      const titleH = h1 ? h1.offsetHeight + 8 : 0;
      const avail = inner.clientHeight - titleH;
      const needed = target.scrollHeight;
      const minScale = slide.classList.contains('dense') ? 0.76 : 0.84;
      if (needed > avail * 1.04 && avail > 0) {
        const scale = Math.max(avail / needed, minScale);
        target.style.transform = 'scale(' + scale + ')';
        target.style.transformOrigin = 'top center';
        target.style.width = (100 / scale) + '%';
      }
      inner.querySelectorAll('.mermaid[data-processed]').forEach(scaleMermaid);
    });
  });
}

async function show(i) {
  index = Math.max(0, Math.min(slides.length - 1, i));
  slides.forEach((s, n) => s.classList.toggle('active', n === index));
  counter.textContent = (index + 1) + ' / ' + slides.length;
  progress.style.width = ((index + 1) / slides.length * 100) + '%';
  history.replaceState(null, '', '#' + (index + 1));
  await renderMermaid(slides[index]);
  fitSlide(slides[index]);
}

function next() { show(index + 1); }
function prev() { show(index - 1); }

document.getElementById('next').addEventListener('click', next);
document.getElementById('prev').addEventListener('click', prev);

document.addEventListener('keydown', (e) => {
  if (['ArrowRight', ' ', 'PageDown'].includes(e.key)) { e.preventDefault(); next(); }
  if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); prev(); }
  if (e.key === 'Home') { e.preventDefault(); show(0); }
  if (e.key === 'End') { e.preventDefault(); show(slides.length - 1); }
  if (e.key === 'p' || e.key === 'P') { window.print(); }
});

const hash = parseInt(location.hash.replace('#', ''), 10);

function isDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function initMermaid() {
  if (!window.mermaid) return;
  const dark = isDark();
  mermaid.initialize({
    startOnLoad: false,
    theme: dark ? 'dark' : 'base',
    securityLevel: 'loose',
    themeVariables: dark ? {
      fontSize: '11px',
      fontFamily: 'Inter, system-ui, sans-serif',
      primaryColor: '#1c1c1f',
      primaryTextColor: '#eceae6',
      lineColor: '#3a3a3e',
      secondaryColor: '#222',
      tertiaryColor: '#141416'
    } : {
      fontSize: '11px',
      fontFamily: 'Inter, system-ui, sans-serif',
      primaryColor: '#ece9e3',
      primaryTextColor: '#1c1a17',
      lineColor: '#c8c4bc',
      secondaryColor: '#f6f4f0',
      tertiaryColor: '#e8e4dc',
      primaryBorderColor: '#d8d3ca',
      secondaryBorderColor: '#d8d3ca'
    }
  });
}

initMermaid();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  document.querySelectorAll('.mermaid[data-processed]').forEach(n => {
    const src = n.getAttribute('data-src');
    if (src) n.textContent = src;
    n.removeAttribute('data-processed');
  });
  initMermaid();
  renderMermaid(slides[index]);
});

if (!Number.isNaN(hash) && hash >= 1) show(hash - 1);
else show(0);

window.addEventListener('hashchange', () => {
  const h = parseInt(location.hash.replace('#', ''), 10);
  if (!Number.isNaN(h) && h >= 1) show(h - 1);
});

window.addEventListener('resize', () => {
  if (slides[index]) {
    fitSlide(slides[index]);
    slides[index].querySelectorAll('.mermaid[data-processed]').forEach(scaleMermaid);
  }
});

window.openAskModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
  }
};

window.closeAskModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
};

// Close modals on clicking background
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('deck-modal')) {
    e.target.style.display = 'none';
  }
});

// Close modals on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.deck-modal').forEach(m => m.style.display = 'none');
  }
});
`;

function wrapSlideBody(html, isCenter) {
  if (isCenter) return html;
  const match = html.match(/^(<h1[^>]*>[\s\S]*?<\/h1>)([\s\S]*)$/);
  if (!match || !match[2].trim()) return html;
  return match[1] + '<div class="slide-content">' + match[2].trim() + '</div>';
}

function slideClass(i, meta, total) {
  const parts = ['slide-frame'];
  if (i === 0 || i === total - 1) parts.push('center');
  if (meta.className) {
    meta.className.split(/\s+/).forEach((c) => {
      if (c === 'slide-dense') parts.push('dense');
      if (c === 'slide-ask') parts.push('ask');
      if (c === 'text-center') parts.push('center');
    });
  }
  return parts.join(' ');
}

function build() {
  const markdown = fs.readFileSync(SRC, 'utf8');
  const slides = splitSlides(markdown);
  const year = new Date().getFullYear();

  const slideHtml = slides
    .map(({ content, meta }, i) => {
      const isCenter = i === 0 || i === slides.length - 1 || meta.className?.includes('text-center');
      const html = wrapSlideBody(marked.parse(content), isCenter);
      const klass = slideClass(i, meta, slides.length);
      const slug = SLIDE_SLUGS[i] || `slide-${i}`;
      return `  <section class="${klass}" data-index="${i}" data-slide="${slug}">
    <div class="slide-inner">${html}</div>
    <footer class="slide-footer">
      <span>DeepEmergence</span>
      <span>Confidential · ${year}</span>
      <span>${i + 1} / ${slides.length}</span>
    </footer>
  </section>`;
    })
    .join('\n');

  const doc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light dark" />
  <title>DeepEmergence — Investor Deck</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>${CSS}</style>
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"><\/script>
</head>
<body>
  <div class="mobile-warning" id="mobileWarning">
    <div class="mobile-warning-content">
      <span class="mobile-warning-icon">⚠️</span>
      <div class="mobile-warning-text">
        <div class="mobile-warning-title">View in desktop, screen too small</div>
        <div class="mobile-warning-desc">This presentation contains detailed data, charts, and metrics designed for larger screens.</div>
      </div>
      <button type="button" class="mobile-warning-close" onclick="document.getElementById('mobileWarning').style.display='none'" aria-label="Dismiss">&times;</button>
    </div>
  </div>

  <!-- Angel Round Modal -->
  <div class="deck-modal" id="modalAngelSalaries">
    <div class="deck-modal-container">
      <button type="button" class="deck-modal-close" onclick="closeAskModal('modalAngelSalaries')">&times;</button>
      <div class="deck-modal-title">Salaries Breakdown · Angel Round</div>
      <div class="deck-modal-content">
        <div class="deck-modal-split-row">
          <div class="deck-modal-split-header">
            <span>Founders Split</span>
            <b>18% ($90K)</b>
          </div>
          <div class="deck-modal-split-body">
            Over 6-month runway for 2 founders (Ajay & Aman) = <b>$7.5K/month per founder</b> (annualized stipend of $90K/year, reflecting competitive pre-seed VC benchmarks).
          </div>
        </div>
        <div class="deck-modal-split-row">
          <div class="deck-modal-split-header">
            <span>Team Split</span>
            <b>18% ($90K)</b>
          </div>
          <div class="deck-modal-split-body">
            Over 6-month runway for 2 highly skilled, premium systems engineers = <b>$7.5K/month per engineer</b> (annualized premium contract rate of $90K/year to build core Sophon v1.0 layers).
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Pre-seed Round Modal -->
  <div class="deck-modal" id="modalPreseedSalaries">
    <div class="deck-modal-container">
      <button type="button" class="deck-modal-close" onclick="closeAskModal('modalPreseedSalaries')">&times;</button>
      <div class="deck-modal-title">Salaries Breakdown · Pre-seed Round</div>
      <div class="deck-modal-content">
        <div class="deck-modal-split-row">
          <div class="deck-modal-split-header">
            <span>Founders Split</span>
            <b>12% ($240K)</b>
          </div>
          <div class="deck-modal-split-body">
            Over 12-month runway for 2 co-founders (Ajay & Aman) = <b>$10K/month per founder</b> (annualized stipend of $120K/year, aligned with standard industry benchmarks for institutional pre-seed rounds).
          </div>
        </div>
        <div class="deck-modal-split-row">
          <div class="deck-modal-split-header">
            <span>Team Split</span>
            <b>43% ($860K)</b>
          </div>
          <div class="deck-modal-split-body">
            Over 12-month runway for 6 premium Full-Time Employees (FTE) = <b>$12K/month average per FTE</b> (annualized premium salary of $144K/year to secure elite AI developers and compiler specialists).
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Seed Round Modal -->
  <div class="deck-modal" id="modalSeedSalaries">
    <div class="deck-modal-container">
      <button type="button" class="deck-modal-close" onclick="closeAskModal('modalSeedSalaries')">&times;</button>
      <div class="deck-modal-title">Salaries Breakdown · Seed Round</div>
      <div class="deck-modal-content">
        <div class="deck-modal-split-row">
          <div class="deck-modal-split-header">
            <span>Founders Split</span>
            <b>6% ($720K)</b>
          </div>
          <div class="deck-modal-split-body">
            Over 24-month runway for 2 founders = <b>$15K/month per founder</b> (annualized market rate salary of $180K/year, meeting standard VC executive salary expectations for scaling Seed rounds).
          </div>
        </div>
        <div class="deck-modal-split-row">
          <div class="deck-modal-split-header">
            <span>Team Split</span>
            <b>44% ($5.28M)</b>
          </div>
          <div class="deck-modal-split-body">
            Over 24-month runway for 15 scaling Full-Time Employees (FTE) = <b>$14.6K/month average per FTE</b> (annualized premium salary of $175K/year to attract world-class AI, research, and systems engineering talent).
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Angel Round Burn Modal -->
  <div class="deck-modal" id="modalAngelBurn">
    <div class="deck-modal-container" style="max-width: 36rem;">
      <button type="button" class="deck-modal-close" onclick="closeAskModal('modalAngelBurn')">&times;</button>
      <div class="deck-modal-title">Angel Round Detailed Burn Breakdown</div>
      <div class="deck-modal-content" style="gap: 0.6rem;">
        <div class="deck-modal-split-row">
          <div class="deck-modal-split-header">
            <span>Timeline, Focus & Headcount</span>
            <b>6 Months · 4 FTE</b>
          </div>
          <div class="deck-modal-split-body">
            • <b>Runway Period:</b> Q3 2026 – Q4 2026 (6 Months stealth build runway).<br/>
            • <b>Product Focus:</b> Launching Sophon Platform v1.0 and initial stealth harness frameworks.<br/>
            • <b>Team Composition:</b> 2 co-founders + 2 world-class ML/systems contract developers.
          </div>
        </div>
        <div class="deck-modal-split-row">
          <div class="deck-modal-split-header">
            <span>One-off & Monthly Overheads</span>
            <b>$75K One-off · $77K/mo Average</b>
          </div>
          <div class="deck-modal-split-body">
            • <b>One-off Overheads ($75K):</b> IP setup/filings ($20K), early dev reference boards ($25K), premium dev tooling setup (Cursor, GitHub Enterprise, SOC2 tools, Slack/Jira SaaS) ($30K).<br/>
            • <b>Monthly Recurring Burn ($68K):</b> Premium payroll ($30K/mo), private GPU instances & LLM API tokens ($25K/mo), SaaS software licensing and dev seats ($5K/mo), workspace admin ($8K/mo).
          </div>
        </div>
        <div class="deck-modal-split-row">
          <div class="deck-modal-split-header">
            <span>Ecosystem Leverage & Credits</span>
            <b>$120K Non-Dilutive</b>
          </div>
          <div class="deck-modal-split-body">
            • <b>AWS Activate credits ($100K):</b> Covers 100% of standard cloud hosting, DB staging, and active pipeline storage nodes.<br/>
            • <b>OpenAI Startup Program ($20K):</b> Reimburses model token fine-tuning and experiment APIs.
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Pre-seed Round Burn Modal -->
  <div class="deck-modal" id="modalPreseedBurn">
    <div class="deck-modal-container" style="max-width: 36rem;">
      <button type="button" class="deck-modal-close" onclick="closeAskModal('modalPreseedBurn')">&times;</button>
      <div class="deck-modal-title">Pre-seed Round Detailed Burn Breakdown</div>
      <div class="deck-modal-content" style="gap: 0.6rem;">
        <div class="deck-modal-split-row">
          <div class="deck-modal-split-header">
            <span>Timeline, Focus & Headcount</span>
            <b>12 Months · 8 FTE</b>
          </div>
          <div class="deck-modal-split-body">
            • <b>Runway Period:</b> Q4 2026 – Q4 2027 (12 Months targeting public GA release).<br/>
            • <b>Product Focus:</b> Launching Sira & Agnee beta, launching Fleet Beta (Elyra, Vaayoo, Kat), and starting retail GA.<br/>
            • <b>Team Composition:</b> 2 co-founders + 6 elite Full-Time Employees (FTE) in software & compiler engineering.
          </div>
        </div>
        <div class="deck-modal-split-row">
          <div class="deck-modal-split-header">
            <span>One-off & Monthly Overheads</span>
            <b>$300K One-off · $167K/mo Average</b>
          </div>
          <div class="deck-modal-split-body">
            • <b>One-off Overheads ($300K):</b> CNC precision milling, DFM injection molds for hardware beta ($120K), environmental pre-testing & SAR certifications ($60K), custom enterprise staging/deployments for initial pilots ($120K).<br/>
            • <b>Monthly Recurring Burn ($142K):</b> Premium team salaries ($91.6K/mo), private GPU clusters, DB hosting & memory indexing ($35K/mo), Cursor/Copilot Enterprise & professional SaaS dev licenses ($5.4K/mo), regulatory compliance audits ($10K/mo).
          </div>
        </div>
        <div class="deck-modal-split-row">
          <div class="deck-modal-split-header">
            <span>Ecosystem Leverage & Credits</span>
            <b>$300K Non-Dilutive</b>
          </div>
          <div class="deck-modal-split-body">
            • <b>Microsoft Founders Hub ($150K Azure):</b> Offloads primary cloud host infrastructure, database instances, and active OpenAI endpoints.<br/>
            • <b>Google Cloud Startup ($150K credits):</b> Fully covers large model training runs, Vertex AI nodes, and parallel fine-tuning tests.
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Seed Round Burn Modal -->
  <div class="deck-modal" id="modalSeedBurn">
    <div class="deck-modal-container" style="max-width: 36rem;">
      <button type="button" class="deck-modal-close" onclick="closeAskModal('modalSeedBurn')">&times;</button>
      <div class="deck-modal-title">Seed Round Detailed Burn Breakdown</div>
      <div class="deck-modal-content" style="gap: 0.6rem;">
        <div class="deck-modal-split-row">
          <div class="deck-modal-split-header">
            <span>Timeline, Focus & Headcount</span>
            <b>24 Months · 17 FTE</b>
          </div>
          <div class="deck-modal-split-body">
            • <b>Runway Period:</b> Q2 2027 – Q2 2029 (24 Months commercial scale-out runway).<br/>
            • <b>Product Focus:</b> Launching Phase 2 Smart Home & Wearables GA, Phase 3 B2B2C licensing, and scaling enterprise pipelines.<br/>
            • <b>Team Composition:</b> 2 co-founders + 15 scaling Full-Time Employees (FTE) across software, systems, and deep ML research.
          </div>
        </div>
        <div class="deck-modal-split-row">
          <div class="deck-modal-split-header">
            <span>One-off & Monthly Overheads</span>
            <b>$1.2M One-off · $500K/mo Average</b>
          </div>
          <div class="deck-modal-split-body">
            • <b>One-off Overheads ($1.2M):</b> CE/FCC/RoHS global regulatory safety certifications ($300K), SOC2 Type II compliance audit ($100K), raw hardware inventory pre-orders for first 5,000 units ($500K), customized customer pilot deployment engineering ($300K).<br/>
            • <b>Monthly Recurring Burn ($450K):</b> Large premium FTE payroll ($250K/mo), enterprise-grade GPU scale-out clusters and fine-tuning hosts ($120K/mo), marketing & enterprise GTM customer acquisition ($40K/mo), product iteration & pivot buffer for failed features/products ($30K/mo), software enterprise licenses and seats ($10K/mo).
          </div>
        </div>
        <div class="deck-modal-split-row">
          <div class="deck-modal-split-header">
            <span>Ecosystem Leverage & Credits</span>
            <b>$650K Non-Dilutive</b>
          </div>
          <div class="deck-modal-split-body">
            • <b>CoreWeave/Nebius Cloud credits ($400K):</b> Fully offloads active model fine-tuning runs and raw model training workloads.<br/>
            • <b>Enterprise Cloud rebates ($250K):</b> Special enterprise pricing agreements offloading routine database backups and host operations.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="progress" id="progress"></div>
  <main class="deck" id="deck">
${slideHtml}
  </main>
  <nav class="nav" aria-label="Slide navigation">
    <button type="button" id="prev" aria-label="Previous">←</button>
    <span id="counter">1 / ${slides.length}</span>
    <button type="button" id="next" aria-label="Next">→</button>
    <button type="button" onclick="window.print()" aria-label="Print / PDF" title="Print or save as PDF (P)">⎙</button>
  </nav>
  <script>${JS}<\/script>
</body>
</html>`;

  fs.writeFileSync(OUT, doc, 'utf8');
  console.log(`Wrote ${OUT} (${slides.length} slides)`);
}

build();

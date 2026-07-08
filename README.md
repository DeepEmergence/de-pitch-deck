# DeepEmergence — Pitch Deck

A fully **markdown-editable** pitch deck with live **Mermaid** diagrams.
Edit `slides.md` like a normal text file — no slide-editor lock-in.

## Edit it

Just open `slides.md` in any editor. Each slide is a `---`-delimited Markdown section.

## Preview it

```bash
npm install
npm run dev
```

Opens a live-reloading preview at `localhost:3030`.

### Simple HTML deck (no Node server)

```bash
npm run build:html   # regenerates slides.html from slides.md
```

Open `slides.html` in any browser. Arrow keys or ← → buttons navigate slides.

## Docker (production)

Minimal **nginx:alpine** image (~15 MB) — builds `slides.html` from `slides.md` and serves on port **3030**.

```bash
# Stop any local dev server on 3030 first, then:
npm run docker:up      # build + run detached
npm run docker:down    # stop container
npm run docker:logs    # tail logs
```

Open [http://localhost:3030](http://localhost:3030).

Or without npm:

```bash
docker compose up -d --build
```

## Export

```bash
npm run export       # -> DeepEmergence-Pitch-Deck.pptx
npm run export:pdf   # -> DeepEmergence-Pitch-Deck.pdf
```

See also [`architecture.md`](architecture.md) for the full written architecture.

## Structure (19 slides — standard investor narrative)

| # | Slide | Purpose |
|---|---|---|
| 1 | Cover | DeepEmergence — launching July 2026 |
| 2 | Problem | Wrapper agents vs. governable labor |
| 3 | Solution | Sophon harness + platform architecture |
| 4 | Team | Ajay Pratap Singh & Aman Pratap Singh |
| 5 | Advisors | IIT Madras · policy · industry advisors |
| 6 | Market size | TAM / SAM / SOM + geographic breakdown |
| 7 | Competition | Why customers choose us vs. alternatives |
| 8 | Products | Phase 1 employees · Phase 2 wearables · Phase 3 APIs |
| 9 | Business model · Phase 1 | Retail + enterprise monetization · ARR path |
| 10 | Business model · Phase 2 | Wearables + companion apps data mesh |
| 11 | Business model · Phase 3 | Platform licensing · B2B2C expansion |
| 12 | Go-to-market & traction | Pre-revenue milestones + phased GTM + product roadmap |
| 13 | Funding roadmap | Use-of-funds charts · ARR ramp · milestones by round |
| 14 | Burn & runway | Quarterly burn chart per round · runway · phase/product milestones |
| 15–17 | The ask | Angel · Pre-seed · Seed variants |
| 18 | Unified timeline | Full labeled roadmap through pre-Series A |
| 19 | Contact | Email · website |

## Editorial note

The deck avoids claiming "AGI" outright. The framing: **model intelligence commoditizes; the engineering discipline around it does not.**

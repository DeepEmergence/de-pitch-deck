# DeepEmergence — Pitch Deck

A fully **markdown-editable** pitch deck with live **Mermaid** diagrams
(architecture, handoff sequence, positioning quadrant, roadmap timeline).
Edit `slides.md` like a normal text file — no slide-editor lock-in.

The deck is written in [Slidev](https://sli.dev) syntax, which is plain
Markdown plus:

- `---` to separate slides
- native `mermaid` code fences (rendered live, no plugin needed)
- a small amount of HTML/CSS for layout (all optional — plain markdown still works)

## Edit it

Just open `slides.md` in any editor. Each slide is a `---`-delimited Markdown
section. Mermaid diagrams are plain fenced code blocks — edit the diagram
syntax directly, no external tool required.

## Preview it (live, with rendered Mermaid diagrams)

```bash
npm install
npm run dev
```

Opens a live-reloading preview in the browser at `localhost:3030` — edit
`slides.md` and watch it update.

> No Node environment handy? Any Markdown viewer with Mermaid support (VS Code
> with the "Markdown Preview Mermaid Support" extension, Obsidian, or GitHub's
> own renderer) will also render every diagram directly from `slides.md`.

## Export to an actual .pptx / .pdf

```bash
npm run export       # -> DeepEmergence-Pitch-Deck.pptx
npm run export:pdf    # -> DeepEmergence-Pitch-Deck.pdf
```

This renders every slide (including Mermaid diagrams) to real PowerPoint
slides via a headless browser — the output `.pptx` is a normal file you can
open and tweak in PowerPoint/Keynote/Google Slides if needed, but the
markdown source remains the single source of truth for future edits.

See also [`architecture.md`](architecture.md) for the full written architecture
(world model, causal inference, deployment topology, and wrapper comparison).

## Structure

| Slide | Purpose |
|---|---|
| Title | DeepEmergence — one line positioning |
| The shift | Why 2026 rewards the harness layer over raw model intelligence |
| The problem | Wrapper agents vs. governable, persistent labor |
| Our thesis | The engineering-stack framing (deliberately not "AGI" as a claim) |
| What we built | Sophon harness — identity, guardrails, hooks, evals, traces |
| Engineered AGI | Wrapper agents vs. engineered stack — world model, causal inference |
| The full stack | Architecture diagram — cognitive layer + Sophon + domain packs |
| How a decision runs | End-to-end sequence — simulate, reason, approve, execute, trace |
| Handoffs | Multi-employee coordination (Mermaid sequence diagram) |
| Retail | Live product line — Auvi, Sira, Rina, Elyra, Catalyst, Kay |
| Enterprise & government | Roadmap domain packs (Gov, Defense, Legal, etc.) |
| Where the value compounds | Positioning quadrant (Mermaid quadrantChart) |
| Our right to win | Six moats: harness, cognition, compounding data, team, proof, platform economics |
| Business model | Retail subscription + enterprise licensing (overview) |
| Business model evolution | Revenue mix Y0–Y5, ARR and gross profit chart |
| Path to profitability | Operating margin curve, EBITDA breakeven Y4 |
| Investor milestones | Seed → A → B → exit path, liquidity windows |
| Team evolution | Headcount chart and composition by year |
| Product and research | Timeline — platform, packs, research releases |
| GTM evolution | Three-phase go-to-market strategy |
| Market opportunity | TAM / SAM / SOM — nested circles + geographic table |
| Competitive landscape | Capability heatmap vs. wrappers, frameworks, workspace AI, vertical copilots |
| White space | Mermaid flowchart — structural gaps only DeepEmergence addresses |
| Roadmap | Mermaid timeline, retail → institutional |
| Execution plan | 24-month phases, hiring ramp, Gantt milestones |
| The ask | $5M seed — use-of-funds pie and allocation table |
| Startup credits stack | Full program list — GCP, AWS, Azure, Anthropic, OpenAI, NVIDIA, Cloudflare, Modal, GitHub, Cursor, etc. |
| Credits acquisition roadmap | Gantt — when and how we unlock each program (YC-first strategy) |
| Burn and runway | Gross vs net burn, cash balance, ~$1.1M credit offset breakdown |
| Team | Ajay Pratap Singh & Aman Pratap Singh |
| Close | Contact |

## Editorial note on positioning

The deck intentionally avoids claiming "AGI" outright. The framing throughout
is: **model intelligence commoditizes; the engineering discipline around it
(identity, guardrails, evals, traces, coordination) does not.** That
discipline — rather than any single model — is positioned as the durable asset.

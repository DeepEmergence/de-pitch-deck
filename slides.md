---
theme: default
title: DeepEmergence — Pitch Deck
info: |
  DeepEmergence — the engineering stack behind policy-bound digital employees.
  Founders: Ajay Pratap Singh, Aman Pratap Singh.
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: fade
mdc: true
css: unocss
---

# DeepEmergence

### The engineering stack behind digital employees

<br>

**One harness. Any domain. Governed autonomy.**

<br>

<div class="text-sm opacity-60">
Ajay Pratap Singh · Aman Pratap Singh — San Francisco / Remote
</div>

---
layout: default
---

# The shift nobody priced in yet

Two years of AI startups optimized the wrong layer.

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-4 rounded-lg border">
<b>2024</b><br>
<span class="text-sm opacity-70">Retrieval — find and summarize the right document.</span>
</div>

<div class="p-4 rounded-lg border">
<b>2025</b><br>
<span class="text-sm opacity-70">Reasoning — analyze, reconcile, diagnose across a workflow.</span>
</div>

<div class="p-4 rounded-lg border border-blue-400">
<b>2026</b><br>
<span class="text-sm opacity-70">Multiplayer + governance — agents that represent labor need permissions, audit, and coordination across parties.</span>
</div>

</div>

<br>

The prompt was never the moat. The **harness around the model** is.

---
layout: default
---

# The problem

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### What most "AI agents" actually are

- A chat wrapper on a foundation model
- A prompt, a tool list, and hope
- No memory of what happened last time
- No enforceable boundary on what it's allowed to touch
- Breaks silently when the model changes

</div>

<div>

### What real autonomous labor requires

- Persistent identity across sessions
- Scoped, deny-by-default write access
- A record of every decision, replayable
- Coordination across humans, agents, and other agents
- Portability across models as they improve

</div>

</div>

<br>

Model intelligence commoditizes fast. **The engineering discipline around it does not.**

---
layout: default
---

# Our thesis

<div class="text-xl mt-8 leading-relaxed max-w-3xl mx-auto">

Nobody has systematically built the <b>engineering stack</b> that turns raw model
intelligence into dependable, general-purpose labor —
</div>

<div class="text-xl mt-4 leading-relaxed max-w-3xl mx-auto opacity-80">
the identity, guardrail, evaluation, and audit layer that has to exist
<b>before</b> autonomous systems can be trusted with real work, in any domain,
without a human re-reading every output.
</div>

<br>

<div class="text-2xl font-bold mt-8">
We built that layer. We call it <span class="text-blue-500">Sophon</span>.
</div>

---
layout: default
---

# What we built: Sophon

A **harness** — the operational environment every digital employee runs inside.
Built as one integrated layer: identity, policy, evaluation, and audit from day one.

<div class="grid grid-cols-5 gap-3 mt-8 text-sm">

<div class="p-3 rounded-lg border">
<b>Identity</b><br>
<span class="opacity-70">One employee, one scoped credential — never a shared API key.</span>
</div>

<div class="p-3 rounded-lg border">
<b>Guardrails</b><br>
<span class="opacity-70">Policy-as-code. Deny-by-default tool access, enforced at the boundary.</span>
</div>

<div class="p-3 rounded-lg border">
<b>Hooks</b><br>
<span class="opacity-70">Pre/post-action interception. Risky calls blocked before they execute.</span>
</div>

<div class="p-3 rounded-lg border">
<b>Evals</b><br>
<span class="opacity-70">Trajectory grading, not final-answer grading. Every regression is a harness fix.</span>
</div>

<div class="p-3 rounded-lg border">
<b>Traces</b><br>
<span class="opacity-70">Every tool call, approval, and handoff is a replayable, auditable artifact.</span>
</div>

</div>

<br>

<div class="text-center opacity-70">
Domain packs plug into this layer. They inherit governance instead of rebuilding it.
</div>

---
layout: default
---

# Engineered AGI — not a wrapper

<div class="text-sm opacity-70 mb-4">
A systems discipline, not a model claim. Language models approximate patterns;
<b>labor requires structured cognition under policy.</b>
</div>

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div class="p-4 rounded-lg border border-red-400/40">

### Wrapper agent

- LLM + prompt + tool list
- Session-scoped, correlational RAG
- No simulation before action
- Governance lives in the prompt
- Silent drift when the model changes

</div>

<div class="p-4 rounded-lg border border-blue-400/40">

### Engineered stack

- LLM + **world model + causal inference**
- Typed, governed, lineage-tracked state
- Rollout & counterfactual before writes
- Policy-as-code at the harness boundary
- Eval-gated model upgrades

</div>

</div>

---
layout: default
---

# The full stack

```mermaid {scale: 0.62}
flowchart LR
    LLM["Foundation models<br/>(swappable)"]

    subgraph cognitive["Beyond-LLM cognitive layer"]
        direction TB
        WM["World model"] --> CI["Causal inference"] --> MEM["Structured memory"] --> PLAN["Planner + verifier"]
    end

    subgraph harness["Sophon harness"]
        direction TB
        ID["Identity"] --> GR["Guardrails"] --> HK["Hooks"] --> EV["Evals"] --> TR["Traces"]
    end

    subgraph packs["Domain packs"]
        direction TB
        R["Retail: Auvi, Sira,<br/>Rina, Elyra, Catalyst, Kay"]
        E["Enterprise: Gov,<br/>Defense, Legal, Finance"]
    end

    LLM --> WM
    PLAN --> ID
    TR --> R
    TR --> E

    style cognitive fill:#1e293b,stroke:#818cf8,color:#e2e8f0
    style harness fill:#0f172a,stroke:#38bdf8,color:#f8fafc
```

The model is a component. The **engineered system** — cognition, harness, and lineage — is the product.

---
layout: default
---

# How a decision runs

Simulate and reason **before** any irreversible write.

```mermaid {scale: 0.6}
sequenceDiagram
    participant U as Human approver
    participant E as Digital employee
    participant H as Sophon harness
    participant WM as World model + causal engine
    participant LLM as Foundation model

    U->>E: Task or trigger
    E->>H: Authenticate and scope
    E->>LLM: Decompose plan
    E->>WM: Simulate rollouts, counterfactuals
    LLM->>E: Draft action
    E->>H: Proposed action + trace bundle
    Note over H: Guardrails, hooks, evals — approve if risky
    H->>U: Counterfactual brief for approval
    H->>E: Execute bounded write
    E->>H: Commit state + record trace
```

Every causal claim carries an **assumption ledger** — auditable, not buried in prose.

---
layout: default
---

# One product per domain, one substrate underneath

Each employee owns a workflow end-to-end — assemble information, reason over
it, execute the write, log the trace.

```mermaid
sequenceDiagram
    participant U as Human approver
    participant Rina as Rina Chief of Staff
    participant Legal as Legal pack
    participant Tax as Tax pack
    participant Auvi as Auvi investment desk

    Rina->>Rina: Briefing queued for founder meeting
    Rina->>Legal: Surfaces NDA renewal in data room
    Legal->>Tax: Flags QSBS eligibility question
    Tax->>Auvi: Notes cap-table clause relevant to portfolio
    Auvi->>U: Packages desk memo for review
    U->>Auvi: Approves write, trace recorded
```

This is the difference between a **chatbot per task** and **employees that hand off work** —
the same way a real team does.

---
layout: default
---

# Retail — live and shipping

<div class="text-sm opacity-70 mb-4">
Personal army of digital employees. Same harness, six domains, real people paying for depth.
</div>

| Employee | Domain | Role | Status |
|---|---|---|---|
| **Auvi** | Investment | Digital family office — desk depth | 🟢 Live |
| **Sira** | Investment | Markets intelligence — pocket depth | 🟢 Live |
| **Rina** | Operations | AI Chief of Staff | 🟡 Early access |
| **Elyra** | Health | Healthspan COO | ⚪ Coming soon |
| **Catalyst** | Career | Career growth operator | ⚪ Coming soon |
| **Kay** | Network | Relationship operator | ⚪ Coming soon |

<br>

Investment is the only vertical fully covered today — capital markets depth first.
Tax, insurance, and household finance remain deliberate next packs: **depth before breadth**.

---
layout: default
---

# Enterprise & government — same harness, deeper stakes

<div class="grid grid-cols-3 gap-3 text-sm mt-6">

<div class="p-3 rounded-lg border border-dashed">
<b>Government</b><br>Regulatory affairs officer — legislation diffing, briefing routing.
</div>

<div class="p-3 rounded-lg border border-dashed">
<b>Defense</b><br>Mission intelligence analyst — feed fusion, ROE-bounded execution support.
</div>

<div class="p-3 rounded-lg border border-dashed">
<b>Healthcare systems</b><br>Payer operations officer — prior auth, claims coordination.
</div>

<div class="p-3 rounded-lg border border-dashed">
<b>Legal</b><br>Contract & compliance counsel — obligation graphs, regulator diffing.
</div>

<div class="p-3 rounded-lg border border-dashed">
<b>Finance (enterprise)</b><br>Treasury & credit operator — entity reconciliation, close packages.
</div>

<div class="p-3 rounded-lg border border-dashed">
<b>Industrials</b><br>Field & supply ops chief — maintenance dispatch, vendor routing.
</div>

</div>

<br>

Same identity model, same guardrails, same audit trail — each new domain is a pack on the existing substrate.

---
layout: default
---

# Where the value compounds

```mermaid {scale: 0.7}
quadrantChart
    title Where the value actually sits
    x-axis Low governance --> High governance
    y-axis Shallow --> Deep domain ownership
    quadrant-1 Systems of record
    quadrant-2 Domain copilots
    quadrant-3 Chat wrappers
    quadrant-4 Framework toolkits
    "Chat wrapper apps": [0.18, 0.18]
    "Agent frameworks": [0.32, 0.42]
    "Vertical copilots": [0.55, 0.5]
    "DeepEmergence Sophon": [0.85, 0.85]
```

Wrappers rent a model's intelligence for a session. We own the **identity, policy,
and audit lineage** underneath every domain pack — the part that compounds and
does not get commoditized by the next model release.

---
layout: default
---

# Our right to win

<div class="text-sm opacity-70 mb-6">
Why this category accumulates to us — not the next wrapper with a bigger context window.
</div>

<div class="grid grid-cols-3 gap-3 text-sm">

<div class="p-4 rounded-lg border border-blue-400/40">
<b>Harness-first, not retrofitted</b><br>
<span class="opacity-70">Identity, guardrails, evals, and traces shipped as one integrated layer from day one. Competitors bolt governance onto chat wrappers; we run inside it.</span>
</div>

<div class="p-4 rounded-lg border border-blue-400/40">
<b>Beyond-LLM in the execution path</b><br>
<span class="opacity-70">World models, causal inference, and governed state are not roadmap items — they sit between reasoning and every irreversible write.</span>
</div>

<div class="p-4 rounded-lg border border-blue-400/40">
<b>Compounding operational moat</b><br>
<span class="opacity-70">Trace archives, eval regressions, guardrail history, and cross-pack handoffs deepen with every customer hour. The next model release does not reset this.</span>
</div>

<div class="p-4 rounded-lg border border-blue-400/40">
<b>Founder-market fit</b><br>
<span class="opacity-70">Institutional finance operator (Premji Invest, Goldman, YC) plus agent-systems researcher (UMD). Domain depth and harness engineering from the same founding team.</span>
</div>

<div class="p-4 rounded-lg border border-blue-400/40">
<b>Proof in market, path to institutional</b><br>
<span class="opacity-70">Auvi and Sira live with paying users. Retail proves the harness; every audit trail unlocks the regulated verticals next.</span>
</div>

<div class="p-4 rounded-lg border border-blue-400/40">
<b>Platform economics</b><br>
<span class="opacity-70">One Sophon runtime, many domain packs. Each new employee is incremental margin on shared cognition, policy, and infrastructure.</span>
</div>

</div>

<br>

<div class="text-center opacity-80">
We are not racing to the best prompt. We are building the **system of record for governed machine labor**.
</div>

---
layout: default
---

# Business model

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div class="p-4 rounded-lg border">
<b>Retail today</b><br>
<span class="opacity-70">Per-employee subscription — headcount pricing aligned to AI labor. Free tier → paid by fleet size and parallel task capacity.</span>
</div>

<div class="p-4 rounded-lg border">
<b>Enterprise tomorrow</b><br>
<span class="opacity-70">Domain pack licensing on Sophon runtime. On-prem, private cloud, or hosted. Audit lineage as a first-class product surface.</span>
</div>

</div>

<div class="text-center text-sm mt-4 opacity-80">
The harness is the platform. Every new pack is incremental margin on the same substrate.
</div>

---
layout: default
---

# Business model evolution

<div class="text-xs opacity-70 mb-2">Revenue mix shifts from retail proof to institutional platform — margin expands as packs share one runtime.</div>

<div class="overflow-hidden rounded-lg border text-[11px]">

<div class="grid grid-cols-6 bg-gray-800/40 font-semibold">
<div class="p-2 border-r border-b">Stage</div>
<div class="p-2 border-r border-b text-right">ARR</div>
<div class="p-2 border-r border-b text-center">Retail</div>
<div class="p-2 border-r border-b text-center">Enterprise</div>
<div class="p-2 border-r border-b text-center">Gross margin</div>
<div class="p-2 border-b">Primary motion</div>
</div>

<div class="grid grid-cols-6">
<div class="p-2 border-r border-b">Y0 · 2025</div>
<div class="p-2 border-r border-b text-right">$0.5M</div>
<div class="p-2 border-r border-b text-center">98%</div>
<div class="p-2 border-r border-b text-center">2%</div>
<div class="p-2 border-r border-b text-center">55%</div>
<div class="p-2 border-b">Auvi + Sira live</div>
</div>

<div class="grid grid-cols-6">
<div class="p-2 border-r border-b">Y1 · 2026</div>
<div class="p-2 border-r border-b text-right">$4M</div>
<div class="p-2 border-r border-b text-center">85%</div>
<div class="p-2 border-r border-b text-center">15%</div>
<div class="p-2 border-r border-b text-center">62%</div>
<div class="p-2 border-b">Fleet upsell + design partners</div>
</div>

<div class="grid grid-cols-6">
<div class="p-2 border-r border-b">Y2 · 2027</div>
<div class="p-2 border-r border-b text-right">$12M</div>
<div class="p-2 border-r border-b text-center">70%</div>
<div class="p-2 border-r border-b text-center">30%</div>
<div class="p-2 border-r border-b text-center">68%</div>
<div class="p-2 border-b">Vertical depth + LOIs</div>
</div>

<div class="grid grid-cols-6">
<div class="p-2 border-r border-b">Y3 · 2028</div>
<div class="p-2 border-r border-b text-right">$28M</div>
<div class="p-2 border-r border-b text-center">50%</div>
<div class="p-2 border-r border-b text-center">50%</div>
<div class="p-2 border-r border-b text-center">72%</div>
<div class="p-2 border-b">Enterprise pack sales</div>
</div>

<div class="grid grid-cols-6">
<div class="p-2 border-r border-b">Y4 · 2029</div>
<div class="p-2 border-r border-b text-right">$52M</div>
<div class="p-2 border-r border-b text-center">38%</div>
<div class="p-2 border-r border-b text-center">62%</div>
<div class="p-2 border-r border-b text-center">76%</div>
<div class="p-2 border-b">Institutional + channel</div>
</div>

<div class="grid grid-cols-6 bg-blue-500/15 font-semibold">
<div class="p-2 border-r">Y5 · 2030</div>
<div class="p-2 border-r text-right">$85M</div>
<div class="p-2 border-r text-center">35%</div>
<div class="p-2 border-r text-center">65%</div>
<div class="p-2 border-r text-center">78%</div>
<div class="p-2">Platform economics at scale</div>
</div>

</div>

```mermaid {scale: 0.75}
xychart-beta
    title "ARR and gross margin"
    x-axis [Y0, Y1, Y2, Y3, Y4, Y5]
    y-axis "USD millions" 0 --> 90
    bar [0.5, 4, 12, 28, 52, 85]
    line [0.55, 2.5, 8.2, 20, 39.5, 66]
```

<div class="text-[10px] opacity-50 text-center">Bars = ARR · Line = gross profit (approx.)</div>

---
layout: default
---

# Path to profitability

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

```mermaid {scale: 0.72}
xychart-beta
    title "Operating margin path"
    x-axis [Y0, Y1, Y2, Y3, Y4, Y5]
    y-axis "Margin percent" -60 --> 25
    line [-55, -40, -22, -5, 8, 18]
```

<div class="text-[10px] opacity-60 mt-1">EBITDA breakeven target: <b>Y4</b> · Cash-flow positive: <b>Y5</b></div>

</div>

<div class="text-[11px] space-y-2">

<div class="p-2 rounded border">
<b>Y0–Y1 · Invest in substrate</b><br>
<span class="opacity-70">Negative margin by design — Sophon, world model, eval infra. Credits offset compute burn.</span>
</div>

<div class="p-2 rounded border">
<b>Y2–Y3 · Margin inflection</b><br>
<span class="opacity-70">Enterprise packs lift ACV 10–50x vs retail seat. Shared runtime means each pack is mostly margin.</span>
</div>

<div class="p-2 rounded border border-blue-400/40">
<b>Y4–Y5 · Platform economics</b><br>
<span class="opacity-70">65%+ revenue from enterprise. Trace and policy lineage become renewal moat — NRR target 125%+.</span>
</div>

</div>

</div>

<div class="text-xs opacity-70 mt-3 text-center">
Unit economics: retail CAC payback &lt;6 mo · enterprise ACV $250K–$2M · LTV/CAC &gt;5x at scale
</div>

---
layout: default
---

# Investor milestones and exit path

<div class="overflow-hidden rounded-lg border text-[11px] mt-2">

<div class="grid grid-cols-5 bg-gray-800/40 font-semibold">
<div class="p-2 border-r border-b">Round</div>
<div class="p-2 border-r border-b">Timing</div>
<div class="p-2 border-r border-b">Raise</div>
<div class="p-2 border-r border-b">Milestone gate</div>
<div class="p-2 border-b">Investor liquidity path</div>
</div>

<div class="grid grid-cols-5 border-b border-blue-400/30 bg-blue-500/10">
<div class="p-2 border-r font-bold">Seed</div>
<div class="p-2 border-r">2026</div>
<div class="p-2 border-r">$5M</div>
<div class="p-2 border-r">6 retail packs live · $4M ARR · SOC 2 Type I</div>
<div class="p-2">Platform proof — not an exit</div>
</div>

<div class="grid grid-cols-5">
<div class="p-2 border-r border-b">Series A</div>
<div class="p-2 border-r border-b">2027</div>
<div class="p-2 border-r border-b">$15–20M</div>
<div class="p-2 border-r border-b">$12M ARR · 3 enterprise packs in prod · NRR &gt;110%</div>
<div class="p-2 border-b">Secondary window opens for seed</div>
</div>

<div class="grid grid-cols-5">
<div class="p-2 border-r border-b">Series B</div>
<div class="p-2 border-r border-b">2029</div>
<div class="p-2 border-r border-b">$40–60M</div>
<div class="p-2 border-r border-b">$50M+ ARR · gov/defense pilots · EBITDA+</div>
<div class="p-2 border-b">Primary exit window — strategic interest</div>
</div>

<div class="grid grid-cols-5">
<div class="p-2 border-r">Growth / IPO path</div>
<div class="p-2 border-r">2030+</div>
<div class="p-2 border-r">Optional</div>
<div class="p-2 border-r">$85M+ ARR · category leader in governed labor</div>
<div class="p-2">IPO or strategic M&A ($500M–$1B+)</div>
</div>

</div>

<div class="grid grid-cols-3 gap-2 mt-3 text-[10px]">

<div class="p-2 rounded border">
<b>Likely acquirers</b><br>
Cloud platforms, enterprise software, systems of record seeking AI labor layer
</div>

<div class="p-2 rounded border">
<b>Seed return scenario</b><br>
Series B strategic at $500M+ → 25–40x · IPO path → 50x+ at $85M ARR scale
</div>

<div class="p-2 rounded border border-blue-400/40">
<b>Why now</b><br>
Category forming — first mover with production harness + audit lineage wins the substrate
</div>

</div>

---
layout: default
---

# Team evolution

<div class="grid grid-cols-2 gap-6 mt-2 items-center">

<div>

```mermaid {scale: 0.75}
xychart-beta
    title "Headcount by year"
    x-axis [Y0, Y1, Y2, Y3, Y4, Y5]
    y-axis "FTE" 0 --> 130
    bar [2, 16, 35, 55, 85, 120]
    line [2, 16, 35, 55, 85, 120]
```

</div>

<div class="text-[11px]">

<div class="overflow-hidden rounded-lg border">

<div class="grid grid-cols-3 bg-gray-800/40 font-semibold">
<div class="p-1.5 border-r border-b">Year</div>
<div class="p-1.5 border-r border-b text-right">FTE</div>
<div class="p-1.5 border-b">Team composition</div>
</div>

<div class="grid grid-cols-3"><div class="p-1.5 border-r border-b">Y0</div><div class="p-1.5 border-r border-b text-right">2</div><div class="p-1.5 border-b">Founders</div></div>
<div class="grid grid-cols-3"><div class="p-1.5 border-r border-b">Y1</div><div class="p-1.5 border-r border-b text-right">16</div><div class="p-1.5 border-b">Eng 10 · Product 3 · GTM 3</div></div>
<div class="grid grid-cols-3"><div class="p-1.5 border-r border-b">Y2</div><div class="p-1.5 border-r border-b text-right">35</div><div class="p-1.5 border-b">+ML research 5 · Enterprise 8</div></div>
<div class="grid grid-cols-3"><div class="p-1.5 border-r border-b">Y3</div><div class="p-1.5 border-r border-b text-right">55</div><div class="p-1.5 border-b">+Sales 12 · CS 5 · Compliance 4</div></div>
<div class="grid grid-cols-3"><div class="p-1.5 border-r border-b">Y4</div><div class="p-1.5 border-r border-b text-right">85</div><div class="p-1.5 border-b">+Gov sales 8 · Partner 6</div></div>
<div class="grid grid-cols-3 bg-blue-500/15 font-semibold"><div class="p-1.5 border-r">Y5</div><div class="p-1.5 border-r text-right">120</div><div class="p-1.5">Platform 40 · Packs 35 · GTM 45</div></div>

</div>

<div class="text-[10px] opacity-60 mt-2">Avg fully-loaded cost ~$185K (Y1) → ~$165K (Y5) as mix shifts to non-US hubs</div>

</div>

</div>

---
layout: default
---

# Product, research, and launches

```mermaid {scale: 0.55}
timeline
    title Platform, packs, and research releases
    section 2025 Shipped
        Sophon harness v1 : Auvi live : Sira live
    section 2026 H1 Product
        Rina early access : Elyra Catalyst Kay : World model v1
    section 2026 H2 Product
        Causal engine prod : Household finance : Insurance pack
    section 2026 Research
        Causal schemas finance : Multi-agent eval suite : SOC 2 Type I
    section 2027 Product
        Legal pack : Tax pack : Enterprise runtime
    section 2027 Research
        Cross-pack causal graphs : Institutional audit v2 : Gov ROE schemas
    section 2028 Plus
        Defense pilot : Healthcare payer : APAC retail launch
```

<div class="grid grid-cols-3 gap-2 mt-2 text-[10px]">

<div class="p-2 rounded border">
<b>Product rhythm</b><br>
2–3 retail packs per year · 1 enterprise vertical per year after Y2
</div>

<div class="p-2 rounded border">
<b>Research rhythm</b><br>
World model + causal engine major release annually · eval suite continuous
</div>

<div class="p-2 rounded border border-blue-400/40">
<b>Platform rhythm</b><br>
Sophon major version yearly · compliance cert every 12–18 months
</div>

</div>

---
layout: default
---

# GTM evolution

<div class="grid grid-cols-3 gap-3 text-[11px] mt-3">

<div class="p-3 rounded-lg border border-blue-400/40">
<b>Phase 1 · Y0–Y1</b><br>
<span class="opacity-70 font-semibold">Founder-led, product-led growth</span>
<ul class="mt-2 opacity-80 space-y-1">
<li>YC + finance community distribution</li>
<li>Investment Twitter/Reddit, founder networks</li>
<li>Free tier → paid fleet conversion</li>
<li>Content: desk memos, audit-grade research demos</li>
</ul>
<div class="mt-2 text-blue-400">Target: 25K paid seats · $4M ARR</div>
</div>

<div class="p-3 rounded-lg border border-blue-400/40">
<b>Phase 2 · Y2–Y3</b><br>
<span class="opacity-70 font-semibold">Vertical depth + design partners</span>
<ul class="mt-2 opacity-80 space-y-1">
<li>Vertical influencers and newsletter partnerships</li>
<li>3–5 enterprise design partners per vertical</li>
<li>SOC 2 + case studies unlock regulated buyers</li>
<li>Self-serve → sales-assist for fleet accounts</li>
</ul>
<div class="mt-2 text-blue-400">Target: 120K seats · $28M ARR</div>
</div>

<div class="p-3 rounded-lg border border-blue-400/40">
<b>Phase 3 · Y4–Y5</b><br>
<span class="opacity-70 font-semibold">Enterprise platform + channel</span>
<ul class="mt-2 opacity-80 space-y-1">
<li>Enterprise AE team + solution engineers</li>
<li>SI and cloud marketplace (AWS/GCP/Azure)</li>
<li>Government and defense RFP pipeline</li>
<li>Partner-built packs on Sophon runtime</li>
</ul>
<div class="mt-2 text-blue-400">Target: 550K seats · $85M ARR</div>
</div>

</div>

<div class="text-[10px] opacity-60 mt-3 text-center">
GTM spend: 9% of seed · scales to 22% of revenue by Y3 · CAC efficiency improves as harness proof compounds
</div>

---
layout: default
---

# Market opportunity

<div class="grid grid-cols-5 gap-6 mt-2 items-center">

<div class="col-span-2">

<div class="relative flex items-center justify-center h-56">

<div class="absolute w-56 h-56 rounded-full border-2 border-blue-400/25 flex flex-col items-center justify-start pt-2">
<span class="text-xs opacity-50 font-semibold">TAM</span>
<span class="text-sm opacity-60">$8.4T</span>
</div>

<div class="absolute w-40 h-40 rounded-full border-2 border-blue-400/45 bg-blue-500/5 flex flex-col items-center justify-start pt-2">
<span class="text-xs opacity-70 font-semibold">SAM</span>
<span class="text-sm">$156B</span>
</div>

<div class="absolute w-24 h-24 rounded-full border-2 border-blue-400 bg-blue-500/25 flex flex-col items-center justify-center">
<span class="text-xs font-semibold">SOM</span>
<span class="text-xs font-bold">$85M</span>
<span class="text-[10px] opacity-70">Yr-5 ARR</span>
</div>

</div>

<div class="text-[11px] space-y-1 mt-3">
<div><b>TAM</b> — global knowledge-work labor spend addressable by digital employees</div>
<div><b>SAM</b> — governed AI labor software, 2030 serviceable</div>
<div><b>SOM</b> — Year-5 ARR beachhead capture</div>
</div>

</div>

<div class="col-span-3">

<div class="overflow-hidden rounded-lg border text-[11px]">

<div class="grid grid-cols-4 bg-gray-800/40 font-semibold">
<div class="p-2 border-r border-b">Geography</div>
<div class="p-2 border-r border-b text-right">TAM</div>
<div class="p-2 border-r border-b text-right">SAM ’30</div>
<div class="p-2 border-b text-right">SOM (Yr-5)</div>
</div>

<div class="grid grid-cols-4">
<div class="p-2 border-r border-b">North America</div>
<div class="p-2 border-r border-b text-right">$3.1T</div>
<div class="p-2 border-r border-b text-right">$62B</div>
<div class="p-2 border-b text-right">$40M</div>
</div>

<div class="grid grid-cols-4">
<div class="p-2 border-r border-b">Europe</div>
<div class="p-2 border-r border-b text-right">$2.2T</div>
<div class="p-2 border-r border-b text-right">$41B</div>
<div class="p-2 border-b text-right">$17M</div>
</div>

<div class="grid grid-cols-4">
<div class="p-2 border-r border-b">Japan</div>
<div class="p-2 border-r border-b text-right">$0.9T</div>
<div class="p-2 border-r border-b text-right">$16B</div>
<div class="p-2 border-b text-right">$6M</div>
</div>

<div class="grid grid-cols-4">
<div class="p-2 border-r border-b">India</div>
<div class="p-2 border-r border-b text-right">$0.7T</div>
<div class="p-2 border-r border-b text-right">$14B</div>
<div class="p-2 border-b text-right">$8M</div>
</div>

<div class="grid grid-cols-4">
<div class="p-2 border-r border-b">Singapore</div>
<div class="p-2 border-r border-b text-right">$0.12T</div>
<div class="p-2 border-r border-b text-right">$7B</div>
<div class="p-2 border-b text-right">$5M</div>
</div>

<div class="grid grid-cols-4">
<div class="p-2 border-r border-b">UAE</div>
<div class="p-2 border-r border-b text-right">$0.08T</div>
<div class="p-2 border-r border-b text-right">$6B</div>
<div class="p-2 border-b text-right">$4M</div>
</div>

<div class="grid grid-cols-4 opacity-70">
<div class="p-2 border-r border-b">Rest of world</div>
<div class="p-2 border-r border-b text-right">$1.3T</div>
<div class="p-2 border-r border-b text-right">$10B</div>
<div class="p-2 border-b text-right">$5M</div>
</div>

<div class="grid grid-cols-4 bg-blue-500/20 font-bold">
<div class="p-2 border-r">Global total</div>
<div class="p-2 border-r text-right">$8.4T</div>
<div class="p-2 border-r text-right">$156B</div>
<div class="p-2 text-right">$85M</div>
</div>

</div>

</div>

</div>

<div class="text-[10px] opacity-50 mt-3 text-center">
Sizing anchored to regional knowledge-worker labor economics and AI agent platform growth curves (IDC, Gartner). Beachhead in North America and affluent APAC; SOM assumes ~550K paid retail seats and 40 enterprise pack contracts.
</div>

---
layout: default
---

# Competitive landscape — gaps we fill

<div class="text-xs opacity-70 mb-3">
Incumbents optimize for chat, codegen, or single-vertical depth. Nobody ships <b>governed, multi-agent labor on a cross-domain substrate</b> with cognition beyond the LLM.
</div>

<div class="overflow-hidden rounded-lg border text-[11px]">

<div class="grid grid-cols-6 gap-0 bg-gray-800/40 font-semibold">
<div class="p-2 border-r border-b">Capability</div>
<div class="p-2 border-r border-b text-center">Chat wrappers</div>
<div class="p-2 border-r border-b text-center">Agent frameworks</div>
<div class="p-2 border-r border-b text-center">Workspace AI</div>
<div class="p-2 border-r border-b text-center">Vertical copilots</div>
<div class="p-2 border-b text-center text-blue-400">DeepEmergence</div>
</div>

<div class="grid grid-cols-6 gap-0">
<div class="p-2 border-r border-b opacity-80">Persistent scoped identity</div>
<div class="p-2 border-r border-b text-center bg-gray-800/60">—</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-b text-center bg-blue-500/30 font-bold">✓</div>
</div>

<div class="grid grid-cols-6 gap-0">
<div class="p-2 border-r border-b opacity-80">Policy-as-code governance</div>
<div class="p-2 border-r border-b text-center bg-gray-800/60">—</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-b text-center bg-blue-500/30 font-bold">✓</div>
</div>

<div class="grid grid-cols-6 gap-0">
<div class="p-2 border-r border-b opacity-80">Replayable audit trails</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-b text-center bg-blue-500/30 font-bold">✓</div>
</div>

<div class="grid grid-cols-6 gap-0">
<div class="p-2 border-r border-b opacity-80">Multi-agent handoffs</div>
<div class="p-2 border-r border-b text-center bg-gray-800/60">—</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-r border-b text-center bg-gray-800/60">—</div>
<div class="p-2 border-b text-center bg-blue-500/30 font-bold">✓</div>
</div>

<div class="grid grid-cols-6 gap-0">
<div class="p-2 border-r border-b opacity-80">World model before writes</div>
<div class="p-2 border-r border-b text-center bg-gray-800/60">—</div>
<div class="p-2 border-r border-b text-center bg-gray-800/60">—</div>
<div class="p-2 border-r border-b text-center bg-gray-800/60">—</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-b text-center bg-blue-500/30 font-bold">✓</div>
</div>

<div class="grid grid-cols-6 gap-0">
<div class="p-2 border-r border-b opacity-80">Causal intervention reasoning</div>
<div class="p-2 border-r border-b text-center bg-gray-800/60">—</div>
<div class="p-2 border-r border-b text-center bg-gray-800/60">—</div>
<div class="p-2 border-r border-b text-center bg-gray-800/60">—</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-b text-center bg-blue-500/30 font-bold">✓</div>
</div>

<div class="grid grid-cols-6 gap-0">
<div class="p-2 border-r border-b opacity-80">End-to-end workflow ownership</div>
<div class="p-2 border-r border-b text-center bg-gray-800/60">—</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-r border-b text-center bg-yellow-500/20">~</div>
<div class="p-2 border-r border-b text-center bg-blue-500/20">✓</div>
<div class="p-2 border-b text-center bg-blue-500/30 font-bold">✓</div>
</div>

<div class="grid grid-cols-6 gap-0">
<div class="p-2 border-r opacity-80">Cross-domain platform substrate</div>
<div class="p-2 border-r text-center bg-gray-800/60">—</div>
<div class="p-2 border-r text-center bg-yellow-500/20">~</div>
<div class="p-2 border-r text-center bg-yellow-500/20">~</div>
<div class="p-2 border-r text-center bg-gray-800/60">—</div>
<div class="p-2 text-center bg-blue-500/30 font-bold">✓</div>
</div>

</div>

<div class="flex justify-center gap-6 mt-3 text-[11px] opacity-70">
<span><span class="inline-block w-3 h-3 rounded bg-blue-500/30 mr-1"></span>Full — in production path</span>
<span><span class="inline-block w-3 h-3 rounded bg-yellow-500/20 mr-1"></span>Partial — bolt-on or single-domain</span>
<span><span class="inline-block w-3 h-3 rounded bg-gray-800/60 mr-1"></span>Gap — not designed for this</span>
</div>

---
layout: default
---

# Where incumbents stop — our white space

```mermaid
flowchart TB
    subgraph incumbents["What incumbents optimize for"]
        W["Chat wrappers<br/>session intelligence"]
        F["Agent frameworks<br/>developer tooling"]
        C["Workspace AI<br/>productivity assist"]
        V["Vertical copilots<br/>one domain deep"]
    end

    subgraph whitespace["Structural white space"]
        G1["Governed multi-agent labor"]
        G2["World model plus causal cognition"]
        G3["Cross-domain pack platform"]
    end

    W --> G1
    F --> G1
    C --> G2
    V --> G3

    DE["DeepEmergence Sophon"] --> G1
    DE --> G2
    DE --> G3

    style whitespace fill:#1e293b,stroke:#818cf8,color:#e2e8f0
    style DE fill:#0f172a,stroke:#38bdf8,color:#f8fafc
```

Vertical copilots win one workflow. Frameworks win developers. **We win the substrate** — identity, cognition, and audit that every domain pack inherits.

---
layout: default
---

# Roadmap

```mermaid
timeline
    title From retail proof to institutional platform
    section 2025
        Auvi live : Sira live
    section 2026 H1
        Rina early access : Elyra Catalyst Kay ship
    section 2026 H2
        Household finance pack : Insurance pack
    section 2027
        Legal and tax packs : Government and defense pilots
```

Depth first in retail. Every proof point — evals, guardrail history, audit
trail — becomes the credibility that unlocks the regulated verticals next.

---
layout: default
---

# Execution plan — 24 months

<div class="grid grid-cols-3 gap-3 text-sm mt-4">

<div class="p-4 rounded-lg border border-blue-400/40">
<b>Phase 1 · M1–8</b><br>
<span class="opacity-70">Harden Sophon substrate</span>
<ul class="mt-2 opacity-80 text-xs space-y-1">
<li>Ship Rina, Elyra, Catalyst, Kay</li>
<li>World model + causal engine in prod path</li>
<li>SOC 2 Type I kickoff</li>
<li>Team: 2 → 8 FTE</li>
</ul>
</div>

<div class="p-4 rounded-lg border border-blue-400/40">
<b>Phase 2 · M9–16</b><br>
<span class="opacity-70">Retail depth + enterprise design partners</span>
<ul class="mt-2 opacity-80 text-xs space-y-1">
<li>Household finance + insurance packs</li>
<li>First 3 enterprise LOIs (legal, finance)</li>
<li>SOC 2 Type I complete</li>
<li>Team: 8 → 13 FTE</li>
</ul>
</div>

<div class="p-4 rounded-lg border border-blue-400/40">
<b>Phase 3 · M17–24</b><br>
<span class="opacity-70">Institutional pilots + Series A metrics</span>
<ul class="mt-2 opacity-80 text-xs space-y-1">
<li>Legal + tax packs live</li>
<li>Government and defense pilots</li>
<li>$4M+ ARR run-rate target</li>
<li>Team: 13 → 16 FTE</li>
</ul>
</div>

</div>

```mermaid {scale: 0.9}
gantt
    title Execution milestones
    dateFormat YYYY-MM
    axisFormat %b %Y
    todayMarker off

    section Platform
    Sophon hardening           :2026-07, 6M
    World model and causal v1  :2026-09, 8M
    SOC 2 Type I               :2026-10, 6M

    section Retail packs
    Rina Elyra Catalyst Kay    :2026-07, 5M
    Household finance          :2027-01, 4M
    Insurance pack             :2027-03, 4M

    section Institutional
    Enterprise design partners :2027-01, 6M
    Legal and tax packs        :2027-05, 5M
    Gov and defense pilots     :2027-07, 5M
```

---
layout: default
---

# The ask — $5M seed

<div class="grid grid-cols-2 gap-8 mt-2 items-center">

<div>

```mermaid
pie showData
    title Use of funds
    "Salaries and benefits" : 2850
    "Research and ML compute" : 750
    "Engineering contractors" : 350
    "GTM and customer ops" : 450
    "Legal and compliance" : 275
    "Admin and misc" : 175
    "Reserve buffer" : 150
```

</div>

<div class="text-sm space-y-2">

<div class="p-2 rounded border flex justify-between">
<span>Salaries and benefits</span><b>$2.85M · 57%</b>
</div>
<div class="p-2 rounded border flex justify-between">
<span>Research and ML compute</span><b>$750K · 15%</b>
</div>
<div class="p-2 rounded border flex justify-between">
<span>Engineering contractors</span><b>$350K · 7%</b>
</div>
<div class="p-2 rounded border flex justify-between">
<span>GTM and customer ops</span><b>$450K · 9%</b>
</div>
<div class="p-2 rounded border flex justify-between">
<span>Legal and compliance</span><b>$275K · 5%</b>
</div>
<div class="p-2 rounded border flex justify-between">
<span>Admin and misc</span><b>$175K · 4%</b>
</div>
<div class="p-2 rounded border border-blue-400/40 flex justify-between">
<span>Reserve buffer</span><b>$150K · 3%</b>
</div>

</div>

</div>

<div class="text-center mt-4 text-sm opacity-80">
<b>$5M seed</b> · 24-month runway · gets us to institutional pilots and Series A metrics
</div>

---
layout: default
---

# Startup credits stack

<div class="text-xs opacity-70 mb-2">
Non-dilutive infrastructure and model credits stack on top of cash. <b>YC affiliation unlocks top tiers</b> — we apply in a deliberate sequence to maximize runway.
</div>

<div class="grid grid-cols-3 gap-2 text-[10px]">

<div class="rounded-lg border overflow-hidden">
<div class="p-2 bg-gray-800/50 font-semibold">Cloud and GPU infrastructure</div>
<div class="grid grid-cols-3 gap-0 border-t">
<div class="p-1.5 border-r border-b opacity-60">Program</div>
<div class="p-1.5 border-r border-b opacity-60">Up to</div>
<div class="p-1.5 border-b opacity-60">Unlock</div>
</div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r border-b">Google Cloud AI Scale</div><div class="p-1.5 border-r border-b text-blue-400 font-bold">$350K</div><div class="p-1.5 border-b">YC + AI-first</div></div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r border-b">AWS Activate (YC)</div><div class="p-1.5 border-r border-b text-blue-400 font-bold">$500K</div><div class="p-1.5 border-b">YC batch</div></div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r border-b">Microsoft Azure</div><div class="p-1.5 border-r border-b text-blue-400 font-bold">$150K</div><div class="p-1.5 border-b">Investor Network</div></div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r border-b">NVIDIA Inception</div><div class="p-1.5 border-r border-b text-blue-400 font-bold">$100K</div><div class="p-1.5 border-b">Apply + CSP partners</div></div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r border-b">Cloudflare Startups</div><div class="p-1.5 border-r border-b text-blue-400 font-bold">$350K</div><div class="p-1.5 border-b">AI tier / high growth</div></div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r">Modal for Startups</div><div class="p-1.5 border-r text-blue-400 font-bold">$25K</div><div class="p-1.5">Seed apply</div></div>
</div>

<div class="rounded-lg border overflow-hidden">
<div class="p-2 bg-gray-800/50 font-semibold">AI models and inference</div>
<div class="grid grid-cols-3 gap-0 border-t">
<div class="p-1.5 border-r border-b opacity-60">Program</div>
<div class="p-1.5 border-r border-b opacity-60">Up to</div>
<div class="p-1.5 border-b opacity-60">Unlock</div>
</div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r border-b">Anthropic Claude Startups</div><div class="p-1.5 border-r border-b text-blue-400 font-bold">$100K</div><div class="p-1.5 border-b">VC-backed apply</div></div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r border-b">OpenAI for Startups</div><div class="p-1.5 border-r border-b text-blue-400 font-bold">$100K</div><div class="p-1.5 border-b">YC / VC partner</div></div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r border-b">AWS Bedrock models</div><div class="p-1.5 border-r border-b text-blue-400 font-bold">incl.</div><div class="p-1.5 border-b">Via AWS YC credits</div></div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r border-b">Groq for Startups</div><div class="p-1.5 border-r border-b text-blue-400 font-bold">$10K</div><div class="p-1.5 border-b">Direct apply</div></div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r">Gemini / Vertex AI</div><div class="p-1.5 border-r text-blue-400 font-bold">incl.</div><div class="p-1.5">Via GCP AI credits</div></div>
</div>

<div class="rounded-lg border overflow-hidden">
<div class="p-2 bg-gray-800/50 font-semibold">Dev tools and platform</div>
<div class="grid grid-cols-3 gap-0 border-t">
<div class="p-1.5 border-r border-b opacity-60">Program</div>
<div class="p-1.5 border-r border-b opacity-60">Up to</div>
<div class="p-1.5 border-b opacity-60">Unlock</div>
</div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r border-b">GitHub for Startups</div><div class="p-1.5 border-r border-b text-blue-400 font-bold">$10K</div><div class="p-1.5 border-b">YC / partner</div></div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r border-b">Cursor team credits</div><div class="p-1.5 border-r border-b text-blue-400 font-bold">$15K+</div><div class="p-1.5 border-b">YC batch perk</div></div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r border-b">Vercel for Startups</div><div class="p-1.5 border-r border-b text-blue-400 font-bold">$30K</div><div class="p-1.5 border-b">Direct apply</div></div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r border-b">Google Workspace</div><div class="p-1.5 border-r border-b text-blue-400 font-bold">1 yr</div><div class="p-1.5 border-b">Via GCP YC bundle</div></div>
<div class="grid grid-cols-3 gap-0"><div class="p-1.5 border-r">NVIDIA DLI training</div><div class="p-1.5 border-r text-blue-400 font-bold">Free</div><div class="p-1.5">Inception member</div></div>
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-2 text-[11px]">
<div class="p-2 rounded-lg border border-blue-400/40 text-center">
<b>Nominal credit universe</b> — <span class="font-bold text-blue-400">~$1.7M+</span><br>
<span class="opacity-70">Program ceilings across cloud, models, and dev tools</span>
</div>
<div class="p-2 rounded-lg border border-blue-400/40 text-center">
<b>Realistic net value</b> — <span class="font-bold text-blue-400">~$1.1M</span><br>
<span class="opacity-70">After overlap and tier qualification · ~5 months extra runway</span>
</div>
</div>

<div class="text-[9px] opacity-50 mt-1 text-center">
Published program ceilings; actual awards depend on tier, usage, and provider discretion.
</div>

---
layout: default
---

# Credits acquisition roadmap

<div class="text-xs opacity-70 mb-3">
We treat credits like a <b>capital strategy</b> — apply at seed close when tiers unlock, upgrade as traction proves consumption, and route workloads to the right provider.
</div>

```mermaid {scale: 0.5}
gantt
    title Startup credits unlock sequence
    dateFormat YYYY-MM
    axisFormat %b %Y
    todayMarker off

    section M0 Seed close
    AWS Activate YC up to 500K     :crit, 2026-07, 1M
    Google Cloud AI Scale 350K     :crit, 2026-07, 1M
    GitHub for Startups 10K        :2026-07, 1M
    Cursor YC team perk            :2026-07, 1M

    section M1 to M3
    Anthropic Claude Startups      :2026-08, 2M
    OpenAI for Startups via YC     :2026-08, 2M
    NVIDIA Inception plus CSP      :2026-08, 3M
    Microsoft Azure investor tier  :2026-09, 2M
    Cloudflare AI startup tier     :2026-09, 2M
    Modal GPU credits              :2026-10, 2M

    section M4 to M12
    Groq inference credits         :2026-11, 1M
    Vercel for Startups            :2026-11, 2M
    GCP and AWS tier upgrades      :2027-01, 6M
    Cloudflare tier upgrade        :2027-03, 4M

    section Ongoing
    Bedrock via AWS credits        :2026-08, 18M
    Vertex and Gemini via GCP      :2026-08, 18M
    Eval and world-model GPU       :2026-09, 18M
```

<div class="grid grid-cols-4 gap-2 mt-3 text-[10px]">

<div class="p-2 rounded border">
<b>1. Unlock at close</b><br>
YC batch perks first — largest cloud packages before burn ramps.
</div>

<div class="p-2 rounded border">
<b>2. Model diversification</b><br>
Anthropic + OpenAI + Bedrock — no single-vendor model lock-in.
</div>

<div class="p-2 rounded border">
<b>3. Workload routing</b><br>
GCP for training, AWS for prod inference, Modal for batch evals, Groq for latency paths.
</div>

<div class="p-2 rounded border border-blue-400/40">
<b>4. Upgrade on proof</b><br>
Tier increases tied to usage milestones — turns consumption into more credits.
</div>

</div>

---
layout: default
---

# Burn, credits, and runway

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

<div class="text-xs opacity-70 mb-2">Monthly net burn ramps as team and compute scale ($K/mo)</div>

```mermaid
xychart-beta
    title "Net burn after startup credits"
    x-axis [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8]
    y-axis "USD thousands" 0 --> 240
    bar [72, 94, 118, 140, 155, 168, 180, 195]
    line [78, 102, 128, 152, 168, 182, 195, 210]
```

<div class="text-[10px] opacity-50 mt-1">Bars = net burn after credits · Line = gross burn without credits</div>

</div>

<div>

<div class="text-xs opacity-70 mb-2">Cash in bank after $5M seed closes ($M)</div>

```mermaid
xychart-beta
    title "Projected cash balance"
    x-axis [M0, M6, M12, M18, M24]
    y-axis "USD millions" 0 --> 5.5
    line [5.0, 3.9, 2.7, 1.4, 0.5]
```

<div class="text-[10px] opacity-50 mt-1">~$1.1M in credits extends effective runway by ~5 months vs cash-only plan</div>

</div>

</div>

<div class="grid grid-cols-5 gap-2 mt-4 text-[10px]">

<div class="p-2 rounded-lg border">
<b>Cloud GPU</b><br>
GCP, AWS, Azure, NVIDIA, Modal<br>
<b class="text-blue-400">~$625K</b>
</div>

<div class="p-2 rounded-lg border">
<b>Edge and deploy</b><br>
Cloudflare Workers AI<br>
<b class="text-blue-400">~$200K</b>
</div>

<div class="p-2 rounded-lg border">
<b>Model APIs</b><br>
Anthropic, OpenAI, Groq, Bedrock<br>
<b class="text-blue-400">~$185K</b>
</div>

<div class="p-2 rounded-lg border">
<b>Dev and ops</b><br>
GitHub, Cursor, Vercel<br>
<b class="text-blue-400">~$55K</b>
</div>

<div class="p-2 rounded-lg border border-blue-400/40">
<b>Total net offset</b><br>
24-month realistic capture<br>
<b class="text-blue-400">~$1.1M</b>
</div>

</div>

<div class="text-center text-xs opacity-70 mt-3">
Peak headcount 16 FTE · avg fully-loaded ~$185K · credits fund eval infra, world-model rollouts, and multi-model harness testing — not headcount
</div>

---
layout: default
---

# Team

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="p-5 rounded-lg border">

### Ajay Pratap Singh
**Co-founder**

- B.Tech, **IIT Madras**
- Ex-Head of AI, **Premji Invest**
- **Y Combinator**
- **Goldman Sachs**, India

<div class="text-sm opacity-70 mt-3">
Institutional finance discipline, applied AI at family-office scale, and
startup velocity — the combination behind Auvi's audit-grade research stack.
</div>

</div>

<div class="p-5 rounded-lg border">

### Aman Pratap Singh
**Co-founder**

- M.S., AI Research, **University of Maryland, College Park**

<div class="text-sm opacity-70 mt-3">
Agent systems and applied ML research — the harness engineering behind
Sophon's guardrails, evals, and trace infrastructure.
</div>

</div>

</div>

<br>

<div class="text-center opacity-60 text-sm">
Building in stealth. Shipping in production.
</div>

---
layout: center
class: text-center
---

# The engineering discipline behind governed machine labor.

### We are building the layer that makes general-purpose
### autonomous work safe to run — long before anyone needs to call it AGI.

<br>

**contact@deepemergence.com**

<div class="text-sm opacity-60 mt-2">
deepemergence.com
</div>

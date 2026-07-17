# SCM Solution — Bridge OS

A structured reference and tooling system for hardware product development, covering the full journey from Idea through to Mass Production.

Built for use alongside Google Drive and Odoo. All tools run as static HTML — no server, no login, no build step.

**Live Site → [patrick-scm-solution.github.io/SCM-Bridge-OS](https://patrick-scm-solution.github.io/SCM-Bridge-OS/)**

---

## Live Pages

### Phase Map & Framework

| Tool | URL |
|------|-----|
| Phase Map (home) | [/index.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/index.html) |
| SCM Bridge Framework | [/tools/workflow.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/workflow.html) |
| SCM Bridge Playbook | [/tools/scm-playbook.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/scm-playbook.html) |

### Asset Checklists

| Tool | URL |
|------|-----|
| ME Asset Checklist | [/checklists/me-assets.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/checklists/me-assets.html) |
| EE Asset Checklist | [/checklists/ee-assets.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/checklists/ee-assets.html) |
| CMF & Materials | [/checklists/cmf-materials.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/checklists/cmf-materials.html) |
| Tooling & Molds | [/checklists/tooling-molds.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/checklists/tooling-molds.html) |
| Packaging Engineering | [/checklists/packaging.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/checklists/packaging.html) |

### Project Tools

| Tool | URL |
|------|-----|
| FQC Photo Audit | [/tools/fqc-photo-audit.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/fqc-photo-audit.html) |
| Factory Audit App | [/tools/factory-audit.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/factory-audit.html) |
| Factory Visit Report | [/tools/factory-visit-report.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/factory-visit-report.html) |
| Supplier Pipeline | [/tools/supplier-pipeline.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/supplier-pipeline.html) |
| Client Dashboard | [/tools/client-dashboard.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/client-dashboard.html) |
| Operations Dashboard | [/tools/scm-dashboard-v3.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/scm-dashboard-v3.html) |
| Handoff Manifest Builder | [/tools/handoff-manifest.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/handoff-manifest.html) |
| Project Asset Registry | [/tools/project-asset-registry.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/project-asset-registry.html) |
| Project Brief | [/tools/project-brief.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/project-brief.html) |
| Project Report | [/tools/project-report.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/project-report.html) |

### Templates

| Tool | URL |
|------|-----|
| TRD | [/tools/trd-template.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/trd-template.html) |
| RFI Template | [/tools/rfi-template.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/rfi-template.html) |
| RFQ Template | [/tools/rfq-template.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/rfq-template.html) |
| Tech Pack (Soft Goods) | [/tools/fabric-techpack.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/fabric-techpack.html) |
| Mutual NDA | [/tools/nda-template.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/nda-template.html) |
| SOW Template | [/tools/sow-template.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/sow-template.html) |

### Reference

| Tool | URL |
|------|-----|
| Chinese SCM Reference | [/tools/chinese-srs.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/chinese-srs.html) |
| Odoo Playbook | [/tools/odoo-playbook.html](https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/odoo-playbook.html) |
| Shared Stylesheet | [/css/scm-styles.css](https://patrick-scm-solution.github.io/SCM-Bridge-OS/css/scm-styles.css) |

---

## Repository Structure

```
SCM-Bridge-OS/
├── index.html                        ← Interactive phase map (home)
├── README.md
├── nav.js                            ← Shared navigation bar
├── private-configs.example.js        ← Template for local client configs (gitignored)
├── css/
│   └── scm-styles.css                ← Shared stylesheet (dark OS + light field tools)
├── checklists/
│   ├── me-assets.html                ← ME asset checklist
│   ├── ee-assets.html                ← EE asset checklist
│   ├── cmf-materials.html            ← CMF & Materials checklist
│   ├── tooling-molds.html            ← Tooling & Molds checklist
│   └── packaging.html                ← Packaging Engineering checklist
└── tools/
    ├── fqc-photo-audit.html          ← FQC Photo Audit (ISO 2859-1 AQL inspection)
    ├── factory-audit.html            ← Factory Audit App
    ├── factory-visit-report.html     ← Factory Visit Report
    ├── supplier-pipeline.html        ← Supplier sourcing funnel tracker
    ├── client-dashboard.html         ← Client-facing project status portal
    ├── scm-dashboard-v3.html         ← Internal operations dashboard
    ├── handoff-manifest.html         ← Handoff Manifest Builder
    ├── project-asset-registry.html   ← Project Asset Registry
    ├── project-brief.html            ← Factory outreach project brief
    ├── project-report.html           ← Project status report builder
    ├── trd-template.html             ← Technical Requirements Document
    ├── rfi-template.html             ← RFI Template
    ├── rfq-template.html             ← RFQ Template
    ├── fabric-techpack.html          ← Tech Pack (soft goods)
    ├── nda-template.html             ← Mutual NDA Template
    ├── sow-template.html             ← SOW Template
    ├── workflow.html                 ← SCM Bridge Framework
    ├── scm-playbook.html             ← SCM Bridge Playbook
    ├── chinese-srs.html              ← Chinese SCM vocabulary reference
    └── odoo-playbook.html            ← Odoo implementation playbook
```

---

## Key Tool Details

### FQC Photo Audit — `tools/fqc-photo-audit.html`
ISO 2859-1 / ANSI Z1.4 AQL inspection app. Built-in templates for common product types; custom templates via the editor or a local `private-configs.js` sidecar (gitignored, for client-specific configs). Features:
- Per-unit test checklist with Pass / Fail / N/A
- Multiple photos per slot with thumbnail strip
- Defect logging (serial, witness, notes)
- Session auto-save to localStorage + manual export/import as `.json`
- Exportable HTML inspection report with signatures

### Factory Audit App — `tools/factory-audit.html`
Structured onsite audit with guided prompts, section scoring, and exportable reports.

### Supplier Pipeline — `tools/supplier-pipeline.html`
Funnel view tracking factories from Identified → Selected, with RFI/RFQ status and effort estimates per project.

### Client Dashboard — `tools/client-dashboard.html`
Phase progress, blockers, shared documents, and milestones. Exports as a standalone HTML file to share with clients.

### TRD — `tools/trd-template.html`
Technical Requirements Document. Captures functional, mechanical, electrical, environmental, and compliance specs. A billable SCM deliverable.

---

## Stylesheet

All pages share `css/scm-styles.css`. It supports two modes in a single file:

- **Dark mode** (default) — used by the Phase Map and OS-level pages
- **Light mode** (`body.light-mode`) — used by field tools (FQC, Factory Audit, etc.)

**Link from root pages:**
```html
<link rel="stylesheet" href="css/scm-styles.css">
```

**Link from subpages (`checklists/`, `tools/`):**
```html
<link rel="stylesheet" href="../css/scm-styles.css">
```

Field tools add `class="light-mode"` to their `<body>` tag to activate the light theme.

---

## Private Configs (local only)

Client-specific FQC templates can be stored in `private-configs.js` (gitignored). Copy `private-configs.example.js` to `private-configs.js` and add your templates — they appear alongside built-in templates when running locally and are never committed to the repo.

---

## Development Phases & Gates

| Phase | Gate | Key Activities |
|-------|------|----------------|
| Idea | DR0 — Concept | MRD, vendor shortlist, NDAs, Drive structure |
| PoC | DR1 — Prelim | PoC sample, market validation, PRD |
| Design | DR2 — Critical | ME + EE assets, DFM, TRD, handoff packages |
| Test | DR3 + EVT/DVT | Build, test, FAI, vendor audit, certifications |
| Factory | DR4 + PVT | Production line, PVT, operator training |
| MP | Mass Production | Yield, QC, logistics, failure analysis |

---

## Coming Soon

| Tool | Description |
|------|-------------|
| Gate Checklists DR0–DR4 | Design review gate pass/fail checklists |
| MRD Template | Market Requirements Document |
| PRD Template | Product Requirements Document |
| Manufacturer Matrix | Side-by-side factory capability comparison from visit/audit data |
| Sample Tracker | T1 / T2 / Golden Sample workflow with dual sign-off |
| Compliance Tracker | CE, FCC, RoHS, REACH per target market |
| Revision Control SOP | File naming, versioning, and release process |

---

© 2025 SCM Solution LTD.

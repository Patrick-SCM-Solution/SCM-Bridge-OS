/**
 * private-configs.example.js — COPY THIS TO private-configs.js (gitignored)
 *
 * Add client-specific FQC templates here. This file is loaded by the FQC Photo
 * Audit tool when running locally. It never reaches GitHub because private-configs.js
 * is listed in .gitignore. The example file is safe to commit — it's never loaded.
 *
 * Usage:
 *   cp private-configs.example.js private-configs.js
 *   Edit private-configs.js with your real client names and custom tests.
 */

(window.SCM_PRIVATE_BUILTINS = window.SCM_PRIVATE_BUILTINS || []).push(

  // ── Example: client-specific lock variant ─────────────────────
  {
    id: 'client-lock-v1',
    name: 'Client A — Smart Lock v1 (FQC)',
    client: 'Client A',
    lotSize: 1000,
    sampleSize: 20,
    isoLevel: 'S-2',
    passThreshold: 0,
    builtin: true,
    photoSlots: [
      { id: 'carton',  label: 'Master Carton' },
      { id: 'labels',  label: 'Compliance Labels' },
      { id: 'product', label: 'Product Front' },
      { id: 'keypad',  label: 'Keypad / Buttons' }
    ],
    tests: [
      { label: 'A1 · Unit count matches packing list?' },
      { label: 'A2 · Inner carton count matches PO / master carton spec?' },
      { label: 'B1 · CE / PSE markings present and correctly positioned?' },
      { label: 'B2 · Serial number label legible and matches factory log?' },
      { label: 'C1 · Keypad housing: no scratches, dents or mould flash?' },
      { label: 'D1 · Deadbolt throw: smooth full extension & retraction?' },
      { label: 'E1 · Power-on: audio chime and keypad indicator active?' },
      { label: 'E2 · Keycode unlock: master code + ≥1 user code confirmed?' },
      { label: 'E3 · Bluetooth pairing: app connects within 30 s?' },
      { label: 'E4 · Factory Reset performed per spec?', yesLabel: 'Yes / Reset Done', noLabel: 'No / Reset Failed' }
    ],
    disclaimer: ''
  }

  // Add more configs here, comma-separated:
  // , { id: 'client-b-widget', name: 'Client B — Widget FQC', ... }

);

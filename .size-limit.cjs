// Bundle budgets for @vaif/client. These are intentionally set just above
// current measured sizes so they catch unintended regressions but do not
// require aggressive optimisation work right now. Bump them deliberately
// when shipping new functionality, and tighten them when you intentionally
// shrink a layer.
//
// Measured on 2026-04-26 against dist/ produced by `yarn build`.
module.exports = [
  {
    // REST core. Includes the Stainless-generated client + zod + a few small deps.
    // Measured: 27.86 kB gzipped.
    name: 'REST only (@vaif/client)',
    path: 'dist/index.mjs',
    limit: '32 KB',
    gzip: true,
  },
  {
    // Realtime layer. Includes channel/presence/protocol/transport/cipher etc.
    // Measured: 71.81 kB gzipped (heavier than the original 40 KB target;
    // largely framing + presence + retry machinery).
    name: 'Realtime layer (@vaif/client/realtime)',
    path: 'dist/lib/realtime/index.mjs',
    limit: '80 KB',
    gzip: true,
  },
  {
    // Storage layer entry. Most logic tree-shakes out from the index re-export
    // surface unless the consumer imports specific helpers, so this stays small.
    // Measured: 3.38 kB gzipped.
    name: 'Storage layer (@vaif/client/storage)',
    path: 'dist/lib/storage/index.mjs',
    limit: '8 KB',
    gzip: true,
  },
];

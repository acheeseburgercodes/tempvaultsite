# TempVault website

Interactive landing page for [TempVault](https://github.com/acheeseburgercodes/tempvault-cb), a local Windows temporary file manager.

Serve `dist/` with any static HTTP server. The landing page is buildless; rebuild the embedded React desktop demo with `npm ci` and `npm run build:demo`. No account, remote fonts, analytics or API keys required. All demonstrations use fictional sample files; the AI demonstration is scripted, not a live model.

## Checkpoints

1. Site scaffold and hosting configuration.
2. Responsive landing page and interactive product demonstrations.
3. Verification and hosted release.

The desktop application remains in its own repository. This site never accesses visitors' vaults or local Ollama services.

The large preview embeds the actual desktop React renderer with an in-memory browser API. See [demo/README.md](demo/README.md) for supported interactions and desktop-only simulations.

# TempVault website — agent instructions

## Project

- Repository: https://github.com/acheeseburgercodes/tempvaultsite
- Live site: https://tempvault-live.ripescout1.chatgpt.site
- Local checkout: `D:\projects\tempvaultsite`
- Desktop app source: `D:\projects\tempvault`, separate repository `acheeseburgercodes/tempvault-cb`.
- This repository is the product website and browser demo, not the Windows application.

## Product and design requirements

- Preserve the ivory background and lavender/purple accent palette matching the desktop app reference.
- Keep the main heading upright, not italic.
- Hero files repel the cursor with smooth motion and collect into the TempVault-logo folder while scrolling. Reverse the collection when scrolling back.
- Respect reduced-motion preferences. Avoid horizontal page overflow and keep links usable beneath decorative elements.
- Keep the interactive app preview large, with fullscreen expansion. On small screens, allow horizontal scrolling inside the desktop preview rather than squeezing or clipping its controls.
- Use the actual app renderer for the main demo: file table, sidebar, metrics, type folders, bottom dock, settings, context menus, quick preview, and movable/resizable preview windows.
- Preserve colored file icons, precise file-type labels, rounded controls, and red destructive actions.
- Preserve the app's folder-sheet fan, tilt, expansion and preview animations. Avoid native drag-image artifacts, overlapping controls or unexpected preview resizing.
- Keep the published website public. Do not restore ChatGPT sign-in or add an account requirement.

## Source map

- `dist/index.html`: landing-page markup, content and embedded demo frame.
- `dist/style.css`: original landing-page styles.
- `dist/app.js`: original sample interactions and lower-page demonstrations.
- `dist/experience.css`, `dist/experience.js`: hero physics, folder demonstrations and earlier mini-preview behavior.
- `dist/desktop-demo.css`, `dist/desktop-demo.js`: final palette, larger iframe, fullscreen and reset controls.
- The old miniature `.legacy-demo` is hidden but still referenced by existing scripts. Do not remove it without refactoring those dependencies.
- `demo/renderer/src/App.tsx`: copied desktop React renderer with browser-specific initial state and wording.
- `demo/renderer/src/styles.css`, `theme-polish.css`: app styles.
- `demo/renderer/src/assets/`: actual app logo assets.
- `demo/shared/types.ts`: shared bridge contracts.
- `demo/mock-api.ts`: in-memory replacement for Electron's preload API.
- `demo/main.tsx`, `demo/browser.css`: browser entry and browser-only overrides.
- `demo/vite.config.js`: builds the iframe app into `dist/demo/`.
- `dist/demo/`: generated output; regenerate it rather than editing bundles.
- `.openai/hosting.json`: existing Sites identity and static output configuration.
- `demo/README.md`, `VERIFICATION.md`: limitations and prior verification evidence.

## Browser-demo boundaries

- Use fictional sample records. Do not embed private files, real user documents or local machine information.
- File mutations operate on in-memory records only. Reload/reset restores samples.
- Add/import creates samples. Keep/temporary changes their status. Recycle/move-out removes sample records.
- Explain Windows-only Explorer, default-app and Inbox actions instead of attempting to access the visitor's computer.
- AI responses are scripted and must remain clearly labeled. Do not imply that a model is running in the website.
- Do not call visitors' Ollama services or upload files to a cloud model.
- Auto-delete and launch-at-startup settings are illustrative in the browser. Do not claim they schedule real background work.
- Keep browser-specific wording clear without altering desktop app source as part of a website task.
- Preserve the upstream MIT attribution in `demo/LICENSE` when copying or adapting app code.

## Build and preview

```powershell
npm ci
npm run build:demo
python -m http.server 5188 --directory dist
```

Open `http://localhost:5188/` for the website or `/demo/index.html` for the embedded app alone. Stop servers started for verification when finished.

The landing page itself is buildless. Rebuild the demo after changes to its source, styles or dependencies. Commit `package-lock.json` and regenerated `dist/demo/` with relevant source changes.

## Verification

Test behavior affected by each change and inspect browser errors. Do not describe untested behavior as verified.

- Inspect the landing page and embedded demo at desktop and mobile sizes.
- Check heading style, hero repulsion, scroll collection and reversed collection.
- Check that page navigation, download links and fullscreen/reset controls work.
- Add a sample, select/deselect it, keep it and verify the Kept view.
- Exercise search, type filters, sorting, pagination and context menus as applicable.
- Open type folders, preview a file, drag it into the preview rail, reorder previews, resize them, detach and close them.
- Check that preview actions preserve other pinned previews and avoid native copy/oval drag artifacts.
- Check appearance settings, theme switching, zoom and quick-preview behavior when changed.
- Confirm simulated AI and Windows-only actions remain honestly labeled.
- After publication, verify the site remains reachable without authentication.

## Git and publication

- Inspect status before editing; preserve unrelated user changes.
- Push every significant completed checkpoint to `acheeseburgercodes/tempvaultsite`, as requested by the owner.
- Use descriptive commits and never force-push or rewrite shared history without explicit authorization.
- Never commit credentials, tokens, caches, `node_modules`, private data or deployment archives.
- Keep the existing Sites project ID in `.openai/hosting.json`; do not create a replacement Site.
- When publishing changes, follow the available Sites skill: synchronize source, package the exact pushed commit, save that version and deploy it using the public/shared deployment flow.
- Preserve public access. Do not use the owner-private deployment flow for this site.
- Keep credentials in memory and pass them through the supported hidden-stdin helper, never command arguments or tracked files.
- Verify deployment success before reporting that changes are live. A successful Git push alone is not a deployment.
- Documentation-only edits do not require rebuilding or republishing the website.

## Communication

Act on clear requests, give concise progress updates, and finish authorized work. Report what changed, what was verified, the public URL, relevant commits, and any real limitations. Do not claim the browser demo performs actual operating-system actions or local inference.

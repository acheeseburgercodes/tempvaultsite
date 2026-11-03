# Desktop renderer in a browser

The renderer, shared types, logo assets and theme styles are copied from TempVault 1.1.1 (MIT; see LICENSE). App.tsx changes its initial view to Temporary and seeds two previews to match the supplied reference. Other UI behavior comes directly from the desktop renderer.

`mock-api.ts` replaces the Electron preload bridge with an in-memory sample vault. Keep/temporary actions, search, filtering, sort, pagination, selection, context menus, folder expansion, preview dragging/resizing/detaching, settings, zoom and chat UI use the app code.

No filesystem, shell, Ollama, startup or background deletion access is available in this website. Add/import creates a sample; move/recycle removes samples; Explorer/open-app and Inbox explain their desktop behavior; AI returns clearly identified scripted answers. Refresh/reset restores sample state. Auto-delete and startup settings are simulated, not scheduled.

Build: `npm ci` then `npm run build:demo`. Output is `dist/demo`.

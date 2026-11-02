# Verification

The page is a dependency-free static site in `dist/`.

Verified in the browser on 2 November 2026:

- Adding a sample updates the file list; search locates it.
- Reset restores the six initial sample files.
- Preview cards reorder with keyboard arrows.
- The illustrative AI answer includes the sample document reference.
- Enabling cleanup and moving the timeline past day 14 recycles the temporary sample and preserves the kept sample.
- Desktop and mobile layouts render; a 390px viewport has no horizontal document overflow.
- No browser console errors during the tested interactions.

All demo content is fictional. The site makes no filesystem or Ollama calls. Download links point to the desktop project's GitHub Releases page.

Manual regression: test Keep/unkeep, each file type filter, folder switching, close/reopen previews, pointer dragging and touch dragging, keyboard preview ordering, theme toggle, cleanup enabled/disabled, and the FAQ disclosures. Respect reduced-motion preferences.

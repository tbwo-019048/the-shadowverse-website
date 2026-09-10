# Project Memory

This folder records completed work for The Shadowverse website.

## Working rules

- Read this memory before each implementation step.
- Add a dated entry after each successfully completed task.
- Preserve user-owned work and document verification, commits, and publishing outcomes.

## Current state

- 2026-09-09: Memory system created before project implementation. The workspace was otherwise empty and was not yet a Git repository.
- 2026-09-10: Implemented the full Shadowverse website foundation: atmospheric homepage, books and detail pages, character dossiers and detail pages, news and article pages, Toby/lore page, store, legal pages, responsive navigation/footer, generated hero artwork, metadata, and accessibility/reduced-motion treatment.
- 2026-09-10: Implemented the Supabase content layer, secure admin login, content studio with create/edit/archive/publish/reorder controls, media uploads, WebMCP content-creation registration, full PostgreSQL schema, storage bucket, and row-level security policies.
- 2026-09-10: Verified all principal routes responded successfully and completed two successful production builds. The Sites project is registered as `appgprj_6aa1c93c32dc8191b5957ee982bf4bb4`.
- 2026-09-10: Initialised the active Git repository, committed the implementation as `c4f8a61`, and pushed `main` to `tbwo-019048/the-shadowverse-website`.
- 2026-09-10: Investigated the non-working Vercel production URL. The public alias returned Vercel `NOT_FOUND`, while the prior deployment was behind Vercel SSO. Migrated the project from the Cloudflare/Vinext build to native Next.js 16 for Vercel, set the Vercel origin as canonical, and verified a successful production build plus HTTP 200 responses for all primary local routes.
- 2026-09-10: The first native Next.js Vercel deployment failed despite a clean local production build. Added explicit Vercel framework/build/install configuration and aligned the Node engine range with Next.js to remove retained platform-detection ambiguity.
- 2026-09-10: Vercel successfully deployed commit `1d2350c`. Verified the public production homepage, books page, and admin login return HTTP 200; also verified the homepage and Books navigation in a browser at `https://the-shadowverse-website.vercel.app/`.

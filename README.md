# The Shadowverse

A cinematic, multi-page website and content studio for Toby Crome's supernatural alternate-history series.

## Included

- Editorial public pages for books, characters, news, the author, lore and store
- Individual book, character and article routes
- Secure Supabase email/password administration
- Reorderable content management and Supabase Storage media uploads
- PostgreSQL schema, row-level security policies and storage policies
- Responsive, keyboard-accessible presentation with reduced-motion support

## Local development

```bash
npm install
npm run dev
```

The public site runs with editorial fallback content. To enable saved content and administrator access, follow [SUPABASE_SETUP.md](SUPABASE_SETUP.md).

## Production

```bash
npm run build
```

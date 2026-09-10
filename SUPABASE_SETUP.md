# Supabase setup

1. Create a Supabase project and run `supabase/migrations/001_shadowverse_schema.sql` in the SQL editor (or with the Supabase CLI).
2. Copy `.env.example` to `.env.local` and add the project URL and anon key.
3. Create the first administrator in Supabase Authentication.
4. Add that user to the allow-list:

```sql
insert into public.admin_users (id, email, role)
select id, email, 'admin' from auth.users where email = 'your-email@example.com';
```

The public API can only read published, non-archived records. All writes and media uploads require an authenticated user listed in `admin_users`.

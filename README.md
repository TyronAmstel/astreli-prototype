# ASTRELI operations prototype

Next.js 15 customer experience plus a Supabase-backed operating layer for customer memory, conversations, product demand, reservations, follow-up and exports.

## Local setup

1. Install dependencies: `pnpm install`
2. Copy `.env.example` to `.env.local` and fill the values.
3. Create a Supabase project and run `supabase/migrations/202608130001_astreli_operating_system.sql` in the SQL editor or Supabase CLI.
4. Generate the admin password value with `printf '%s' 'your-password' | shasum -a 256`, then set `ADMIN_PASSWORD_HASH=sha256:<digest>`.
5. Run `pnpm dev` and open `/admin/login`.

Without Supabase variables, the storefront remains functional and `/admin` shows clearly labeled fake demo data. Customer chats also remain buffered in browser storage. Production should always configure Supabase.

## Vercel production setup

Install Supabase through Vercel Marketplace or create a Supabase project manually. Add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`, and a random 32+ character `ADMIN_SESSION_SECRET` to Preview/Production environments. The service-role key and admin values are server-only. Apply migrations before accepting customer data. Create the admin login only through environment configuration; there is no public signup.

## Data model

- `customers` deduplicates safely by normalized email or phone.
- `conversations` contain channel/context, ownership, AI state and summary.
- `messages` persist every customer/AI/human/system message.
- `product_interests` distinguishes Current Drop waitlists from Stylist Library interest and prevents duplicate qualified demand.
- `drops`, `products`, and `reservations` support the batch lifecycle.
- `customer_notes` are internal only.
- `product_demand` aggregates unique customers rather than clicks.

All private tables have RLS enabled with no public policies. Only server routes using the service role can access customer data.

## Admin and exports

Routes: `/admin`, `/admin/customers`, `/admin/conversations`, `/admin/demand`, `/admin/follow-up`, `/admin/export`. CSV files are generated only from authenticated admin routes and include UTF-8 BOM plus safe escaping. AI draft and external-channel services are modular fallbacks; drafts never auto-send, and email/WhatsApp report disabled until configured.

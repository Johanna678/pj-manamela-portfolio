create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- Allows visitors to submit contact messages from the portfolio.
create policy "Allow public contact submissions"
on public.contact_messages
for insert
to anon
with check (true);

-- Do not create a public SELECT policy unless you intentionally want visitors to read messages.

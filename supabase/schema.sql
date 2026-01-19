-- Projects Table
create table public.projects (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  overview text not null,
  problem text not null,
  role text not null,
  methodology text not null,
  results text not null,
  tech_stack text[] not null,
  image text not null,
  github_link text,
  demo_link text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Education Table
create table public.education (
  id uuid default gen_random_uuid() primary key,
  institution text not null,
  degree text not null,
  duration text not null,
  location text not null,
  cgpa text not null,
  highlight boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Achievements Table
create table public.achievements (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text not null,
  category text not null,
  icon_name text not null, -- e.g., 'Trophy', 'Award', 'Users'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Skill Categories Table
create table public.skill_categories (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  icon_name text not null, -- e.g., 'Code', 'Monitor', 'Layers', 'Wrench'
  skills text[] not null,
  featured text[] not null,
  display_order integer not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.projects enable row level security;
alter table public.education enable row level security;
alter table public.achievements enable row level security;
alter table public.skill_categories enable row level security;

-- Create policies (public read access)
create policy "Allow public read access" on public.projects for select using (true);
create policy "Allow public read access" on public.education for select using (true);
create policy "Allow public read access" on public.achievements for select using (true);
create policy "Allow public read access" on public.skill_categories for select using (true);

-- Contact Messages Table
create table public.contact_messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.contact_messages enable row level security;

-- Allow anyone to insert messages (public submission)
create policy "Allow public inserts" on public.contact_messages for insert with check (true);
-- Only allow authenticated users (admin) to view messages (optional, or just allow insert for now)
-- For this portfolio, we might want to just enable inserts publically. Use Service Role to view or specific policy.

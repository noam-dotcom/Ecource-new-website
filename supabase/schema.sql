-- ============================================================
-- Ecource Ltd. — Supabase Schema
-- Run this in your Supabase project: SQL Editor → New Query
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================================
-- TABLE: investor_inquiries
-- Stores all investor contact form submissions
-- ============================================================
create table if not exists investor_inquiries (
  id            uuid default uuid_generate_v4() primary key,
  name          text not null,
  email         text not null,
  company       text,
  role          text,
  phone         text,
  message       text,
  interest      text,        -- 'seed', 'series-a', 'strategic', 'other'
  status        text default 'new',  -- 'new', 'contacted', 'qualified', 'closed'
  created_at    timestamptz default now()
);

-- ============================================================
-- TABLE: newsletter_subscribers
-- Stores email newsletter signups
-- ============================================================
create table if not exists newsletter_subscribers (
  id            uuid default uuid_generate_v4() primary key,
  email         text unique not null,
  subscribed_at timestamptz default now()
);

-- ============================================================
-- TABLE: team_members
-- Editable team roster (managed from Supabase dashboard)
-- ============================================================
create table if not exists team_members (
  id            uuid default uuid_generate_v4() primary key,
  name          text not null,
  role          text not null,
  bio           text,
  image_url     text,
  linkedin_url  text,
  display_order int default 0,
  created_at    timestamptz default now()
);

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================

alter table investor_inquiries     enable row level security;
alter table newsletter_subscribers enable row level security;
alter table team_members           enable row level security;

-- investor_inquiries: anyone can submit, only authenticated admins can read
create policy "Public can submit inquiry"
  on investor_inquiries for insert
  with check (true);

create policy "Admins can read inquiries"
  on investor_inquiries for select
  using (auth.role() = 'authenticated');

create policy "Admins can update inquiry status"
  on investor_inquiries for update
  using (auth.role() = 'authenticated');

-- newsletter_subscribers: anyone can subscribe, admins can read
create policy "Public can subscribe"
  on newsletter_subscribers for insert
  with check (true);

create policy "Admins can read subscribers"
  on newsletter_subscribers for select
  using (auth.role() = 'authenticated');

-- team_members: public read, admins manage
create policy "Public can view team"
  on team_members for select
  using (true);

create policy "Admins can manage team"
  on team_members for all
  using (auth.role() = 'authenticated');

-- ============================================================
-- SEED: Initial team members (edit these in the dashboard)
-- ============================================================
insert into team_members (name, role, bio, display_order) values
  ('CEO / Founder', 'Chief Executive Officer', 'Visionary leader behind Ecource''s breakthrough fish processing technology.', 1),
  ('CTO / Co-Founder', 'Chief Technology Officer', 'Leading the development of our patent-pending processing technology.', 2),
  ('Head of Operations', 'VP Operations', 'Scaling our processing operations across global fish supply chains.', 3);

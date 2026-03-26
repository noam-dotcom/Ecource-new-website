import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type InvestorInquiry = {
  id?: string;
  name: string;
  email: string;
  company?: string;
  role?: string;
  phone?: string;
  message?: string;
  interest?: "seed" | "series-a" | "strategic" | "other";
  status?: string;
  created_at?: string;
};

export type NewsletterSubscriber = {
  id?: string;
  email: string;
  subscribed_at?: string;
};

export type TeamMember = {
  id?: string;
  name: string;
  role: string;
  bio?: string;
  image_url?: string;
  linkedin_url?: string;
  display_order?: number;
};

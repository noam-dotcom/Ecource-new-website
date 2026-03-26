import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, role, phone, interest, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("investor_inquiries").insert({
      name,
      email,
      company,
      role,
      phone,
      interest,
      message,
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to submit inquiry." },
      { status: 500 }
    );
  }
}

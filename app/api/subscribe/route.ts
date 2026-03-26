import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email });

    if (error) {
      if (error.code === "23505") {
        // Unique violation — already subscribed
        return NextResponse.json({ success: true, already: true });
      }
      throw error;
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Failed to subscribe." }, { status: 500 });
  }
}

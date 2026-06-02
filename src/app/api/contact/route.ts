import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();
  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "Message required" }, { status: 400 });
  }
  // Stub: not actually sending email. Wire up Nodemailer / Resend / EmailJS later.
  console.log("[contact]", { email, subject, message });
  return NextResponse.json({ ok: true });
}

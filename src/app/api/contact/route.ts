import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Baga Intercontinental Website <onboarding@resend.dev>",
      to: ["bagaintercontinental@gmail.com"],
      replyTo: email,
      subject: `New FBA Strategy Call Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #0D1F3C; margin-bottom: 16px;">New Strategy Call Request</h2>
          <p style="color: #6B7A99; margin-bottom: 24px;">Someone filled out the contact form on bagaintercontinental.online</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #6B7A99; font-size: 14px; width: 120px; font-weight: 600;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #0D1F3C; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #6B7A99; font-size: 14px; font-weight: 600;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #0D1F3C; font-size: 14px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #6B7A99; font-size: 14px; font-weight: 600;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #0D1F3C; font-size: 14px;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6B7A99; font-size: 14px; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #0D1F3C; font-size: 14px; line-height: 1.6;">${message}</td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding: 16px; background: #F5F7FA; border-radius: 8px;">
            <p style="margin: 0; font-size: 12px; color: #6B7A99;">
              Reply directly to this email to respond to ${name} at ${email}.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

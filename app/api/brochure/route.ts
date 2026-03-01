import { NextResponse } from "next/server";

type BrochurePayload = {
  email: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function sanitize(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const downloadLink = new URL(
      "/brochure.pdf",
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://innovision.co.in"
    ).toString();

    if (!resendApiKey || !fromEmail) {
      return NextResponse.json(
        { success: false, message: "Server email configuration is missing." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as Partial<BrochurePayload>;
    const email = sanitize(body.email ?? "");

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Please enter your email address." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const subject = "Your Innovision Brochure Download Link";

    const html = `
      <h2>Thanks for your interest in Innovision</h2>
      <p>You can download the brochure using the link below:</p>
      <p><a href="${downloadLink}" target="_blank" rel="noopener noreferrer">Download Brochure</a></p>
      <p>If the button does not work, copy this URL into your browser:</p>
      <p>${downloadLink}</p>
    `;

    const text = [
      "Thanks for your interest in Innovision.",
      "",
      "Download brochure:",
      downloadLink,
    ].join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [email],
        subject,
        html,
        text,
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      return NextResponse.json(
        {
          success: false,
          message: "Unable to send brochure email right now. Please try again.",
          details: errorBody,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Brochure link sent successfully. Please check your email.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

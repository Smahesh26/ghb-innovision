import { NextResponse } from "next/server";

type ContactPayload = {
  service: string;
  name: string;
  email: string;
  phone: string;
  message: string;
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
    const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "contact@innovision.co.in";
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !contactFromEmail) {
      return NextResponse.json(
        { success: false, message: "Server email configuration is missing." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      service: sanitize(body.service ?? ""),
      name: sanitize(body.name ?? ""),
      email: sanitize(body.email ?? ""),
      phone: sanitize(body.phone ?? ""),
      message: sanitize(body.message ?? ""),
    };

    if (!payload.service || !payload.name || !payload.email || !payload.phone || !payload.message) {
      return NextResponse.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const subject = `New Contact Form Submission - ${payload.service}`;

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Service:</strong> ${payload.service}</p>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Message:</strong><br/>${payload.message.replace(/\n/g, "<br/>")}</p>
    `;

    const text = [
      "New Contact Form Submission",
      `Service: ${payload.service}`,
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Message: ${payload.message}`,
    ].join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: contactFromEmail,
        to: [contactToEmail],
        reply_to: payload.email,
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
          message: "Unable to send message right now. Please try again.",
          details: errorBody,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
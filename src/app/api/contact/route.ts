import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, phone, email, service, message } = await request.json();

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Name, phone, and message are required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Pyburn Plumbing <contact@555digital.dev>",
        to: "pyburnplumbing@gmail.com",
        subject: `New Lead: ${service || "General Inquiry"} from ${name}`,
        html: `
          <h2>New Lead from PyburnPlumbing.com</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || "Not provided"}</p>
          <p><strong>Service:</strong> ${service || "Not specified"}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
      return NextResponse.json({ success: true });
    }

    // Fallback: log to console, still return success so the form UX works
    console.log("--- NEW LEAD (RESEND_API_KEY not set) ---");
    console.log({ name, phone, email, service, message });
    console.log("----------------------------------------");

    return NextResponse.json({ success: true, note: "API key not configured" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send. Please call (931) 537-2898 instead." },
      { status: 500 }
    );
  }
}

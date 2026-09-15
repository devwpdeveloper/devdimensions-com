type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
};

const textValue = (value: unknown) => typeof value === "string" ? value.trim() : "";
const singleLine = (value: string) => value.replace(/[\r\n]+/g, " ");

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json() as ContactPayload;
  } catch {
    return Response.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const name = singleLine(textValue(payload.name));
  const email = textValue(payload.email);
  const company = singleLine(textValue(payload.company));
  const message = textValue(payload.message);

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, message: "Name, email, and message are required." },
      { status: 422 },
    );
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json(
      { ok: false, message: "Please provide a valid email address." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { ok: false, message: "The contact email service is not configured yet." },
      { status: 503 },
    );
  }

  const recipient = process.env.DEV_DIMENSIONS_CONTACT_TO || "info@devdimensions.com";
  const sender = process.env.DEV_DIMENSIONS_CONTACT_FROM || "DevDimensions Website <onboarding@resend.dev>";
  const subject = `New DevDimensions consultation request from ${name}`;
  const body = [
    "A new consultation request was submitted from the DevDimensions website.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject,
        text: body,
      }),
    });

    if (!response.ok) {
      return Response.json(
        { ok: false, message: "The email service could not send this message." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true, message: "Your message was sent successfully." });
  } catch {
    return Response.json(
      { ok: false, message: "The email service is temporarily unavailable." },
      { status: 502 },
    );
  }
}

import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

const TO = ["Info@snaya.sa"];
const FROM = process.env.RESEND_FROM_EMAIL || "الصناعية <noreply@snaya.sa>";

const GENERIC_ERROR = "تعذّر إرسال الرسالة. حاول مرة أخرى أو راسلنا مباشرة.";

/** Escape user input before it is interpolated into the HTML email body. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Anything interpolated into a mail header must not carry line breaks. */
function headerSafe(value: string) {
  return value.replace(/[\r\n]+/g, " ");
}

/**
 * Best-effort per-IP throttle. Every accepted request sends real mail on the
 * agency's Resend quota, so an unauthenticated endpoint needs some brake.
 *
 * This is in-process, so it resets on redeploy and is per-instance on
 * serverless — it raises the cost of a mail-bomb rather than preventing one.
 * Move to a shared store (or put the route behind a WAF rule) if abuse shows up.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (hits.size > 5000) hits.clear(); // crude ceiling on memory growth

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: NextRequest) {
  // Validate the submission before looking at server config, so a visitor with
  // a bad email always gets the actionable message rather than a generic 500.
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "طلب غير صالح." }, { status: 400 });
  }

  const body = (payload ?? {}) as Record<string, unknown>;
  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 40);
  const message = clean(body.message, 4000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "الرجاء تعبئة الاسم والبريد الإلكتروني والرسالة." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "صيغة البريد الإلكتروني غير صحيحة." },
      { status: 400 }
    );
  }

  // A bot filling in every field trips the honeypot; a real visitor never
  // sees it, so a non-empty value is proof enough to drop the request.
  if (clean(body.company, 100)) {
    return NextResponse.json({ success: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "وصلتنا عدة رسائل منك. جرّب بعد قليل أو راسلنا على واتساب." },
      { status: 429 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY is not configured");
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }

  const rows = [
    ["الاسم", name],
    ["البريد الإلكتروني", email],
    ...(phone ? [["رقم الجوال", phone]] : []),
  ];

  const html = `
    <div dir="rtl" style="font-family:Arial,Helvetica,sans-serif;background:#0C0C0C;color:#FFF6F3;padding:32px">
      <div style="max-width:600px;margin:0 auto;border:1px solid rgba(255,246,243,0.14)">
        <div style="height:10px;background:repeating-linear-gradient(-45deg,#FF4800,#FF4800 9px,#0C0C0C 9px,#0C0C0C 18px)"></div>
        <div style="padding:28px">
          <h1 style="margin:0 0 24px;font-size:20px;color:#FF4800">طلب جديد من موقع الصناعية</h1>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            ${rows
              .map(
                ([label, value]) => `
              <tr>
                <td style="padding:8px 0;color:rgba(255,246,243,0.5);width:150px">${label}</td>
                <td style="padding:8px 0;font-weight:bold">${escapeHtml(value)}</td>
              </tr>`
              )
              .join("")}
          </table>
          <p style="margin:24px 0 8px;color:rgba(255,246,243,0.5);font-size:14px">الرسالة</p>
          <div style="padding:16px;background:#141414;border-right:3px solid #FF4800;line-height:1.9;font-size:14px">
            ${escapeHtml(message).replace(/\n/g, "<br>")}
          </div>
        </div>
      </div>
    </div>`;

  const text = [
    "طلب جديد من موقع الصناعية",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "الرسالة:",
    message,
  ].join("\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: TO,
      subject: headerSafe(`طلب جديد من ${name} — موقع الصناعية`),
      html,
      text,
      replyTo: email,
    });

    if (error) {
      console.error("[contact] Resend rejected the message:", error);
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("[contact] Unexpected failure:", err);
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }
}

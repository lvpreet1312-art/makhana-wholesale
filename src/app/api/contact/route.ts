import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const requestCounts = new Map<string, number[]>();

function isRateLimited(clientId: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  if (!requestCounts.has(clientId)) {
    requestCounts.set(clientId, []);
  }

  const timestamps = requestCounts.get(clientId)!;
  const recentRequests = timestamps.filter((time) => time > windowStart);

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  recentRequests.push(now);
  requestCounts.set(clientId, recentRequests);

  return false;
}

function validateInput(name: string, email: string, message: string): string | null {
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return "Name is required";
  }

  if (!email || typeof email !== "string" || email.trim().length === 0) {
    return "Email is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return "Message is required";
  }

  if (message.trim().length < 10) {
    return "Message must be at least 10 characters";
  }

  if (message.trim().length > 5000) {
    return "Message must not exceed 5000 characters";
  }

  if (name.length > 100) {
    return "Name is too long";
  }

  return null;
}

export async function POST(request: NextRequest) {
  try {
    const clientId = request.headers.get("x-forwarded-for") || request.ip || "unknown";

    if (isRateLimited(clientId)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    const validationError = validateInput(name, email, message);
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }

    console.log("Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Your message has been received. We'll get back to you soon!" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}

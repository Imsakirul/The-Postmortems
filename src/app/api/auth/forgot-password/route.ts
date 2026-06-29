import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || user.role !== "ADMIN") {
      // Prevent email enumeration
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

    await prisma.user.update({
      where: { email },
      data: {
        resetOtp: otp,
        resetOtpExpiry: expiry
      }
    });

    // Send email using Resend (with dev fallback)
    const { sendEmail, getOtpEmailTemplate } = await import("@/lib/email");
    await sendEmail({
      to: email,
      subject: "The Postmortems Password Reset Code",
      html: getOtpEmailTemplate(otp)
    });

    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: "REQUESTED_PASSWORD_RESET",
        entityType: "AUTH",
        entityId: user.id,
        ipAddress: request.headers.get("x-forwarded-for") || "unknown"
      }
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

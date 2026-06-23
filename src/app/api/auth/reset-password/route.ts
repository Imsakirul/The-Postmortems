import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { email, otp, newPassword } = await request.json();

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || !user.resetOtp || !user.resetOtpExpiry) {
      return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 400 });
    }

    if (user.resetOtp !== otp) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }

    if (new Date() > user.resetOtpExpiry) {
      return NextResponse.json({ error: "OTP has expired" }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordHash,
        resetOtp: null,
        resetOtpExpiry: null
      }
    });

    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: "COMPLETED_PASSWORD_RESET",
        entityType: "AUTH",
        entityId: user.id,
        ipAddress: request.headers.get("x-forwarded-for") || "unknown"
      }
    });

    const { sendEmail, getPasswordChangedTemplate } = await import("@/lib/email");
    await sendEmail({
      to: email,
      subject: "Your Password Has Been Changed",
      html: getPasswordChangedTemplate()
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Reset Password Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

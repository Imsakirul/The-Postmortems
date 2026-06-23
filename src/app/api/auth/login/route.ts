import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { encrypt } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      await prisma.auditLog.create({
        data: {
          userId: user.id,
          action: "FAILED_LOGIN",
          entityType: "AUTH",
          entityId: user.id,
          ipAddress: request.headers.get("x-forwarded-for") || "unknown"
        }
      });

      const { sendEmail, getFailedLoginTemplate } = await import("@/lib/email");
      await sendEmail({
        to: email,
        subject: "Security Alert: Failed Login Attempt",
        html: getFailedLoginTemplate()
      });

      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
    
    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: "SUCCESSFUL_LOGIN",
        entityType: "AUTH",
        entityId: user.id,
        ipAddress: request.headers.get("x-forwarded-for") || "unknown"
      }
    });

    const token = await encrypt({ id: user.id, email: user.email, role: user.role });
    const response = NextResponse.json({ success: true }, { status: 200 });
    
    response.cookies.set({
      name: "session",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 30, // 30 minutes inactivity timeout
    });
    
    return response;
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

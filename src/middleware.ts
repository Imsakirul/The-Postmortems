import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  const path = request.nextUrl.pathname;
  const isAuthPage = path.startsWith("/admin/login") || 
                     path.startsWith("/admin/forgot-password") || 
                     path.startsWith("/admin/reset-password");

  if (path.startsWith("/admin")) {
    if (!session && !isAuthPage) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    if (session) {
      const parsed = await decrypt(session);
      if (!parsed && !isAuthPage) {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }
      if (parsed && !isAuthPage) {
        // Slide the session expiration
        const response = NextResponse.next();
        response.cookies.set({
          name: "session",
          value: session,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          path: "/",
          maxAge: 60 * 30, // Reset to 30 minutes
        });
        return response;
      }
      if (parsed && isAuthPage) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

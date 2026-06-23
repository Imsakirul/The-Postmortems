import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { content, fileUrl } = await req.json();

    if (!content) {
      return NextResponse.json({ error: "Content is required" }, { status: 400 });
    }

    // Generate a secure tracking ID
    const secureId = "SEC-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + Math.floor(1000 + Math.random() * 9000);

    // Format file URLs if present
    const fileUrlsArray = fileUrl ? JSON.stringify([fileUrl]) : null;

    const submission = await prisma.whistleblowerSubmission.create({
      data: {
        secureId,
        encryptedContent: content, // Storing directly so admin can read it without PGP
        encryptedFileUrls: fileUrlsArray,
        status: "NEW"
      }
    });

    return NextResponse.json({ secureId: submission.secureId }, { status: 201 });
  } catch (error: any) {
    console.error("Submit error:", error);
    return NextResponse.json({ error: "An error occurred while saving the submission." }, { status: 500 });
  }
}

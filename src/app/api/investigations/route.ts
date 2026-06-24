import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET(request: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const investigations = await prisma.investigation.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(investigations);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch investigations" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = await request.json();
    
    // Auto-generate slug if not provided or empty
    const baseSlug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    let slug = data.slug || baseSlug;
    
    // Ensure slug is unique
    let existing = await prisma.investigation.findUnique({ where: { slug } });
    if (existing) {
      slug = `${slug}-${Date.now()}`;
    }

    const investigation = await prisma.investigation.create({
      data: {
        title: data.title,
        slug,
        excerpt: data.excerpt,
        featuredImage: data.featuredImage,
        content: data.content,
        investigationCode: data.investigationCode,
        metaTags: data.metaTags,
        status: data.status || "DRAFT",
        authorId: session.id,
      },
    });

    return NextResponse.json(investigation);
  } catch (error: any) {
    console.error("Create investigation error:", error);
    return NextResponse.json({ error: "Failed to create investigation", details: error.message }, { status: 500 });
  }
}

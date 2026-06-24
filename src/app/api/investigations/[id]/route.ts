import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const investigation = await prisma.investigation.findUnique({
      where: { id: params.id },
    });

    if (!investigation) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(investigation);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch investigation" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = await request.json();

    const updateData: any = {
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      featuredImage: data.featuredImage,
      content: data.content,
      investigationCode: data.investigationCode,
      metaTags: data.metaTags,
      status: data.status,
    };

    if (data.status === "PUBLISHED" && data.wasStatus !== "PUBLISHED") {
      updateData.publishedAt = new Date();
    }

    const investigation = await prisma.investigation.update({
      where: { id: params.id },
      data: updateData,
    });

    return NextResponse.json(investigation);
  } catch (error: any) {
    console.error("Update error:", error);
    return NextResponse.json({ error: "Failed to update investigation" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await prisma.investigation.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete investigation" }, { status: 500 });
  }
}

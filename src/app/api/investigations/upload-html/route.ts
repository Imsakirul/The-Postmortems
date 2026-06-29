import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    const userId = session?.id || session?.userId;
    if (!session || !userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const htmlContent = await file.text();

    // Extract title
    const titleMatch = htmlContent.match(/<title>([\s\S]*?)<\/title>/i) || htmlContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    let title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : "Untitled Investigation";
    
    // Remove the trailing parts like " — The Postmortems"
    title = title.split('—')[0].trim();
    if (!title) title = "Untitled Investigation";

    // Extract excerpt
    const excerptMatch = htmlContent.match(/<p class="hero-subtitle">([\s\S]*?)<\/p>/i);
    let excerpt = excerptMatch ? excerptMatch[1].replace(/<[^>]+>/g, '').trim() : "";

    // Extract style and body
    const styleMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/i);
    const styleContent = styleMatch ? `<style>${styleMatch[1]}</style>` : '';

    const bodyMatch = htmlContent.match(/<body>([\s\S]*?)<\/body>/i);
    const bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;

    const finalContent = '<!-- RAW_HTML_UPLOAD -->\n' + styleContent + '\n' + bodyContent;

    // Generate Slug
    const slugBase = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const uniqueSuffix = Math.random().toString(36).substring(2, 8);
    const slug = `${slugBase}-${uniqueSuffix}`;

    const investigationCode = `HTML-${new Date().getFullYear()}-${uniqueSuffix.toUpperCase()}`;

    const investigation = await prisma.investigation.create({
      data: {
        slug,
        title,
        excerpt,
        content: finalContent,
        status: "PUBLISHED",
        publishedAt: new Date(),
        investigationCode,
        authorId: userId,
      }
    });

    return NextResponse.json({ success: true, url: `/investigations/${investigation.slug}` });

  } catch (error: any) {
    console.error("HTML Upload Error:", error);
    return NextResponse.json({ error: error.message || "Failed to process HTML file" }, { status: 500 });
  }
}

import Link from "next/link";
import styles from "./page.module.css";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const investigation = await prisma.investigation.findUnique({
    where: { slug: params.slug, status: "PUBLISHED" },
    include: { author: true }
  });

  if (!investigation) {
    notFound();
  }

  // Create a short code from the ID (e.g. 001 or using the ID suffix)
  // Prisma IDs are usually UUID or CUID, we'll just take the last 5 characters
  const shortCode = investigation.id.slice(-5).toUpperCase();

  return (
    <main className={styles.container}>
      <article className={styles.article}>
        
        <header className={styles.header}>
          <div className={styles.chapterHeader}>INVESTIGATION {shortCode}</div>
          <h1 className={styles.title}>{investigation.title}</h1>
          <div className={styles.metaRow}>
            <span>{investigation.publishedAt?.toLocaleDateString("en-GB", { day: '2-digit', month: 'long', year: 'numeric' }) || investigation.updatedAt.toLocaleDateString("en-GB", { day: '2-digit', month: 'long', year: 'numeric' })}</span>
            <span>|</span>
            <span style={{ color: "var(--trust-accent)", fontWeight: "bold" }}>VERIFIED</span>
          </div>
        </header>

        {investigation.featuredImage && (
          <div style={{ marginBottom: "3rem" }}>
            <img 
              src={investigation.featuredImage} 
              alt={investigation.title} 
              style={{ width: "100%", height: "auto", border: "1px solid #333" }} 
            />
          </div>
        )}

        <div className={styles.content}>
          {investigation.excerpt && (
            <p className={styles.excerpt}>
              {investigation.excerpt}
            </p>
          )}
          
          <div dangerouslySetInnerHTML={{ __html: investigation.content || "" }} className="tiptap-content" />
        </div>
      </article>

      <style>{`
        .tiptap-content {
          text-align: justify;
        }
        
        .tiptap-content p {
          margin-bottom: 0;
          text-indent: 2.5rem;
          line-height: 1.8;
          font-size: 1.15rem;
        }
        
        /* The first paragraph does not have an indent, but has the drop cap */
        .tiptap-content p:first-of-type {
          text-indent: 0;
        }
        
        /* Book style drop cap */
        .tiptap-content p:first-of-type::first-letter {
          font-size: 4.5rem;
          font-weight: 700;
          float: left;
          line-height: 0.85;
          margin-right: 0.5rem;
          margin-top: 0.4rem;
          font-family: var(--font-ibm-plex-serif), serif;
          color: var(--text-primary);
        }
        
        /* Uppercase first line of the first paragraph */
        .tiptap-content p:first-of-type::first-line {
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .tiptap-content h1, .tiptap-content h2, .tiptap-content h3 { 
          margin-top: 2.5rem; 
          margin-bottom: 1rem; 
          text-align: left;
          text-indent: 0;
          font-family: var(--font-ibm-plex-serif), serif;
        }
        
        .tiptap-content img { 
          max-width: 100%; 
          height: auto; 
          border: 1px solid var(--border-color); 
          margin: 2rem 0; 
          display: block;
        }
        
        .tiptap-content blockquote { 
          margin: 2rem 0; 
          padding-left: 2rem; 
          font-style: italic; 
          text-indent: 0;
          border-left: 2px solid var(--border-color);
        }
        
        .tiptap-content a { 
          color: var(--text-primary); 
          text-decoration: underline; 
        }
      `}</style>
    </main>
  );
}

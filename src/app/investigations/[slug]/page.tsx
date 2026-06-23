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

  return (
    <main className={styles.container}>
      <article className={styles.article}>
        <header className={styles.header}>
          <span className={styles.auditDate}>
            {investigation.publishedAt?.toLocaleDateString("en-GB", { day: '2-digit', month: 'long', year: 'numeric' }) || investigation.updatedAt.toLocaleDateString("en-GB", { day: '2-digit', month: 'long', year: 'numeric' })}
          </span>
          
          <div className={styles.badgeVerified}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            VERIFIED
          </div>

          <h1 className={styles.title}>{investigation.title}</h1>
          
          <div className={styles.auditMetaGrid}>
            <div className={styles.auditMetaRow}>
              <span className={styles.auditMetaLabel}>Published by:</span>
              <span className={styles.auditMetaValue}>THE POSTMORTEM</span>
            </div>
            <div className={styles.auditMetaRow}>
              <span className={styles.auditMetaLabel}>Category:</span>
              <span className={styles.auditMetaValue}>International Affairs</span>
            </div>
            <div className={styles.auditMetaRow}>
              <span className={styles.auditMetaLabel}>Evidence Status:</span>
              <span className={styles.auditMetaValue}>No Evidence Attached</span>
            </div>
            <div className={styles.auditMetaRow}>
              <span className={styles.auditMetaLabel}>Last Updated:</span>
              <span className={styles.auditMetaValue}>{investigation.updatedAt.toLocaleDateString("en-GB", { day: '2-digit', month: 'long', year: 'numeric' })}</span>
            </div>
            <div className={styles.auditMetaRow}>
              <span className={styles.auditMetaLabel}>Read Time:</span>
              <span className={styles.auditMetaValue}>{Math.ceil((investigation.content?.replace(/<[^>]*>?/gm, '').split(/\s+/).length || 0) / 200) || 1} min</span>
            </div>
          </div>
        </header>

        {investigation.featuredImage && (
          <div style={{ marginBottom: "2rem" }}>
            <img 
              src={investigation.featuredImage} 
              alt={investigation.title} 
              style={{ width: "100%", height: "auto", borderRadius: "8px", border: "1px solid var(--border)" }} 
            />
          </div>
        )}

        <div className={styles.content}>
          {investigation.excerpt && (
            <p style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "2rem" }}>
              {investigation.excerpt}
            </p>
          )}
          
          <div dangerouslySetInnerHTML={{ __html: investigation.content || "" }} className="tiptap-content" />
        </div>
      </article>

      <aside className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Verified Evidence</h3>
        
        <div className={styles.evidenceItem}>
          <span className={styles.evidenceId}>No linked evidence available</span>
          <span className={styles.evidenceDesc}>Evidence linking will be available in the next version.</span>
        </div>
      </aside>

      <style>{`
        .tiptap-content p { margin-bottom: 1rem; }
        .tiptap-content h1, .tiptap-content h2, .tiptap-content h3 { margin-top: 1.5rem; margin-bottom: 0.5rem; }
        .tiptap-content img { max-width: 100%; height: auto; border-radius: 4px; border: 1px solid var(--border); margin: 1rem 0; }
        .tiptap-content blockquote { border-left: 3px solid var(--border); padding-left: 1rem; color: var(--foreground-muted); font-style: italic; }
        .tiptap-content a { color: var(--accent); text-decoration: underline; }
      `}</style>
    </main>
  );
}

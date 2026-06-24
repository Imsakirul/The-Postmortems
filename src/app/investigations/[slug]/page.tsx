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

  const shortCode = investigation.investigationCode || investigation.id.slice(-5).toUpperCase();

  return (
    <main className={styles.articleWrapper}>
      
      <div className={styles.invCode}>INVESTIGATION {shortCode}</div>
      <h1 className={styles.articleTitle}>{investigation.title}</h1>
      
      <div className={styles.articleMeta}>
        <span className={styles.publishDate}>{investigation.publishedAt?.toLocaleDateString("en-GB", { day: '2-digit', month: 'long', year: 'numeric' }) || investigation.updatedAt.toLocaleDateString("en-GB", { day: '2-digit', month: 'long', year: 'numeric' })}</span>
        <span className={`${styles.badge} ${styles.badgeVerified}`}>Verified</span>
      </div>

      {investigation.excerpt && (
        <p className={styles.articleExcerpt}>
          {investigation.excerpt}
        </p>
      )}

      {investigation.featuredImage && (
        <>
          <img 
            src={investigation.featuredImage} 
            alt={investigation.title} 
            className={styles.featuredImage}
          />
          <hr className={styles.rule} />
        </>
      )}

      <div className={styles.articleBody}>
        <div dangerouslySetInnerHTML={{ __html: investigation.content || "" }} className="tiptap-content" />
      </div>

      <style>{`
        .tiptap-content p {
          font-size: 20px;
          line-height: 1.9;
          margin-bottom: 1.5em;
          text-align: justify;
          hyphens: auto;
          -webkit-hyphens: auto;
          color: var(--white, #ffffff);
        }

        .tiptap-content h2 {
          font-family: var(--font-cinzel), Georgia, serif;
          font-size: 30px;
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: 0.6px;
          color: var(--white, #ffffff);
          margin-top: 0;
          margin-bottom: 28px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--gray-mid, #333333);
        }

        .tiptap-content h3 {
          font-family: var(--font-eb-garamond), Georgia, serif;
          font-size: 26px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 0.5px;
          color: var(--white, #ffffff);
          margin-top: 50px;
          margin-bottom: 16px;
        }

        .tiptap-content h4 {
          font-family: var(--font-eb-garamond), Georgia, serif;
          font-size: 21px;
          font-weight: 700;
          letter-spacing: 0.3px;
          color: #dddddd;
          margin-top: 36px;
          margin-bottom: 12px;
        }

        /* Drop cap - applying to first p after h2 and very first p */
        .tiptap-content > p:first-of-type::first-letter,
        .tiptap-content h2 + p::first-letter {
          float: left;
          font-family: var(--font-cinzel), Georgia, serif;
          font-size: 110px;
          font-weight: 700;
          line-height: 72px;
          padding-right: 14px;
          padding-top: 4px;
          margin-bottom: -8px;
          color: var(--white, #ffffff);
        }

        .tiptap-content strong { font-weight: 700; color: var(--white, #ffffff); }
        .tiptap-content em { font-style: italic; color: #dddddd; }

        .tiptap-content blockquote {
          border-left: 4px solid var(--red, #cc0000);
          padding: 18px 0 18px 28px;
          margin: 36px 0;
          font-size: 20px;
          font-style: italic;
          color: #cccccc;
          line-height: 1.85;
        }

        .tiptap-content ul, .tiptap-content ol {
          margin: 0 0 1.5em 2.2em;
          padding: 0;
        }

        .tiptap-content li {
          font-size: 19px;
          line-height: 1.8;
          margin-bottom: 0.7em;
          color: var(--white, #ffffff);
        }

        .tiptap-content ul { list-style-type: disc; }
        .tiptap-content ol { list-style-type: decimal; }

        .tiptap-content a {
          color: var(--red, #cc0000);
          text-decoration: underline;
          font-weight: 600;
          transition: color 0.2s, background 0.2s;
        }

        .tiptap-content a:hover {
          color: var(--white, #ffffff);
          background: var(--red, #cc0000);
          text-decoration: none;
          padding: 0 3px;
        }

        .tiptap-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 36px 0 48px;
          font-size: 17px;
          line-height: 1.6;
          font-family: var(--font-eb-garamond), Georgia, serif;
        }

        .tiptap-content thead tr {
          background: var(--gray-dark, #1a1a1a);
          border-bottom: 2px solid var(--red, #cc0000);
        }

        .tiptap-content th {
          padding: 14px 18px;
          text-align: left;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--red, #cc0000);
        }

        .tiptap-content td {
          padding: 13px 18px;
          border-bottom: 1px solid var(--gray-mid, #333333);
          color: var(--white, #ffffff);
          vertical-align: top;
        }

        .tiptap-content td:first-child {
          font-weight: 700;
          color: #cccccc;
          white-space: nowrap;
          width: 38%;
        }

        .tiptap-content tbody tr:hover {
          background: #0d0d0d;
        }

        .tiptap-content tbody tr:last-child td {
          border-bottom: 2px solid var(--red, #cc0000);
        }

        @media (max-width: 1024px) {
          .tiptap-content h2 { font-size: 26px; }
          .tiptap-content h3 { font-size: 23px; }
          .tiptap-content p { font-size: 19px; }
          .tiptap-content > p:first-of-type::first-letter,
          .tiptap-content h2 + p::first-letter { font-size: 90px; line-height: 60px; }
        }

        @media (max-width: 768px) {
          .tiptap-content h2 { font-size: 22px; }
          .tiptap-content h3 { font-size: 20px; }
          .tiptap-content h4 { font-size: 18px; }
          .tiptap-content p { font-size: 18px; line-height: 1.75; text-align: left; hyphens: none; }
          .tiptap-content > p:first-of-type::first-letter,
          .tiptap-content h2 + p::first-letter { font-size: 80px; line-height: 54px; padding-right: 10px; }
          .tiptap-content table { font-size: 15px; }
          .tiptap-content td:first-child { white-space: normal; width: auto; }
        }
      `}</style>
    </main>
  );
}

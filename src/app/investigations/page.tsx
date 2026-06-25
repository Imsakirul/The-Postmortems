import Link from "next/link";
import styles from "./page.module.css";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Investigations | The Postmortem",
  description: "Read the latest independent investigative reports from The Postmortem.",
};

export const revalidate = 60; // Cache for 60 seconds (ISR) for instant load times

export default async function InvestigationsFeed() {
  const investigations = await prisma.investigation.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    include: { author: true }
  });

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Investigations Feed</h1>
        <p className={styles.subtitle}>
          The complete ledger of our open and concluded investigations. We follow the evidence, verify the facts, and document the truth.
        </p>
      </header>

      <div className={styles.feed}>
        {investigations.map((inv: any) => (
          <Link href={`/investigations/${inv.slug}`} key={inv.id} className={styles.card}>
            <div className={styles.meta}>
              <span className={styles.date}>{inv.publishedAt?.toLocaleDateString() || inv.updatedAt.toLocaleDateString()}</span>
              <span className={styles.badgeVerified}>
                <svg width="16" height="16" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#1d9bf0" />
                  <path d="M8.5 12.5l2 2 5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                VERIFIED
              </span>
            </div>
            
            <h2 className={styles.cardTitle}>{inv.title}</h2>
            <p className={styles.cardExcerpt}>{inv.excerpt}</p>
            
            <div className={styles.footer}>
              <span>By {inv.author.name}</span>
              <span className={styles.readMore}>Examine Evidence &rarr;</span>
            </div>
          </Link>
        ))}
        {investigations.length === 0 && (
          <p style={{ color: "var(--foreground-muted)", textAlign: "center", padding: "2rem" }}>No investigations published yet.</p>
        )}
      </div>
    </main>
  );
}

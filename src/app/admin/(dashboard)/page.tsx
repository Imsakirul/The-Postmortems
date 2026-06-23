import styles from './page.module.css';
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const metadata = {
  title: 'Admin Dashboard | The Postmortem',
};

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const totalInvestigations = await prisma.investigation.count();
  const publishedReports = await prisma.investigation.count({ where: { status: 'PUBLISHED' } });
  const draftReports = await prisma.investigation.count({ where: { status: 'DRAFT' } });

  const recentInvestigations = await prisma.investigation.findMany({
    orderBy: { updatedAt: 'desc' },
    take: 5,
    include: { author: true }
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>System Overview</h1>
        <p className={styles.subtitle}>Welcome to the central publishing engine.</p>
      </header>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Total Investigations</div>
          <div className={styles.statValue}>{totalInvestigations}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Published Reports</div>
          <div className={styles.statValue}>{publishedReports}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Draft Reports</div>
          <div className={styles.statValue}>{draftReports}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Total Readers (Est)</div>
          <div className={styles.statValue}>---</div>
        </div>
      </div>

      <div className={styles.sectionsGrid}>
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Recent Activity</h2>
          <ul className={styles.activityList}>
            {recentInvestigations.map((inv: any) => (
              <li key={inv.id}>
                <strong>[{inv.author.name}]</strong> updated "{inv.title}" ({inv.status}) - <em>{inv.updatedAt.toLocaleDateString()}</em>
              </li>
            ))}
            {recentInvestigations.length === 0 && <li>No recent activity.</li>}
          </ul>
        </section>

        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Quick Actions</h2>
          <div className={styles.actionGrid}>
            <Link href="/admin/investigations/new" className={styles.actionBtn}>+ New Investigation</Link>
            <Link href="/admin/investigations" className={styles.actionBtn}>Manage Investigations</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

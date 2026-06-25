import Link from "next/link";
import styles from "./layout.module.css";
import LogoutButton from "@/components/LogoutButton";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={`${styles.logo} brand-logo`}>THE POSTMORTEM<span className="text-alert">S.</span></div>
          <span className={styles.badge}>ADMIN</span>
        </div>
        
        <nav className={styles.nav}>
          <div className={styles.navGroup}>
            <span className={styles.navLabel}>System</span>
            <Link href="/admin" className={styles.navLink}>Dashboard</Link>
            <Link href="/" className={styles.navLink} target="_blank">View Live Site</Link>
          </div>
          
          <div className={styles.navGroup}>
            <span className={styles.navLabel}>Content</span>
            <Link href="/admin/investigations" className={styles.navLink}>Investigations</Link>
            <Link href="/admin/investigations/new" className={styles.navLink}>+ New Investigation</Link>
            <Link href="/admin/tips" className={styles.navLink}>Secure Submissions</Link>
          </div>
        </nav>

        <div className={styles.userSection}>
          <div className={styles.activeUser}>Founder</div>
          <LogoutButton />
        </div>
      </aside>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}

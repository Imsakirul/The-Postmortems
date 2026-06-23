import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.title}>THE POSTMORTEM</span>
          <span className={styles.tagline}>Investigate. Verify. Reveal.</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/investigations" className={styles.navLink}>Investigations</Link>
          <Link href="/vault" className={styles.navLink}>Evidence Vault</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/submit" className={`${styles.navLink} text-alert`}>Report to Us</Link>
        </nav>
      </div>
    </header>
  );
}

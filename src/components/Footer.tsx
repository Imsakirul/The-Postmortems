import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.branding}>
          <h2 className={styles.title}>THE POSTMORTEM</h2>
          <p className={styles.tagline}>Investigate. Verify. Reveal.</p>
          <p className={styles.desc}>Independent investigative journalism for the people of India.</p>
          <p className={styles.desc}>Bound by the Constitution. Answerable to no one but the truth.</p>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnHeader}>ABOUT</h3>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/about#editorial-standards" className={styles.link}>Editorial Standards</Link>
            <Link href="/corrections-policy" className={styles.link}>Corrections Policy</Link>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnHeader}>POLICIES</h3>
            <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
            <Link href="/terms-of-use" className={styles.link}>Terms of Use</Link>
            <Link href="/funding-disclosure" className={styles.link}>Funding Disclosure</Link>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnHeader}>SOURCE PROTECTION</h3>
            <Link href="/source-protection-protocol" className={styles.link}>Source Protection Protocol</Link>
            <Link href="/submit" className={styles.link}>Secure Submissions</Link>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnHeader}>EDITORIAL PRINCIPLES</h3>
            <p className={styles.principleLine}>Investigate.<br/>Verify.<br/>Reveal.</p>
            <p className={styles.principleLine}>Evidence before conclusions.</p>
            <p className={styles.principleLine}>Documentation before publication.</p>
            <p className={styles.principleLine}>Accountability without fear or favor.</p>
            <p className={styles.principleLine}>The Constitution of India is our guiding framework.</p>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© The Postmortem.</p>
          <p>Independent investigative journalism.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

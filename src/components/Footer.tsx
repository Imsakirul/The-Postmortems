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
        
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h3 className={styles.linkHeader}>Institutional</h3>
            <Link href="/about" className={styles.link}>About The Postmortem</Link>
            <Link href="/corrections-policy" className={styles.link}>Corrections Policy</Link>
            <Link href="/funding-disclosure" className={styles.link}>Funding Disclosure</Link>
          </div>
          <div className={styles.linkGroup}>
            <h3 className={styles.linkHeader}>Security & Legal</h3>
            <Link href="/source-protection-protocol" className={styles.link}>Source Protection Protocol</Link>
            <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
            <Link href="/terms-of-use" className={styles.link}>Terms of Use</Link>
          </div>
        </div>

        <div className={styles.principlesBlock}>
          <h3 className={styles.principlesHeader}>EDITORIAL PRINCIPLES</h3>
          <p className={styles.principleLine}>Investigate.<br/>Verify.<br/>Reveal.</p>
          <p className={styles.principleLine}>Evidence before conclusions.</p>
          <p className={styles.principleLine}>Documentation before publication.</p>
          <p className={styles.principleLine}>Accountability without fear or favor.</p>
          <p className={styles.principleLine}>The Constitution of India is our guiding framework.</p>
          <p className={styles.principleLine}>Public trust is earned through transparency, verification, and accountability.</p>
        </div>

        <div className={styles.disclaimer}>
          <p>We are not responsible for the discomfort our journalism causes the powerful. We are responsible for ensuring it is true.</p>
          <p>© The Postmortem. All investigations are the intellectual property of this platform. Reproduction permitted with full attribution and source linking. No reproduction for commercial use without written permission.</p>
        </div>

        <div className={styles.finalWord}>
          <p className={styles.finalTitle}>THE POSTMORTEM.</p>
          <p>We investigate the person. Not the position. Not the party. Not the ideology.</p>
          <p>Only the conduct. Only the evidence. Only the truth.</p>
          <p>India's Constitution is our only employer.</p>
          <p>The Indian people are our only client.</p>
        </div>
      </div>
    </footer>
  );
}

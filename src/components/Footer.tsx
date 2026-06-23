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
            <Link href="/contact" className={styles.link}>For tips and secure submissions: Secure Contact Page</Link>
            <Link href="/corrections" className={styles.link}>For corrections: Corrections Policy</Link>
            <Link href="/legal" className={styles.link}>For legal notices: Legal Contact — All notices are published</Link>
            <Link href="/editorial" className={styles.link}>For editorial inquiries: Editorial Contact</Link>
          </div>
        </div>

        <div className={styles.quoteBox}>
          <p className={styles.quote}>
            "We don't care if you are the Prime Minister, the Chief Justice, or the Defence Minister. If you are doing wrong with the power the people of India gave you — we will find it, we will verify it, and we will publish it. The chair does not protect you. The title does not protect you. The only thing that protects you is not being corrupt."
          </p>
          <p className={styles.quoteAuthor}>— The Editorial Desk, The Postmortem</p>
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

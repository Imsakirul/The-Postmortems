import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.branding}>
          <h2 className={`${styles.title} brand-logo`}>THE POSTMORTEM<span className="text-alert">S.</span></h2>
          <p className={styles.tagline}>Investigate. Verify. Reveal.</p>
          <p className={styles.desc}>Independent investigative journalism for the people of India.</p>
          <p className={styles.desc}>Bound by the Constitution. Answerable to no one but the truth.</p>
        </div>
        
        {/* Desktop Grid (Hidden on Mobile) */}
        <div className={`${styles.grid} ${styles.desktopGrid}`}>
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

        {/* Mobile Accordion (Hidden on Desktop) */}
        <div className={`${styles.grid} ${styles.mobileAccordion}`}>
          <details className={styles.accordionDetails} name="footer-accordion">
            <summary className={styles.accordionSummary}>
              <h3 className={styles.columnHeader}>ABOUT <span className={styles.chevron}>▼</span></h3>
            </summary>
            <div className={styles.accordionContent}>
              <Link href="/about" className={styles.link}>About</Link>
              <Link href="/about#editorial-standards" className={styles.link}>Editorial Standards</Link>
              <Link href="/corrections-policy" className={styles.link}>Corrections Policy</Link>
            </div>
          </details>

          <details className={styles.accordionDetails} name="footer-accordion">
            <summary className={styles.accordionSummary}>
              <h3 className={styles.columnHeader}>POLICIES <span className={styles.chevron}>▼</span></h3>
            </summary>
            <div className={styles.accordionContent}>
              <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
              <Link href="/terms-of-use" className={styles.link}>Terms of Use</Link>
              <Link href="/funding-disclosure" className={styles.link}>Funding Disclosure</Link>
            </div>
          </details>

          <details className={styles.accordionDetails} name="footer-accordion">
            <summary className={styles.accordionSummary}>
              <h3 className={styles.columnHeader}>SOURCE PROTECTION <span className={styles.chevron}>▼</span></h3>
            </summary>
            <div className={styles.accordionContent}>
              <Link href="/source-protection-protocol" className={styles.link}>Source Protection Protocol</Link>
              <Link href="/submit" className={styles.link}>Secure Submissions</Link>
            </div>
          </details>

          <details className={styles.accordionDetails} name="footer-accordion">
            <summary className={styles.accordionSummary}>
              <h3 className={styles.columnHeader}>EDITORIAL PRINCIPLES <span className={styles.chevron}>▼</span></h3>
            </summary>
            <div className={styles.accordionContent}>
              <p className={styles.principleLine}>Investigate.<br/>Verify.<br/>Reveal.</p>
              <p className={styles.principleLine}>Evidence before conclusions.</p>
              <p className={styles.principleLine}>Documentation before publication.</p>
              <p className={styles.principleLine}>Accountability without fear or favor.</p>
              <p className={styles.principleLine}>The Constitution of India is our guiding framework.</p>
            </div>
          </details>
        </div>

        <div className={styles.copyright}>
          <p>© The Postmortems.</p>
          <p>Independent investigative journalism.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>THE POSTMORTEM</h1>
          <h2 className={styles.heroTagline}>Investigate. Verify. Reveal.</h2>
          <div className={styles.heroSub}>
            <p>India's evidence-based investigative journalism platform.</p>
            <p>We follow documents, not ideology. We answer to citizens, not power.</p>
          </div>
          <div className={styles.heroActions}>
            <Link href="/investigations" className="btn btn-primary">Read Latest Investigations</Link>
            <Link href="/vault" className="btn">Enter Evidence Vault</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Who We Are</h2>
          </div>
          <div className={styles.textBlock}>
            <p>We are not a newspaper. We are not a news channel. We are not a digital media startup chasing clicks.</p>
            <p>The Postmortem is an investigative unit. We take time. We build files. We verify documents. We ask hard questions in writing. We publish when the evidence is ready — not when the news cycle demands it.</p>
            <p>We work slowly so the truth survives scrutiny.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What We Investigate</h2>
          </div>
          <div className={`${styles.gridList} grid-cols-2`}>
            <div className={styles.gridItem}>
              <h3 className={styles.gridItemTitle}>National Affairs</h3>
              <p className={styles.gridItemDesc}>Governance failures, policy implementation gaps, administrative corruption, regulatory capture, and abuse of public office at the central and state level.</p>
            </div>
            <div className={styles.gridItem}>
              <h3 className={styles.gridItemTitle}>Judiciary Watch</h3>
              <p className={styles.gridItemDesc}>Public court records, judgment analysis, judicial appointments, court administration, and constitutional developments. We do not interfere with proceedings. We analyse outcomes.</p>
            </div>
            <div className={styles.gridItem}>
              <h3 className={styles.gridItemTitle}>Defence & Security</h3>
              <p className={styles.gridItemDesc}>Procurement irregularities, audit findings, parliamentary committee reports, publicly available defence policy documents, and veterans' welfare. Sourced only from lawful public disclosures.</p>
            </div>
            <div className={styles.gridItem}>
              <h3 className={styles.gridItemTitle}>Corporate Accountability</h3>
              <p className={styles.gridItemDesc}>Corporate governance failures, public procurement fraud, environmental violations, consumer protection failures, market manipulation, and financial crime — documented through filings, audits, and regulatory orders.</p>
            </div>
            <div className={styles.gridItem}>
              <h3 className={styles.gridItemTitle}>Global Investigations</h3>
              <p className={styles.gridItemDesc}>Cross-border investigations involving Indian interests, assets, individuals, or institutions. Conducted in collaboration with international investigative partners where applicable.</p>
            </div>
            <div className={styles.gridItem}>
              <h3 className={styles.gridItemTitle}>Fact Check Centre</h3>
              <p className={styles.gridItemDesc}>Verification of claims made by public figures, institutions, and viral content — using primary documents and publicly accessible records. We fact-check power, not people.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Evidence Vault</h2>
          </div>
          <div className={styles.textBlock}>
            <p><strong>Every Story Has a Paper Trail. Here Is Ours.</strong></p>
            <p>The Evidence Vault is a public document repository containing the primary source material behind our investigations.</p>
            <ul className={styles.vaultList}>
              <li>RTI applications and official responses</li>
              <li>Court filings and judgments</li>
              <li>Government audit reports — CAG and others</li>
              <li>Parliamentary standing committee reports</li>
              <li>Regulatory orders and show-cause notices</li>
              <li>Corporate filings and financial disclosures</li>
              <li>Official correspondence and letters</li>
              <li>Video and audio with full chain-of-custody documentation</li>
            </ul>
            <p>Every document in the Vault is timestamped, sourced, and linked to its parent investigation. Nothing is published anonymously. Nothing appears without context.</p>
            <p>We publish documents the powerful would prefer you never see.</p>
            <br />
            <Link href="/vault" className="btn">Enter Evidence Vault</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Constitutional Pledge</h2>
          </div>
          <div className={styles.textBlock}>
            <p>We operate under the Constitution of India. We are bound by it. We are protected by it.</p>
            <ul className={styles.pledgeList}>
              <li>
                <strong>Article 19(1)(a)</strong>
                We invoke Article 19(1)(a) — not as a shield against accountability, but as a mandate to pursue it.
              </li>
              <li>
                <strong>Article 21</strong>
                We respect Article 21 — because privacy is a fundamental right, and we do not violate it without proportionate public interest justification.
              </li>
              <li>
                <strong>Article 14</strong>
                We abide by Article 14 — because equality before the law applies to our subjects and to us.
              </li>
              <li>
                <strong>Article 51A</strong>
                We fulfil Article 51A — because journalism that undermines national integrity is not journalism. It is sabotage.
              </li>
            </ul>
            <p><strong>The Constitution of India is our editorial policy.</strong></p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.reportBox}>
            <h2 className={styles.sectionTitle}>Report to Us</h2>
            <div className={styles.textBlock} style={{ margin: "0 auto" }}>
              <p><strong>If You Have Evidence, We Want to See It.</strong></p>
              <p>We accept tips, documents, and leads from citizens, whistleblowers, insiders, and former officials.</p>
              <p>We protect every source. Legally. Technically. Absolutely.</p>
              <p>Before you contact us, read our Source Protection Protocol. Your safety matters more than any story.</p>
            </div>
            <div className={styles.reportActions}>
              <Link href="/submit" className="btn" style={{ borderColor: "var(--alert-accent)", color: "var(--alert-accent)" }}>Submit a Tip — Securely</Link>
              <Link href="/protocol" className="btn">Read Source Protection Protocol</Link>
              <Link href="/rti" className="btn">How to File an RTI</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.fundingBox}>
            <h2 className={styles.sectionTitle}>Who Funds Us</h2>
            <div className={styles.textBlock}>
              <p>Transparency about funding is not optional. It is foundational.</p>
              <p>The Postmortem publishes a full funding disclosure on this page, updated quarterly. Every significant donor, grant, and revenue source is listed. Any funding that comes with editorial conditions is refused and reported.</p>
              <p>We are not free because someone powerful funds us. We are free because we will not be owned.</p>
              <br />
              <Link href="/funding" className="btn">Read Full Funding Disclosure</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="container">
          <div className={styles.peopleSection}>
            <h2 className={styles.peopleTitle}>TO THE PEOPLE OF INDIA</h2>
            <div className={styles.preamble}>
              <p>You are the reason The Postmortem exists. Not for governments. Not for political parties. Not for corporations. Not for institutions seeking praise. And not for any ideology seeking followers. For the public.</p>
              <p>For the citizen whose voice is rarely heard beyond election season. For the taxpayer who deserves to know how public money is spent. For the student, worker, entrepreneur, farmer, professional, pensioner, and family whose lives are shaped by decisions made behind closed doors. A democracy functions best when information is available, institutions are accountable, and power is subject to scrutiny. That is where investigative journalism serves its purpose.</p>
              <p>The Postmortem exists to examine matters of public interest through evidence, documentation, verification, and responsible reporting. We do not begin with conclusions. We begin with questions. We do not ask readers to trust us because of our name. We ask readers to examine the evidence, review the facts, and judge our work by the standards we apply to ourselves.</p>
              <p>Our commitment is simple: To investigate thoroughly. To verify rigorously. To correct mistakes when they occur. To publish responsibly. To remain independent.</p>
              <p>The Constitution of India guarantees the principles that make public accountability possible. Those principles guide our work and our responsibilities. Every document reviewed, every record examined, every source verified, and every investigation published is undertaken with one purpose: To contribute to a more informed public and a more accountable society.</p>
              <p>Public trust is not something we inherit. It is something we must earn, publication by publication, fact by fact, and investigation by investigation.</p>
              <p>To the people of India: Thank you for reading, questioning, challenging, and holding us accountable. We consider that responsibility an honor.</p>
              <p><strong>The Postmortem</strong><br/><em>Investigate. Verify. Reveal.</em></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

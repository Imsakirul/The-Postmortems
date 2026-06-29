import styles from "@/styles/institutional.module.css";
import Link from "next/link";

export const metadata = {
  title: "Corrections Policy | The Postmortems",
  description: "Our institutional framework for accuracy, evidence reassessment, and public corrections.",
  alternates: {
    canonical: "https://the-postmortems.vercel.app/corrections-policy"
  },
  openGraph: {
    title: "Corrections Policy | The Postmortems",
    description: "Our institutional framework for accuracy, evidence reassessment, and public corrections.",
    url: "https://the-postmortems.vercel.app/corrections-policy",
    siteName: "The Postmortems",
    type: "website"
  }
};

export default function CorrectionsPolicyPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Corrections Policy</h1>
        <span className={styles.lastUpdated}>Last Updated: June 24, 2026</span>
      </header>

      <nav className={styles.toc} aria-label="Table of Contents">
        <h2 className={styles.tocTitle}>Contents</h2>
        <ol className={styles.tocList}>
          <li><a href="#why-corrections-matter">Why Corrections Matter</a></li>
          <li><a href="#commitment-to-accuracy">Commitment to Accuracy</a></li>
          <li><a href="#reporting-an-error">Reporting an Error</a></li>
          <li><a href="#reader-evidence-submission">Reader Evidence Submission Process</a></li>
          <li><a href="#review-timeframe">Timeframe for Reviewing Requests</a></li>
          <li><a href="#correction-review-process">Correction Review Process</a></li>
          <li><a href="#evidence-reassessment">Evidence Reassessment</a></li>
          <li><a href="#clarifications">Clarifications</a></li>
          <li><a href="#corrections">Corrections</a></li>
          <li><a href="#updates-vs-corrections">Difference Between Updates and Corrections</a></li>
          <li><a href="#article-updates">Article Updates</a></li>
          <li><a href="#retractions">Retractions</a></li>
          <li><a href="#historical-archive">Historical Correction Archive Policy</a></li>
          <li><a href="#reader-challenges">Reader Challenges</a></li>
          <li><a href="#appeals-process">Appeals Process</a></li>
          <li><a href="#editorial-independence">Editorial Independence in Corrections</a></li>
          <li><a href="#transparency-standards">Transparency Standards</a></li>
        </ol>
      </nav>

      <section className={styles.content}>
        <h2 id="why-corrections-matter">1. Why Corrections Matter</h2>
        <p>In investigative journalism, the refusal to correct an error is a violation of the public trust. At The Postmortems, we recognize that no investigative process, regardless of how rigorous, is permanently immune to error. When new, verified evidence contradicts our published findings, acknowledging and correcting the record is our institutional obligation.</p>
        <p>A correction is not a failure of journalism; it is the mechanism by which journalism maintains its integrity.</p>

        <h2 id="commitment-to-accuracy">2. Commitment to Accuracy</h2>
        <p>The Postmortems is fundamentally committed to factual accuracy. We separate facts from interpretation and firmly distinguish evidence from opinion. We do not publish opinions masquerading as facts, nor do we ignore verified facts that challenge our reporting. Our loyalty is entirely to the truth, not to our original publication.</p>

        <h2 id="reporting-an-error">3. Reporting an Error</h2>
        <p>We invite our readers, subjects of our investigations, and independent researchers to hold us accountable. If you identify a factual error, misrepresentation of data, or an omission that fundamentally alters the context of an investigation, you are encouraged to formally report it.</p>
        <p>Reports can be submitted through our secure contact portal or directly to our editorial desk. We require reports to specify the exact article, the specific claim in dispute, and the primary evidence that contradicts our reporting.</p>

        <h2 id="reader-evidence-submission">4. Reader Evidence Submission Process</h2>
        <p>To initiate a formal review, readers must submit verifiable evidence. A submission claiming an error without providing primary documentation or independent corroboration will be noted but cannot trigger a formal retraction or correction.</p>
        <p>Acceptable evidence submissions include official records, verified court filings, unedited audio/visual recordings, or documented data that directly refutes a specific published claim.</p>

        <h2 id="review-timeframe">5. Timeframe for Reviewing Requests</h2>
        <p>The Postmortems commits to a prompt, structured response timeline for all formal correction requests.</p>
        <ul>
          <li><strong>Initial Assessment:</strong> All submissions accompanied by evidence are reviewed within 48 hours.</li>
          <li><strong>Investigation:</strong> Depending on the complexity of the data, the editorial team will conduct a thorough reassessment of the evidence within 7 to 14 days.</li>
          <li><strong>Resolution:</strong> A formal decision—whether resulting in a correction, clarification, or a denial of the request—will be communicated to the submitting party and appended to the article if changes are made.</li>
        </ul>

        <h2 id="correction-review-process">6. Correction Review Process</h2>
        <p>When a credible error report is received, the original reporter and a senior editor who was not involved in the initial investigation will jointly review the claim. This dual-review structure ensures that defensive bias does not prevent necessary corrections.</p>

        <h2 id="evidence-reassessment">7. Evidence Reassessment</h2>
        <p>During the review process, the new evidence provided is weighed against the primary evidence used in the original investigation. If the new evidence is verified and supersedes our prior documentation, the published record will be altered to reflect the accurate truth.</p>

        <h2 id="clarifications">8. Clarifications</h2>
        <p>A <strong>clarification</strong> is issued when our reporting is factually accurate but the phrasing or presentation lacks necessary context, potentially leading a reasonable reader to draw an incorrect conclusion. Clarifications are appended to the bottom of the article with a clear timestamp.</p>

        <h2 id="corrections">9. Corrections</h2>
        <p>A <strong>correction</strong> is issued when a verifiable factual error has been published. Examples of factual errors include incorrect names, dates, financial figures, or misstated chronological events. When a correction is made, the text of the article is amended, and a prominent "Correction" notice is placed at the top or bottom of the article detailing what was changed, why, and when.</p>

        <h2 id="updates-vs-corrections">10. Difference Between Updates and Corrections</h2>
        <p>It is vital to distinguish between a correction and an update.</p>
        <ul>
          <li><strong>Correction:</strong> Addresses an error that was false at the time of publication.</li>
          <li><strong>Update:</strong> Adds new, developing information to a story that was factually accurate at the time it was published, but where circumstances have since evolved (e.g., a subject is indicted after the initial investigation is published).</li>
        </ul>

        <h2 id="article-updates">11. Article Updates</h2>
        <p>When an article is updated with significant new developments, an "Update" notice will be appended to the top of the article. Routine typographical or grammatical fixes that do not alter the facts or context of the story are made without an editor's note.</p>

        <h2 id="retractions">12. Retractions</h2>
        <p>A <strong>retraction</strong> is the most severe editorial action we can take. A retraction notice is issued if the foundational evidence of an investigation is found to be fabricated, systematically flawed, or fundamentally incorrect, rendering the entire premise of the article invalid.</p>
        <p>In the event of a retraction, the original article is removed or heavily redacted, and a comprehensive explanation of the failure in our verification process is published in its place.</p>

        <h2 id="historical-archive">13. Historical Correction Archive Policy</h2>
        <p>The Postmortems maintains a permanent public ledger of all major corrections and retractions. We do not stealth-edit our archives to hide past mistakes. Every significant editorial intervention remains permanently visible to the public as a matter of historical and institutional record.</p>

        <h2 id="reader-challenges">14. Reader Challenges</h2>
        <p>We welcome rigorous challenges to our interpretation of facts. However, a disagreement over the interpretation of facts is not grounds for a correction. A correction is strictly reserved for the rectification of verified factual errors. We distinguish sharply between a disputed claim and an objective falsehood.</p>

        <h2 id="appeals-process">15. Appeals Process</h2>
        <p>If a subject of an investigation believes a correction request was unfairly dismissed, they may submit a formal appeal. Appeals are escalated directly to the executive editorial board, completely bypassing the original reporting and editing team, to ensure a sterile, unbiased review of the evidence.</p>

        <h2 id="editorial-independence">16. Editorial Independence in Corrections</h2>
        <p>Decisions regarding corrections, clarifications, and retractions are strictly editorial. They are never influenced by legal threats, advertiser pressure, donor requests, or external public relations campaigns. A correction is issued solely because the evidence demands it.</p>

        <h2 id="transparency-standards">17. Transparency Standards</h2>
        <p>Our commitment to corrections is a commitment to transparency. By openly documenting our errors and the methodology by which we correct them, we allow the public to continuously audit the integrity of our institution.</p>
      </section>
    </main>
  );
}

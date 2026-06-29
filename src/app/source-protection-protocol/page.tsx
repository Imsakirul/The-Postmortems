import styles from "@/styles/institutional.module.css";
import Link from "next/link";

export const metadata = {
  title: "Source Protection Protocol | The Postmortems",
  description: "Strict institutional protocols for whistleblower protection, secure communications, and evidence verification.",
  alternates: {
    canonical: "https://the-postmortems.vercel.app/source-protection-protocol"
  },
  openGraph: {
    title: "Source Protection Protocol | The Postmortems",
    description: "Strict institutional protocols for whistleblower protection, secure communications, and evidence verification.",
    url: "https://the-postmortems.vercel.app/source-protection-protocol",
    siteName: "The Postmortems",
    type: "website"
  }
};

export default function SourceProtectionProtocolPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Source Protection Protocol</h1>
        <span className={styles.lastUpdated}>Last Updated: June 24, 2026</span>
      </header>

      <nav className={styles.toc} aria-label="Table of Contents">
        <h2 className={styles.tocTitle}>Contents</h2>
        <ol className={styles.tocList}>
          <li><a href="#why-sources-matter">Why Sources Matter</a></li>
          <li><a href="#protection-principles">Source Protection Principles</a></li>
          <li><a href="#confidential-sources">Confidential Sources</a></li>
          <li><a href="#anonymous-sources">Anonymous Sources</a></li>
          <li><a href="#anonymous-submissions">Handling Anonymous Submissions</a></li>
          <li><a href="#whistleblower-protection">Whistleblower Protection</a></li>
          <li><a href="#verification-requirements">Verification Requirements</a></li>
          <li><a href="#evidence-requirements">Evidence Requirements</a></li>
          <li><a href="#corroboration-standards">Corroboration Standards</a></li>
          <li><a href="#evidence-workflow">Evidence Verification Workflow</a></li>
          <li><a href="#secure-communications">Secure Communications</a></li>
          <li><a href="#document-review">Secure Document Review Process</a></li>
          <li><a href="#identity-protection">Identity Protection</a></li>
          <li><a href="#reporter-separation">Reporter-Source Separation Principles</a></li>
          <li><a href="#editorial-review">Editorial Review</a></li>
          <li><a href="#approval-standards">Publication Approval Standards</a></li>
          <li><a href="#legal-considerations">Legal Considerations</a></li>
          <li><a href="#publication-standards">Publication Standards</a></li>
          <li><a href="#source-responsibilities">Source Responsibilities</a></li>
          <li><a href="#risk-disclosure">Risk Disclosure</a></li>
        </ol>
      </nav>

      <section className={styles.content}>
        <h2 id="why-sources-matter">1. Why Sources Matter</h2>
        <p>Institutional accountability is rarely achieved through official press releases. The most critical investigations rely on the courage of insiders, whistleblowers, and sources who risk their livelihoods to expose systemic failures, corruption, and abuse of power. The Postmortems recognizes that our ability to investigate institutions is entirely dependent on our ability to protect the individuals who provide us with evidence.</p>

        <h2 id="protection-principles">2. Source Protection Principles</h2>
        <p>Protecting a source's identity is not a preference; it is a foundational journalistic obligation. We employ strict operational security protocols to shield our sources from legal, professional, and physical retaliation. However, we also enforce rigid verification standards to ensure that source protection is never used to launder unverified claims or personal grievances.</p>

        <h2 id="confidential-sources">3. Confidential Sources</h2>
        <p>A confidential source is an individual whose identity is known to our reporters and editors, but who is granted anonymity in our published investigations. We grant confidentiality only when the source faces credible risks of retaliation, and when their information is of vital public interest and cannot be obtained through on-the-record channels.</p>

        <h2 id="anonymous-sources">4. Anonymous Sources</h2>
        <p>An anonymous source is an individual whose identity remains unknown even to our reporters. While we accept materials submitted anonymously, <strong>anonymous allegations alone are never sufficient for publication.</strong> We do not publish accusations based solely on the word of an unidentified party.</p>

        <h2 id="anonymous-submissions">5. Handling Anonymous Submissions</h2>
        <p>When we receive an anonymous submission, our focus shifts immediately to the accompanying evidence. The anonymity of the sender requires us to subject the provided documents or data to an extreme standard of forensic and contextual verification. If the provided evidence cannot be independently verified and authenticated, the investigation cannot proceed.</p>

        <h2 id="whistleblower-protection">6. Whistleblower Protection</h2>
        <p>We treat whistleblowers—individuals exposing misconduct from within an organization—with the highest degree of operational security. We utilize encrypted communication channels, secure drop systems, and legal counsel to minimize their exposure. We work with whistleblowers to establish strict boundaries regarding what information can be published without inadvertently exposing their identity.</p>

        <h2 id="verification-requirements">7. Verification Requirements</h2>
        <p>The burden of proof remains entirely on The Postmortems. We do not transfer the responsibility of verification to the reader. <strong>Evidence must be independently verified whenever possible.</strong> A source's credibility, while important, does not replace the necessity for hard documentation and independent verification of the facts they provide.</p>

        <h2 id="evidence-requirements">8. Evidence Requirements</h2>
        <p>We evaluate evidence based on its provenance, authenticity, and context. Acceptable evidence from sources includes internal communications, financial ledgers, legal filings, and technical data. We require sources to provide the rawest form of evidence available to prevent manipulation. Summaries or interpretations of documents provided by a source are not treated as primary evidence.</p>

        <h2 id="corroboration-standards">9. Corroboration Standards</h2>
        <p><strong>Claims require corroboration.</strong> We mandate that critical allegations supplied by a confidential or anonymous source be corroborated by at least one independent, documentary source, or multiple secondary sources with direct knowledge of the events. Uncorroborated single-source claims are generally insufficient for publication.</p>

        <h2 id="evidence-workflow">10. Evidence Verification Workflow</h2>
        <p>Upon receiving evidence from a source, we execute a strict workflow:</p>
        <ol>
          <li>Digital forensic review to ensure documents are not forged or altered.</li>
          <li>Cross-referencing claims against public records and open-source data.</li>
          <li>Attempting to secure independent, parallel documentation of the same events.</li>
          <li>Review by an independent editor isolated from the original source relationship.</li>
        </ol>

        <h2 id="secure-communications">11. Secure Communications</h2>
        <p>We mandate the use of end-to-end encrypted messaging applications for all sensitive source communications. We instruct sources on how to utilize secure drop platforms accessed via the Tor network for the safe transmission of high-risk documents. We routinely train our staff in operational security and threat modeling.</p>

        <h2 id="document-review">12. Secure Document Review Process</h2>
        <p>Highly sensitive documents are reviewed on air-gapped systems separated from the internet. We systematically strip metadata from all files, images, and documents prior to any internal distribution or external publication to prevent the inadvertent disclosure of the source's identity, location, or hardware.</p>

        <h2 id="identity-protection">13. Identity Protection</h2>
        <p>The identity of a confidential source is restricted to the primary reporter and the executive editor. It is not recorded in centralized digital databases or unencrypted internal communications. We employ strict compartmentalization to ensure that a breach of one system does not compromise our source network.</p>

        <h2 id="reporter-separation">14. Reporter-Source Separation Principles</h2>
        <p>Reporters are instructed to maintain a professional distance from their sources. We strictly separate the act of source cultivation from the act of evidence verification. A reporter may advocate for the importance of a source's information, but an independent editor must objectively assess the validity of the evidence.</p>

        <h2 id="editorial-review">15. Editorial Review</h2>
        <p>The decision to grant confidentiality is never made unilaterally by a reporter. It requires the approval of the executive editor, following a rigorous assessment of the source's motives, the public interest of the information, and the impossibility of obtaining the evidence elsewhere.</p>

        <h2 id="approval-standards">16. Publication Approval Standards</h2>
        <p><strong>Publication decisions are based on evidence, not accusation.</strong> Before an investigation utilizing confidential sources is approved for publication, the editorial board must reach a consensus that the evidence is overwhelming, the verification is bulletproof, and the public interest unambiguously justifies the use of unnamed sources.</p>

        <h2 id="legal-considerations">17. Legal Considerations</h2>
        <p>We operate within the legal frameworks governing press freedom in India, but we are prepared to exhaust all legal remedies to protect the identities of our confidential sources. Our legal counsel reviews all high-risk investigations prior to publication to assess both defamation risks and the legal exposure of our sources.</p>

        <h2 id="publication-standards">18. Publication Standards</h2>
        <p>When relying on a confidential source, we explain to our readers, with as much detail as safely possible, why the source was granted anonymity and how they are in a position to know the information provided. We strive to maximize transparency without compromising the source's operational security.</p>

        <h2 id="source-responsibilities">19. Source Responsibilities</h2>
        <p>We require our sources to be honest with our reporters. If a source is discovered to have intentionally misled our team, fabricated evidence, or concealed critical conflicts of interest, The Postmortems reserves the right to terminate the relationship and, in severe cases of manipulation, revoke the agreement of confidentiality.</p>

        <h2 id="risk-disclosure">20. Risk Disclosure</h2>
        <p>While we deploy state-of-the-art security protocols and rigorously train our staff in operational security, the reality of digital surveillance necessitates absolute honesty regarding the limits of protection.</p>
        <p>We do not promise absolute security. <strong>No digital communication system can be guaranteed completely risk-free.</strong> We strongly advise high-risk whistleblowers to research operational security, utilize non-work devices, and avoid transmitting sensitive data from monitored corporate or government networks.</p>
      </section>
    </main>
  );
}

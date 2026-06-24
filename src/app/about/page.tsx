import styles from "@/styles/institutional.module.css";
import Link from "next/link";

export const metadata = {
  title: "About | The Postmortem",
  description: "Learn about our core principles, evidence standards, and institutional commitment to public accountability.",
  alternates: {
    canonical: "https://the-postmortems.vercel.app/about"
  },
  openGraph: {
    title: "About | The Postmortem",
    description: "Learn about our core principles, evidence standards, and institutional commitment to public accountability.",
    url: "https://the-postmortems.vercel.app/about",
    siteName: "The Postmortem",
    type: "website"
  }
};

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>About The Postmortem</h1>
        <span className={styles.lastUpdated}>Last Updated: June 24, 2026</span>
      </header>

      <nav className={styles.toc} aria-label="Table of Contents">
        <h2 className={styles.tocTitle}>Contents</h2>
        <ol className={styles.tocList}>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#why-we-exist">Why The Postmortem Exists</a></li>
          <li><a href="#mission">Mission</a></li>
          <li><a href="#core-principles">Our Core Principles</a></li>
          <li><a href="#editorial-philosophy">Editorial Philosophy</a></li>
          <li><a href="#why-verification-matters">Why Verification Matters</a></li>
          <li><a href="#evidence-before-conclusions">Evidence Before Conclusions</a></li>
          <li><a href="#what-we-investigate">What We Investigate</a></li>
          <li><a href="#what-we-do-not-investigate">What We Do Not Investigate</a></li>
          <li><a href="#evidence-standards">Evidence Standards</a></li>
          <li><a href="#verification-standards">Verification Standards</a></li>
          <li><a href="#evaluating-sources">How We Evaluate Sources</a></li>
          <li><a href="#public-interest-test">Public Interest Test</a></li>
          <li><a href="#independence">Independence Statement</a></li>
          <li><a href="#editorial-independence">Editorial Independence</a></li>
          <li><a href="#constitutional-commitment">Constitutional Commitment</a></li>
          <li><a href="#reporting-methodology">Reporting Methodology</a></li>
          <li><a href="#reader-trust">Reader Trust Commitment</a></li>
          <li><a href="#corrections">Corrections and Accountability</a></li>
          <li><a href="#public-accountability">Public Accountability</a></li>
          <li><a href="#faq">Frequently Asked Questions</a></li>
          <li><a href="#contact">Contact</a></li>
        </ol>
      </nav>

      <section className={styles.content}>
        <h2 id="introduction">1. Introduction</h2>
        <p>The Postmortem is an independent investigative journalism institution dedicated to evidence-based reporting, rigorous public accountability, and factual transparency.</p>
        <p>We believe that public and private institutions become stronger, more efficient, and more accountable when they are subjected to examination based on verifiable facts rather than speculation, corroborated evidence rather than rumor, and rigorous verification rather than unchallenged assumptions.</p>
        <p>The sole purpose of The Postmortem is to investigate matters of substantial public interest and present those findings fully supported by examined evidence.</p>

        <h2 id="why-we-exist">2. Why The Postmortem Exists</h2>
        <p>Modern information infrastructure moves far faster than the process of verification.</p>
        <p>Rumors spread instantaneously. Public narratives solidify long before underlying facts emerge. Public and civic debate frequently begins long before substantive evidence is gathered, examined, and contextualized.</p>
        <p>The Postmortem exists specifically to slow that process down.</p>
        <p>We believe that serious investigative work requires comprehensive documentation, meticulous verification, institutional patience, and contextual integrity.</p>
        <p>Our objective is not to be the first to publish.</p>
        <p>Our objective is to be accurate.</p>

        <h2 id="mission">3. Mission</h2>
        <p>Our mission is to serve the Indian public by executing deep, evidence-led investigations into conduct, systems, and structures that affect the public trust. We function as a reliable mechanism for documenting the truth, completely decoupled from corporate influence, political affiliations, or partisan objectives.</p>

        <h2 id="core-principles">4. Our Core Principles</h2>
        <ul>
          <li><strong>Independence:</strong> We are answerable only to the facts and the public.</li>
          <li><strong>Verification:</strong> We rely exclusively on corroborated evidence, not unchallenged assertions.</li>
          <li><strong>Transparency:</strong> We show our work, sharing documents and evidence alongside our reporting whenever legally and ethically permissible.</li>
          <li><strong>Accountability:</strong> We hold the powerful to account and hold ourselves equally accountable to our readers through a rigorous corrections policy.</li>
        </ul>

        <h2 id="editorial-philosophy">5. Editorial Philosophy</h2>
        <p>Every investigation published by The Postmortem is expected to satisfy fundamental, unyielding editorial standards prior to publication.</p>
        <p>Publication is never considered the beginning of the verification process. Verification must entirely precede publication. We are comfortable delaying or abandoning a story if the evidence does not meet our threshold for absolute confidence.</p>

        <h2 id="why-verification-matters">6. Why Verification Matters</h2>
        <p>Information without verification is indistinguishable from manipulation. In an era where digital tools can easily fabricate documents, statements, and contexts, the burden of proof rests entirely on the publisher.</p>
        <p>Verification is the only mechanism that separates journalism from activism, propaganda, or fiction. We invest heavily in source verification, document authentication, and corroborative reporting because the public deserves certainty, not just probability.</p>

        <h2 id="evidence-before-conclusions">7. Evidence Before Conclusions</h2>
        <p>We do not start with a narrative and search for facts to support it. Our reporting process begins with the collection of data, documents, and testimonies. Only after the evidence has been independently corroborated and legally reviewed do we draw conclusions.</p>
        <p>If the evidence contradicts an initial hypothesis, the hypothesis is discarded. The evidence dictates the reporting.</p>

        <h2 id="what-we-investigate">8. What We Investigate</h2>
        <p>The Postmortem investigates matters of legitimate, documented public interest, including but not limited to:</p>
        <ul>
          <li>Conduct within public institutions and government bodies.</li>
          <li>Efficacy and integrity of government programs and policies.</li>
          <li>Corporate conduct affecting consumers, employees, or the public.</li>
          <li>Financial misconduct, fraud, and misappropriation of funds.</li>
          <li>Procurement, contracting, and public-private partnerships.</li>
          <li>Systemic regulatory failures.</li>
          <li>Documented abuse of power or position.</li>
          <li>Undisclosed conflicts of interest.</li>
          <li>Public spending and taxation allocation.</li>
          <li>Environmental degradation and compliance failures.</li>
          <li>Broad public safety and health concerns.</li>
        </ul>
        <p>Our investigations typically involve months of research, extensive document review, source interviews, data analysis, and multi-layered evidence verification.</p>

        <h2 id="what-we-do-not-investigate">9. What We Do Not Investigate</h2>
        <p>The Postmortem strictly prohibits targeting individuals or entities based on:</p>
        <ul>
          <li>Religion</li>
          <li>Race</li>
          <li>Ethnicity</li>
          <li>Nationality</li>
          <li>Political identity or affiliation</li>
          <li>Gender or sexual orientation</li>
          <li>Personal, private beliefs</li>
        </ul>
        <p>We investigate conduct, decisions, actions, systemic failures, and verifiable evidence. We do not investigate private citizens simply because they hold office, possess influence, or attract transient public attention. Matters of pure personal gossip or private disputes fall completely outside our mandate.</p>

        <h2 id="evidence-standards">10. Evidence Standards</h2>
        <p>The Postmortem prioritizes primary evidence that can be independently examined, verified, or corroborated by our editorial team.</p>
        <p>Acceptable evidence includes:</p>
        <ul>
          <li>Official government records and filings.</li>
          <li>Verified court documents and legal proceedings.</li>
          <li>Audited financial filings.</li>
          <li>Regulatory compliance records.</li>
          <li>Signed contracts and agreements.</li>
          <li>Authenticated internal corporate or government documents.</li>
          <li>Data extracted from public databases.</li>
          <li>Direct, on-the-record reporting and observation.</li>
          <li>Expert analysis from credentialed, independent professionals.</li>
          <li>Multiple-source, independent confirmation of events.</li>
        </ul>
        <p>Anonymous allegations alone are strictly insufficient for publication. Every claim must be supported by verifiable evidence.</p>

        <h2 id="verification-standards">11. Verification Standards</h2>
        <p>Our verification process requires that every material fact in an investigation is backed by at least two independent sources of evidence, or one piece of incontrovertible primary documentary evidence. We routinely submit our findings to internal fact-checkers who played no role in the original reporting process to ensure objectivity.</p>

        <h2 id="evaluating-sources">12. How We Evaluate Sources</h2>
        <p>Sources are evaluated based on their direct access to the information provided, their historical reliability, and their potential motivations. While we accept information from sources with diverse motivations, the information itself must be independently verifiable. A source's motivation does not invalidate their evidence, but it necessitates heightened scrutiny and secondary corroboration.</p>

        <h2 id="public-interest-test">13. Public Interest Test</h2>
        <p>Prior to publication, every investigation is evaluated through a strict public-interest framework. We ask:</p>
        <ul>
          <li>Does this information directly affect the public well-being, safety, or trust?</li>
          <li>Does the disclosure of this information meaningfully improve accountability?</li>
          <li>Does the publication contribute to an informed, factual public discussion?</li>
          <li>Does the compiled evidence definitively support the conclusions presented?</li>
        </ul>
        <p>Not every controversy qualifies as a matter of public interest. We focus our resources exclusively on issues that have systemic, meaningful consequences beyond individual or private disputes.</p>

        <h2 id="independence">14. Independence Statement</h2>
        <p>The Postmortem operates entirely independently. Our investigative findings are determined solely by evidence, journalistic ethics, and editorial review.</p>
        <p>No external party—regardless of their financial, political, or social standing—receives authority, oversight, or preview capabilities over our conclusions, publication decisions, or reporting outcomes.</p>

        <h2 id="editorial-independence">15. Editorial Independence</h2>
        <p>Our editorial team maintains a strict firewall from any funding, administrative, or commercial operations. Editorial decisions are never determined, influenced, or altered by advertisers, sponsors, donors, political organizations, corporations, governments, or private interests. If an investigation involves a donor or contributor, that relationship will be explicitly disclosed in the reporting.</p>

        <h2 id="constitutional-commitment">16. Constitutional Commitment</h2>
        <p>The Constitution of India serves as the guiding framework for our public-interest mission.</p>
        <p>We actively support and rely upon:</p>
        <ul>
          <li>Freedom of expression and the press.</li>
          <li>Due process and the rule of law.</li>
          <li>Equality before the law.</li>
          <li>The rigorous accountability of public institutions.</li>
          <li>Maximum transparency in governance.</li>
          <li>Democratic oversight by an informed public.</li>
        </ul>
        <p>These constitutional principles inform every aspect of our editorial approach and reporting standards.</p>

        <h2 id="reporting-methodology">17. Reporting Methodology</h2>
        <p>A standard investigation at The Postmortem adheres to the following workflow:</p>
        <ol>
          <li><strong>Initial Lead Assessment:</strong> Evaluating the public interest and feasibility of the claim.</li>
          <li><strong>Evidence Collection:</strong> Securing primary documents and data.</li>
          <li><strong>Source Verification:</strong> Authenticating documents and corroborating source identities.</li>
          <li><strong>Documentation Review:</strong> Rigorous analysis of all collected materials.</li>
          <li><strong>Independent Corroboration:</strong> Seeking secondary verification for all material facts.</li>
          <li><strong>Editorial Review:</strong> Internal scrutiny of the narrative, facts, and evidence.</li>
          <li><strong>Legal Evaluation:</strong> Reviewing for defamation, privacy, and statutory compliance.</li>
          <li><strong>Publication:</strong> Releasing the findings to the public.</li>
          <li><strong>Post-Publication Review:</strong> Monitoring feedback and assessing any emerging evidence.</li>
        </ol>

        <h2 id="reader-trust">18. Reader Trust Commitment</h2>
        <p>Trust cannot be demanded; it must be consistently earned.</p>
        <p>The Postmortem seeks to earn the public's trust through the meticulous presentation of evidence, absolute transparency in our methods, accountability for our errors, and a steadfast willingness to correct mistakes.</p>
        <p>We do not ask our readers to believe us simply because of our institutional name. We ask our readers to examine the evidence we provide. Our work must always stand entirely on its own merits.</p>

        <h2 id="corrections">19. Corrections and Accountability</h2>
        <p>Accuracy is not a one-time goal; it is a continuous, institutional obligation.</p>
        <p>If credible evidence demonstrates that a publication contains a factual error, The Postmortem will immediately review the information and issue corrections where appropriate. Transparency regarding our mistakes strengthens our credibility.</p>
        <p>Correcting an error is never viewed as a failure. Ignoring one is.</p>

        <h2 id="public-accountability">20. Public Accountability</h2>
        <p>We invite scrutiny of our own work. Readers, subject matter experts, and involved parties are encouraged to challenge our findings with verifiable evidence. Our <Link href="/corrections-policy">Corrections Policy</Link> outlines the formal mechanism for submitting evidence that contradicts our reporting.</p>

        <h2 id="faq">21. Frequently Asked Questions</h2>
        <p><strong>Do you pay for information?</strong><br />No. We do not pay sources for documents or interviews, as this critically undermines the reliability and credibility of the evidence.</p>
        <p><strong>Can I submit a tip anonymously?</strong><br />Yes. Please refer to our <Link href="/source-protection-protocol">Source Protection Protocol</Link> for instructions on securely sharing information with our reporters.</p>

        <h2 id="contact">22. Contact</h2>
        <p>To reach our editorial desk regarding ongoing investigations, or to securely submit evidence, please refer to our submission guidelines or contact us directly via our secure channels outlined on our platform.</p>
      </section>
    </main>
  );
}

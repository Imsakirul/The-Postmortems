import styles from "./page.module.css";

export const metadata = {
  title: "About | The Postmortem",
  description: "Learn about our mission and journalistic standards.",
};

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>ABOUT THE POSTMORTEM</h1>
      </header>
      <section className={styles.content}>
        <h2>Investigate. Verify. Reveal.</h2>
        <p>The Postmortem is an independent investigative journalism platform dedicated to evidence-based reporting, public accountability, and factual transparency.</p>
        <p>We believe institutions become stronger when they are examined, challenged, and held accountable through facts rather than speculation, evidence rather than rumor, and verification rather than assumption.</p>
        <p>The purpose of The Postmortem is not to promote any political party, ideology, government, corporation, activist group, or private interest.</p>
        <p>Our responsibility is to investigate matters of public interest and present findings supported by evidence.</p>
        
        <hr />
        
        <h2>Why The Postmortem Exists</h2>
        <p>Modern information moves faster than verification.</p>
        <p>Rumors spread instantly. Narratives form before facts emerge. Public debate often begins long before evidence is examined.</p>
        <p>The Postmortem exists to slow that process down.</p>
        <p>We believe serious investigations require documentation, verification, context, and patience.</p>
        <p>Our objective is not to be first.</p>
        <p>Our objective is to be accurate.</p>

        <hr />

        <h2>What We Investigate</h2>
        <p>The Postmortem investigates matters of legitimate public interest, including:</p>
        <ul>
          <li>Public institutions</li>
          <li>Government programs and policies</li>
          <li>Corporate conduct</li>
          <li>Financial misconduct</li>
          <li>Procurement and contracting practices</li>
          <li>Regulatory failures</li>
          <li>Abuse of power</li>
          <li>Conflicts of interest</li>
          <li>Public spending</li>
          <li>Environmental issues</li>
          <li>Public safety concerns</li>
          <li>Systemic failures affecting communities</li>
        </ul>
        <p>Investigations may involve months of research, document review, source interviews, data analysis, and evidence verification.</p>

        <hr />

        <h2>What We Do Not Investigate</h2>
        <p>The Postmortem does not target individuals because of:</p>
        <ul>
          <li>Religion</li>
          <li>Race</li>
          <li>Ethnicity</li>
          <li>Nationality</li>
          <li>Political identity</li>
          <li>Gender</li>
          <li>Personal beliefs</li>
        </ul>
        <p>We investigate conduct, decisions, actions, systems, and evidence.</p>
        <p>We do not investigate people simply because they hold office, possess influence, or attract public attention.</p>

        <hr />

        <h2>Editorial Standards</h2>
        <p>Every investigation is expected to satisfy fundamental editorial standards before publication.</p>
        <p>These standards include:</p>
        <ul>
          <li>Verification of factual claims</li>
          <li>Review of supporting evidence</li>
          <li>Source evaluation</li>
          <li>Contextual analysis</li>
          <li>Public-interest assessment</li>
          <li>Legal review where appropriate</li>
        </ul>
        <p>Evidence is examined before conclusions are reached.</p>
        <p>Publication is never considered the beginning of verification.</p>
        <p>Verification must come first.</p>

        <hr />

        <h2>Evidence Standards</h2>
        <p>The Postmortem prioritizes evidence that can be independently examined, verified, or corroborated.</p>
        <p>Examples include:</p>
        <ul>
          <li>Official records</li>
          <li>Court documents</li>
          <li>Financial filings</li>
          <li>Regulatory records</li>
          <li>Contracts</li>
          <li>Internal documents</li>
          <li>Public databases</li>
          <li>Direct reporting</li>
          <li>Expert analysis</li>
          <li>Multiple-source confirmation</li>
        </ul>
        <p>Anonymous allegations alone are insufficient for publication.</p>
        <p>Claims must be supported by evidence.</p>

        <hr />

        <h2>Public Interest Test</h2>
        <p>Before publication, investigations are evaluated using a public-interest framework.</p>
        <p>Key questions include:</p>
        <ul>
          <li>Does the information affect the public?</li>
          <li>Does disclosure improve accountability?</li>
          <li>Does publication contribute to informed public discussion?</li>
          <li>Does the evidence support the conclusions presented?</li>
        </ul>
        <p>Not every controversy qualifies as a matter of public interest.</p>
        <p>The Postmortem focuses on issues that have meaningful consequences beyond individual disputes.</p>

        <hr />

        <h2>Independence Statement</h2>
        <p>The Postmortem operates independently.</p>
        <p>Editorial decisions are not determined by advertisers, sponsors, donors, political organizations, corporations, governments, or private interests.</p>
        <p>Investigative findings are determined by evidence and editorial review.</p>
        <p>No external party receives authority over conclusions, publication decisions, or reporting outcomes.</p>

        <hr />

        <h2>Constitutional Commitment</h2>
        <p>The Constitution of India serves as the guiding framework for our public-interest mission.</p>
        <p>We support:</p>
        <ul>
          <li>Freedom of expression</li>
          <li>Due process</li>
          <li>Equality before the law</li>
          <li>Accountability of public institutions</li>
          <li>Transparency in governance</li>
          <li>Democratic oversight</li>
        </ul>
        <p>These principles inform our editorial approach and reporting standards.</p>

        <hr />

        <h2>Our Reporting Process</h2>
        <p>A typical investigation may involve:</p>
        <ol>
          <li>Initial lead assessment</li>
          <li>Evidence collection</li>
          <li>Source verification</li>
          <li>Documentation review</li>
          <li>Independent corroboration</li>
          <li>Editorial review</li>
          <li>Legal evaluation when necessary</li>
          <li>Publication</li>
          <li>Post-publication review</li>
        </ol>
        <p>Investigations are judged by evidence, not assumptions.</p>

        <hr />

        <h2>Corrections And Accountability</h2>
        <p>Accuracy is a continuous obligation.</p>
        <p>If credible evidence demonstrates that a publication contains a factual error, The Postmortem will review the information and make corrections where appropriate.</p>
        <p>Transparency regarding mistakes strengthens credibility.</p>
        <p>Correcting an error is not a failure.</p>
        <p>Ignoring one is.</p>

        <hr />

        <h2>Reader Trust Commitment</h2>
        <p>Trust cannot be demanded.</p>
        <p>Trust must be earned.</p>
        <p>The Postmortem seeks to earn that trust through evidence, transparency, accountability, and a willingness to correct mistakes.</p>
        <p>We do not ask readers to believe us because of our name.</p>
        <p>We ask readers to examine the evidence.</p>
        <p>Our work should stand on its own.</p>

        <hr />

        <h2>The Postmortem</h2>
        <p>Investigate.<br />Verify.<br />Reveal.</p>
        <p>Evidence before conclusions.</p>
        <p>Documentation before publication.</p>
        <p>Accountability without fear or favor.</p>
      </section>
    </main>
  );
}

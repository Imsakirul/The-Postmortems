import styles from "@/styles/institutional.module.css";
import Link from "next/link";

export const metadata = {
  title: "Terms of Use | The Postmortem",
  description: "Legal terms, acceptable use policies, and intellectual property rights governing this platform.",
  alternates: {
    canonical: "https://the-postmortems.vercel.app/terms-of-use"
  },
  openGraph: {
    title: "Terms of Use | The Postmortem",
    description: "Legal terms, acceptable use policies, and intellectual property rights governing this platform.",
    url: "https://the-postmortems.vercel.app/terms-of-use",
    siteName: "The Postmortem",
    type: "website"
  }
};

export default function TermsOfUsePage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Terms of Use</h1>
        <span className={styles.lastUpdated}>Last Updated: June 24, 2026</span>
      </header>

      <nav className={styles.toc} aria-label="Table of Contents">
        <h2 className={styles.tocTitle}>Contents</h2>
        <ol className={styles.tocList}>
          <li><a href="#acceptance">Acceptance of Terms</a></li>
          <li><a href="#purpose">Purpose of Platform</a></li>
          <li><a href="#intellectual-property">Intellectual Property</a></li>
          <li><a href="#copyright-policy">Copyright Policy</a></li>
          <li><a href="#fair-use">Fair-Use Policy</a></li>
          <li><a href="#acceptable-use">Acceptable Use</a></li>
          <li><a href="#prohibited-activities">Prohibited Activities & Platform Misuse</a></li>
          <li><a href="#user-conduct">User Conduct</a></li>
          <li><a href="#user-submissions">User-Generated Submissions</a></li>
          <li><a href="#source-submissions">Source Submissions</a></li>
          <li><a href="#reader-responsibilities">Reader Responsibilities</a></li>
          <li><a href="#investigative-content">Investigative Content</a></li>
          <li><a href="#investigative-disclaimer">Investigative Material Disclaimer</a></li>
          <li><a href="#no-legal-advice">No Legal Advice</a></li>
          <li><a href="#no-financial-advice">No Financial Advice</a></li>
          <li><a href="#limitation-of-liability">Limitation of Liability</a></li>
          <li><a href="#platform-security">Platform Security</a></li>
          <li><a href="#enforcement">Enforcement</a></li>
          <li><a href="#jurisdiction">Jurisdiction</a></li>
          <li><a href="#changes">Changes to Terms</a></li>
        </ol>
      </nav>

      <section className={styles.content}>
        <h2 id="acceptance">1. Acceptance of Terms</h2>
        <p>By accessing, browsing, or utilizing The Postmortem platform, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms of Use. If you do not agree to these terms in their entirety, you are expressly prohibited from using this platform and must discontinue access immediately.</p>

        <h2 id="purpose">2. Purpose of Platform</h2>
        <p>The Postmortem is an independent investigative journalism institution. The sole purpose of this digital platform is to publish evidence-based investigations, host verifiable documentation in the public interest, and facilitate secure communication with sources reporting systemic misconduct.</p>

        <h2 id="intellectual-property">3. Intellectual Property</h2>
        <p>All original investigations, textual content, analytical models, proprietary data sets, graphics, and interface designs published on this platform are the exclusive intellectual property of The Postmortem. We vigorously protect our intellectual property against uncredited commercial exploitation.</p>

        <h2 id="copyright-policy">4. Copyright Policy</h2>
        <p>Reproduction of our investigations for commercial purposes without explicit, written prior authorization is strictly prohibited. We permit non-commercial syndication and citation provided that The Postmortem is explicitly credited as the primary source, accompanied by a direct, un-altered hyperlink to the original publication on our platform.</p>

        <h2 id="fair-use">5. Fair-Use Policy</h2>
        <p>We respect and support the doctrine of fair use. Independent researchers, journalists, academics, and citizens are encouraged to quote, cite, and analyze our findings for the purposes of commentary, criticism, news reporting, and education. Fair use requires strict attribution and must not misrepresent the context of the original reporting.</p>

        <h2 id="acceptable-use">6. Acceptable Use</h2>
        <p>Access to this platform is provided solely for the consumption of journalism and the lawful submission of evidence. You agree to use the platform in a manner that does not compromise its security, inhibit the access of other users, or violate any applicable municipal, state, national, or international laws.</p>

        <h2 id="prohibited-activities">7. Prohibited Activities & Platform Misuse</h2>
        <p>The following activities are strictly prohibited. Engaging in platform misuse will result in immediate termination of access and potential legal referral:</p>
        <ul>
          <li><strong>Unauthorized Access:</strong> Attempting to bypass security protocols, access administrative systems, or probe the platform for vulnerabilities.</li>
          <li><strong>False Submissions:</strong> Intentionally submitting fabricated documents, falsified evidence, or malicious disinformation through our contact portals.</li>
          <li><strong>Harassment:</strong> Utilizing our communication tools to harass, threaten, or intimidate our editorial staff or subjects of our investigations.</li>
          <li><strong>Malware:</strong> Uploading or transmitting viruses, ransomware, trojans, or any malicious code designed to disrupt our infrastructure.</li>
          <li><strong>Impersonation:</strong> Attempting to interact with our staff or public forums while fraudulently claiming to represent a government agency, corporation, or another individual.</li>
          <li><strong>Copyright Infringement:</strong> Scraping, mirroring, or republishing our entire database of investigations without authorization.</li>
        </ul>

        <h2 id="user-conduct">8. User Conduct</h2>
        <p>Users must conduct themselves in a manner consistent with public discourse. Any attempt to weaponize our platform to organize coordinated harassment campaigns against individuals named in our investigations is a violation of these terms.</p>

        <h2 id="user-submissions">9. User-Generated Submissions</h2>
        <p>If you submit comments, letters to the editor, or public feedback, you grant The Postmortem a non-exclusive, royalty-free license to publish, edit, or remove that content. We are not obligated to publish any user-generated submission and reserve the right to moderate communications that violate our standards.</p>

        <h2 id="source-submissions">10. Source Submissions</h2>
        <p>The submission of evidence via our secure whistleblower channels is governed by our <Link href="/source-protection-protocol">Source Protection Protocol</Link>. By submitting evidence, you assert that you are not doing so in violation of a binding legal obligation that would subject our journalists to criminal liability, though we recognize the complex legal protections afforded to whistleblowers acting in the public interest.</p>

        <h2 id="reader-responsibilities">11. Reader Responsibilities</h2>
        <p>Readers are responsible for independently assessing the evidence we present. While we adhere to rigorous verification standards, readers must utilize their own critical judgment when evaluating the broader implications of our investigations on public policy or institutional integrity.</p>

        <h2 id="investigative-content">12. Investigative Content</h2>
        <p>The Postmortem frequently publishes raw, primary-source documentation as evidence. This documentation may occasionally contain explicit language, descriptions of violence, or sensitive corporate data relevant to exposing corruption. We publish such material unedited when it is fundamentally necessary to document the truth.</p>

        <h2 id="investigative-disclaimer">13. Investigative Material Disclaimer</h2>
        <p>The investigations published on this platform reflect the facts known and verified at the specific time of publication. As situations evolve and new evidence emerges, historical context may shift. While we actively issue corrections and updates in accordance with our <Link href="/corrections-policy">Corrections Policy</Link>, we do not guarantee that older archives reflect the absolute present-day status of ongoing events.</p>

        <h2 id="no-legal-advice">14. No Legal Advice</h2>
        <p>Investigations analyzing court rulings, legislation, regulatory compliance, or constitutional matters are published strictly for journalistic and public-information purposes. Nothing on this platform constitutes formal legal advice, nor does reading our analysis establish an attorney-client relationship.</p>

        <h2 id="no-financial-advice">15. No Financial Advice</h2>
        <p>Investigations detailing corporate malfeasance, market manipulation, or financial irregularities are acts of journalism, not financial advisory services. The information provided must not be construed as investment advice, trading recommendations, or a directive to buy or sell securities.</p>

        <h2 id="limitation-of-liability">16. Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, The Postmortem, its editors, reporters, and administrative staff shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of, or inability to use, this platform, or any actions you take based on the journalism published herein.</p>

        <h2 id="platform-security">17. Platform Security</h2>
        <p>We deploy robust digital defenses to ensure the uninterrupted availability of our journalism. However, we cannot guarantee that the platform will be entirely immune from state-sponsored cyber-attacks, distributed denial of service (DDoS) campaigns, or temporary technical outages.</p>

        <h2 id="enforcement">18. Enforcement</h2>
        <p>The Postmortem reserves the absolute right to investigate suspected violations of these Terms of Use and to execute any action we deem appropriate, including blocking IP addresses, reporting malicious cyber-activity to relevant authorities, and pursuing civil litigation against entities attempting to sabotage our operations.</p>

        <h2 id="jurisdiction">19. Jurisdiction</h2>
        <p>These Terms of Use are governed by the laws of India. Any legal action or proceeding relating to your access to, or use of, the platform shall be instituted exclusively in a competent court of jurisdiction located in India.</p>

        <h2 id="changes">20. Changes to Terms</h2>
        <p>The Postmortem reserves the right, at our sole discretion, to modify or replace these Terms of Use at any time to reflect changes in our operational requirements or legal obligations. Continued use of the platform after any such modifications constitutes your formal acceptance of the revised terms.</p>
      </section>
    </main>
  );
}

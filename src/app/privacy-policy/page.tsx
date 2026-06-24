import styles from "@/styles/institutional.module.css";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | The Postmortem",
  description: "Our strict data collection, security monitoring, and privacy protocols.",
  alternates: {
    canonical: "https://the-postmortems.vercel.app/privacy-policy"
  },
  openGraph: {
    title: "Privacy Policy | The Postmortem",
    description: "Our strict data collection, security monitoring, and privacy protocols.",
    url: "https://the-postmortems.vercel.app/privacy-policy",
    siteName: "The Postmortem",
    type: "website"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <span className={styles.lastUpdated}>Last Updated: June 24, 2026</span>
      </header>

      <nav className={styles.toc} aria-label="Table of Contents">
        <h2 className={styles.tocTitle}>Contents</h2>
        <ol className={styles.tocList}>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#information-collected">Information We Collect</a></li>
          <li><a href="#analytics-usage">Analytics Usage</a></li>
          <li><a href="#cookies">Cookies</a></li>
          <li><a href="#security-monitoring">Security Monitoring</a></li>
          <li><a href="#contact-forms">Contact Forms</a></li>
          <li><a href="#source-submissions">Source Submissions</a></li>
          <li><a href="#user-communications">User Communications</a></li>
          <li><a href="#future-newsletters">Future Newsletter Subscriptions</a></li>
          <li><a href="#data-storage">Data Storage</a></li>
          <li><a href="#data-retention">Data Retention Principles</a></li>
          <li><a href="#legal-requests">Legal Requests</a></li>
          <li><a href="#user-rights">User Rights</a></li>
          <li><a href="#international-visitors">International Visitors</a></li>
          <li><a href="#policy-changes">Policy Changes</a></li>
          <li><a href="#contact">Contact</a></li>
        </ol>
      </nav>

      <section className={styles.content}>
        <h2 id="overview">1. Overview</h2>
        <p>The Postmortem operates on the principle that digital privacy is a fundamental right, particularly within the context of investigative journalism. This policy outlines exactly what information our platform collects, how it is secured, and under what circumstances it is deleted. Our infrastructure is designed to collect the minimum viable amount of data required to safely operate the platform and defend against cyber-attacks.</p>
        <p><strong>The Postmortem does not sell personal information.</strong> We do not broker data to third parties, nor do we participate in behavioral ad-tracking networks.</p>

        <h2 id="information-collected">2. Information We Collect</h2>
        <p>We classify the data we collect into two categories: intentional submissions (such as emails or form data you actively send to us) and technical telemetry (such as IP addresses and browser headers automatically transmitted by your device to load our website). We severely restrict the logging of technical telemetry to protect reader anonymity.</p>

        <h2 id="analytics-usage">3. Analytics Usage</h2>
        <p>We utilize privacy-first, anonymized analytics to measure the reach of our investigations. These systems do not track individual users across the web, do not store permanent personal identifiers, and do not construct user profiles. We analyze aggregate trends—such as the total number of readers on an article—without tracking who those specific readers are.</p>

        <h2 id="cookies">4. Cookies</h2>
        <p>The Postmortem limits the use of cookies to essential platform functions. We deploy session cookies strictly to manage administrative authentication and maintain basic site security. We do not deploy third-party tracking cookies, marketing pixels, or cross-site fingerprinting scripts on our platform.</p>

        <h2 id="security-monitoring">5. Security Monitoring</h2>
        <p>As an investigative institution, we face persistent digital threats. To defend our infrastructure, we actively monitor network traffic for malicious activity, including DDoS attacks, brute-force login attempts, and automated scraping. During active cyber-attacks, temporary security logs may record the IP addresses of hostile network requests. These logs are used exclusively for threat mitigation and are systematically purged.</p>

        <h2 id="contact-forms">6. Contact Forms</h2>
        <p>When you utilize our standard contact forms for editorial inquiries or corrections, we collect the name and email address you provide. This information is transmitted over encrypted channels and used solely to respond to your specific inquiry. It is never added to marketing lists or shared externally.</p>

        <h2 id="source-submissions">7. Source Submissions</h2>
        <p>Our standard contact forms are not designed for high-risk whistleblower submissions. Sources transmitting sensitive evidence should refer to our <Link href="/source-protection-protocol">Source Protection Protocol</Link> and utilize our designated secure communication channels (such as encrypted email or SecureDrop) which are purposefully designed to strip metadata and obscure the sender's digital footprint.</p>

        <h2 id="user-communications">8. User Communications</h2>
        <p>All digital communications sent to The Postmortem's editorial team are subject to internal review. We treat the confidentiality of our readers seriously, but standard email is not a secure medium. We advise against sending highly sensitive personal data or unencrypted evidence via standard email infrastructure.</p>

        <h2 id="future-newsletters">9. Future Newsletter Subscriptions</h2>
        <p>Should The Postmortem launch an email newsletter to distribute our investigations, subscription will require explicit, double opt-in consent. The email addresses collected for this purpose will be siloed from our core editorial infrastructure, managed by a secure, privacy-compliant provider, and will never be shared with or sold to third-party advertisers.</p>

        <h2 id="data-storage">10. Data Storage</h2>
        <p>Our platform and associated databases are hosted on secure, modern cloud infrastructure. We implement strict access controls, enforcing multi-factor authentication and principle-of-least-privilege access for all administrative personnel. Sensitive editorial material is stored offline on encrypted, air-gapped hardware.</p>

        <h2 id="data-retention">11. Data Retention Principles</h2>
        <p>We adhere to strict data minimization and retention principles. We keep information only for as long as it is required to fulfill the purpose for which it was collected, or to comply with mandatory legal obligations. Routine administrative and server logs are automatically rotated and permanently deleted on a rolling basis.</p>

        <h2 id="legal-requests">12. Legal Requests</h2>
        <p>The Postmortem is bound by the laws of India. If we receive a legally binding court order or subpoena demanding the release of data, our legal counsel will scrutinize the request. We will aggressively challenge overbroad, unconstitutional, or retaliatory demands for data, particularly those attempting to identify our sources or readers.</p>

        <h2 id="user-rights">13. User Rights</h2>
        <p>Subject to the limitations of journalistic exemption under applicable law, you retain the right to request access to the personal data you have explicitly provided to us, and to request its deletion. To exercise these rights regarding administrative data or newsletter subscriptions, please contact our privacy officer.</p>

        <h2 id="international-visitors">14. International Visitors</h2>
        <p>While our operations and reporting focus on India, our digital platform is accessible globally. If you access our website from outside India, please be aware that your information is processed in accordance with Indian law, which may differ from the privacy regulations in your jurisdiction.</p>

        <h2 id="policy-changes">15. Policy Changes</h2>
        <p>We reserve the right to update this Privacy Policy as our platform infrastructure evolves or legal requirements change. All modifications will be published directly on this page, and the "Last Updated" timestamp will be revised accordingly. We do not reduce your fundamental privacy rights without explicit notice.</p>

        <h2 id="contact">16. Contact</h2>
        <p>For inquiries regarding our data practices, security protocols, or to exercise your privacy rights, please contact our administrative desk through our official communication channels.</p>
      </section>
    </main>
  );
}

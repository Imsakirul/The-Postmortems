import styles from "@/styles/institutional.module.css";
import Link from "next/link";

export const metadata = {
  title: "Funding Disclosure | The Postmortems",
  description: "Transparency regarding our revenue models, editorial firewall, and strict funding policies.",
  alternates: {
    canonical: "https://the-postmortems.vercel.app/funding-disclosure"
  },
  openGraph: {
    title: "Funding Disclosure | The Postmortems",
    description: "Transparency regarding our revenue models, editorial firewall, and strict funding policies.",
    url: "https://the-postmortems.vercel.app/funding-disclosure",
    siteName: "The Postmortems",
    type: "website"
  }
};

export default function FundingDisclosurePage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Funding Disclosure</h1>
        <span className={styles.lastUpdated}>Last Updated: June 24, 2026</span>
      </header>

      <nav className={styles.toc} aria-label="Table of Contents">
        <h2 className={styles.tocTitle}>Contents</h2>
        <ol className={styles.tocList}>
          <li><a href="#why-transparency-matters">Why Funding Transparency Matters</a></li>
          <li><a href="#editorial-independence">Editorial Independence</a></li>
          <li><a href="#editorial-firewall">Editorial Firewall Explanation</a></li>
          <li><a href="#advertising-policy">Advertising Policy</a></li>
          <li><a href="#future-advertising-policy">Future Advertising Policy</a></li>
          <li><a href="#sponsorship-policy">Sponsorship Policy</a></li>
          <li><a href="#future-sponsorship-policy">Future Sponsorship Policy</a></li>
          <li><a href="#donations">Donations</a></li>
          <li><a href="#memberships">Memberships</a></li>
          <li><a href="#grants">Grants</a></li>
          <li><a href="#corporate-funding">Corporate Funding</a></li>
          <li><a href="#political-funding">Political Funding</a></li>
          <li><a href="#conflicts-of-interest">Conflicts of Interest</a></li>
          <li><a href="#financial-conflict-examples">Financial Conflict Examples</a></li>
          <li><a href="#disclosure-standards">Disclosure Standards</a></li>
          <li><a href="#future-funding-commitments">Future Funding Commitments</a></li>
        </ol>
      </nav>

      <section className={styles.content}>
        <h2 id="why-transparency-matters">1. Why Funding Transparency Matters</h2>
        <p>In investigative journalism, the source of funding is as critical as the source of evidence. The public has a fundamental right to know who is financially supporting the institution tasked with informing them. Obscured funding inevitably creates the perception, if not the reality, of hidden agendas.</p>
        <p>At The Postmortems, we treat our financial structure as public information. Our commitment to funding transparency is designed to preemptively dismantle questions regarding the motivations behind our investigations.</p>

        <h2 id="editorial-independence">2. Editorial Independence</h2>
        <p>No sponsor, advertiser, donor, government, political organization, corporation, or private interest may influence our investigative conclusions.</p>
        <p>Financial supporters do not receive advance notice of our publications, they do not possess the authority to review or veto investigations, and they hold no editorial leverage over our reporters. Funding is accepted strictly on the condition of absolute non-interference.</p>

        <h2 id="editorial-firewall">3. Editorial Firewall Explanation</h2>
        <p>The Postmortems maintains a strict, unbreachable firewall between our editorial operations and any revenue-generating activities. Editors and reporters are intentionally isolated from discussions regarding advertising sales, donor outreach, or grant applications. Conversely, personnel involved in securing funding are prohibited from participating in editorial strategy or story selection.</p>

        <h2 id="advertising-policy">4. Advertising Policy</h2>
        <p>Currently, The Postmortems does not rely on programmatic advertising to sustain its core investigative operations. If advertising is utilized, we retain the right to reject any advertisement that conflicts with our core mission, promotes disinformation, or attempts to manipulate public policy under the guise of commercial messaging.</p>

        <h2 id="future-advertising-policy">5. Future Advertising Policy</h2>
        <p>Should The Postmortems expand its advertising model in the future, we will institute a policy of strict contextual separation. Advertisements will be clearly labeled, visually distinct from editorial content, and programmatically excluded from appearing adjacent to investigations involving the advertising entity.</p>

        <h2 id="sponsorship-policy">6. Sponsorship Policy</h2>
        <p>Corporate sponsorships, if accepted, are strictly limited to the underwriting of general operations or specific broad initiatives (e.g., "Data Journalism Desk"). We do not accept sponsored content, native advertising, or paid articles designed to mimic our investigative formats. All sponsorships are explicitly labeled to avoid reader confusion.</p>

        <h2 id="future-sponsorship-policy">7. Future Sponsorship Policy</h2>
        <p>As we scale our operations, any future sponsorship tiers will be published publicly. We will formally publish a roster of all active sponsors, ensuring that any reader can instantly cross-reference our corporate backers with the subjects of our ongoing investigations.</p>

        <h2 id="donations">8. Donations</h2>
        <p>We accept philanthropic donations from individuals who support independent journalism. However, we do not accept donations that are earmarked for the investigation of specific individuals or private disputes. Philanthropic funding must be directed toward the general operational fund or broad thematic desks (e.g., "Environmental Accountability").</p>

        <h2 id="memberships">9. Memberships</h2>
        <p>Our long-term financial stability is built around a reader-supported membership model. We believe that being funded by our readers is the ultimate guarantee of editorial independence. Members provide the financial bedrock that allows our reporters the time and resources necessary to execute complex, long-term investigations.</p>

        <h2 id="grants">10. Grants</h2>
        <p>The Postmortems may apply for and accept grants from non-partisan, non-governmental organizations and philanthropic foundations. Acceptance of any grant requires a written guarantee from the granting institution that they will exert zero influence over the editorial outputs derived from the funded project.</p>

        <h2 id="corporate-funding">11. Corporate Funding</h2>
        <p>Corporate funding is subjected to the highest level of institutional scrutiny. We categorically reject funding from corporations currently under active investigation by our editorial desk, or corporations whose core business practices represent a fundamental conflict with our public-interest mission.</p>

        <h2 id="political-funding">12. Political Funding</h2>
        <p>The Postmortems enforces a strict, zero-tolerance prohibition on funding from political parties, elected officials, active political candidates, or designated Political Action Committees (PACs). We do not accept funding that is routed through proxy organizations designed to obscure political origins.</p>

        <h2 id="conflicts-of-interest">13. Conflicts of Interest</h2>
        <p>Every employee and contractor at The Postmortems is required to disclose any financial relationships, investments, or affiliations that could present a conflict of interest with their reporting. We do not permit our staff to investigate entities in which they hold a direct financial stake.</p>

        <h2 id="financial-conflict-examples">14. Financial Conflict Examples</h2>
        <p>For absolute clarity, we define financial conflicts as including, but not limited to:</p>
        <ul>
          <li>A reporter holding equity in a corporation they are actively investigating.</li>
          <li>An editor accepting compensated speaking engagements from a government agency currently under review.</li>
          <li>A data analyst performing freelance consultancy for a political advocacy group.</li>
        </ul>
        <p>Such conflicts are grounds for immediate reassignment or institutional separation.</p>

        <h2 id="disclosure-standards">15. Disclosure Standards</h2>
        <p>If The Postmortems publishes an investigation that involves an individual, corporation, or foundation that has historically contributed significant funding to our organization, that relationship will be explicitly disclosed within the text of the article itself. We do not hide our disclosures in submenus or separate policy pages; we place them directly alongside the reporting.</p>

        <h2 id="future-funding-commitments">16. Future Funding Commitments</h2>
        <p>As The Postmortems evolves, our funding model will inevitably diversify. Regardless of how our revenue structure changes, our foundational commitment remains immutable: our journalism is never for sale. We will continue to update this disclosure page to reflect new funding mechanisms, ensuring our readers possess a complete, transparent understanding of our financial architecture.</p>
      </section>
    </main>
  );
}

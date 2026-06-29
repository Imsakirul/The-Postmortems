import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to File an RTI | The Postmortems",
  description: "A Citizen's Guide to the Right to Information Act, 2005. Learn how to legally request public records and hold the government accountable.",
};

export default function RTIGuide() {
  return (
    <>
      <section className="section" style={{ borderBottom: "none", paddingTop: "4rem" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          <h1 style={{ fontSize: "2.5rem", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
            HOW TO FILE AN RTI IN INDIA
          </h1>
          <h2 style={{ fontSize: "1.25rem", color: "var(--text-secondary)", marginBottom: "3rem", fontWeight: "normal", fontFamily: "var(--font-ibm-plex-serif), serif" }}>
            A Citizen's Guide to the Right to Information Act, 2005
          </h2>

          <div className="textBlock" style={{ width: "100%", maxWidth: "100%" }}>
            <h3 style={{ color: "var(--text-primary)", marginBottom: "1rem" }}>Introduction</h3>
            <p>The Right to Information (RTI) Act, 2005 is one of the most powerful tools available to citizens of India.</p>
            <p>The law gives every citizen the right to request information from public authorities and government bodies. It was enacted to promote transparency, accountability, and public participation in governance.</p>
            <p>RTI allows citizens to access records, documents, reports, files, expenditure details, decision-making processes, contracts, inspection reports, and other information held by government institutions.</p>
            <p>The purpose of RTI is simple:</p>
            <p style={{ color: "var(--text-primary)", borderLeft: "4px solid var(--text-primary)", paddingLeft: "1rem", fontStyle: "italic" }}>
              Government information belongs to the public unless there is a lawful reason to withhold it.
            </p>

            <hr style={{ margin: "3rem 0", borderColor: "var(--border-color)", borderTop: "1px solid" }} />

            <h2 style={{ color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>What Information Can Be Requested?</h2>
            <p>Citizens may request:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "square", color: "var(--text-secondary)" }}>
              <li>Government records</li>
              <li>File notings</li>
              <li>Official correspondence</li>
              <li>Project reports</li>
              <li>Tender documents</li>
              <li>Budget expenditure details</li>
              <li>Inspection reports</li>
              <li>Audit reports</li>
              <li>Recruitment records</li>
              <li>Welfare scheme implementation details</li>
              <li>Land acquisition records</li>
              <li>Environmental approvals</li>
              <li>Meeting minutes</li>
              <li>Copies of government orders</li>
              <li>Public project status reports</li>
            </ul>

            <p>RTI can be used at:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "square", color: "var(--text-secondary)" }}>
              <li>Central Government departments</li>
              <li>State Government departments</li>
              <li>Municipal corporations</li>
              <li>Panchayats</li>
              <li>Public Sector Undertakings (PSUs)</li>
              <li>Government-funded institutions</li>
              <li>Public universities</li>
              <li>Regulatory authorities</li>
              <li>Statutory bodies</li>
            </ul>

            <hr style={{ margin: "3rem 0", borderColor: "var(--border-color)", borderTop: "1px solid" }} />

            <h2 style={{ color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>What Cannot Normally Be Obtained?</h2>
            <p>Certain categories may be exempt under Sections 8 and 9 of the RTI Act.</p>
            <p>Examples include:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "square", color: "var(--text-secondary)" }}>
              <li>National security information</li>
              <li>Sensitive intelligence operations</li>
              <li>Information affecting ongoing investigations</li>
              <li>Personal information with no public interest justification</li>
              <li>Trade secrets protected by law</li>
              <li>Cabinet papers before decisions are finalized</li>
            </ul>
            <p>However, exemptions are not absolute.</p>
            <p>Where a larger public interest exists, disclosure may still be possible.</p>

            <hr style={{ margin: "3rem 0", borderColor: "var(--border-color)", borderTop: "1px solid" }} />

            <h2 style={{ color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>Before Filing an RTI</h2>
            <p>Ask yourself:</p>
            <ol style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
              <li>Which department likely holds the information?</li>
              <li>What exact documents do you need?</li>
              <li>What date range is relevant?</li>
              <li>Can the request be framed clearly and specifically?</li>
            </ol>
            <p>Good RTI requests seek records.</p>
            <p>Poor RTI requests seek opinions.</p>
            
            <div style={{ backgroundColor: "var(--surface-secondary)", padding: "1.5rem", borderLeft: "4px solid var(--border-color)", margin: "1.5rem 0" }}>
              <p style={{ marginBottom: "0.5rem" }}><strong>Example:</strong></p>
              <p style={{ color: "var(--trust-accent)", marginBottom: "0.5rem" }}><strong>Good:</strong><br/>"Provide copies of inspection reports conducted between January 2025 and December 2025."</p>
              <p style={{ color: "var(--alert-accent)", marginBottom: "0" }}><strong>Poor:</strong><br/>"Why is your department corrupt?"</p>
            </div>

            <hr style={{ margin: "3rem 0", borderColor: "var(--border-color)", borderTop: "1px solid" }} />

            <h2 style={{ color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>Step 1: Identify the Public Authority</h2>
            <p>Determine which authority holds the information.</p>
            <p>Examples:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "square", color: "var(--text-secondary)" }}>
              <li>Road construction → Public Works Department</li>
              <li>School grants → Education Department</li>
              <li>Municipal issues → Municipal Corporation</li>
              <li>Land records → Land Revenue Department</li>
              <li>Police administration → Home Department</li>
            </ul>
            <p>Sending RTIs to the correct authority improves response speed.</p>

            <hr style={{ margin: "3rem 0", borderColor: "var(--border-color)", borderTop: "1px solid" }} />

            <h2 style={{ color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>Step 2: Draft Your RTI Application</h2>
            <p>A simple RTI application may include:</p>
            
            <div style={{ backgroundColor: "var(--surface-secondary)", padding: "2rem", border: "1px solid var(--border-color)", margin: "1.5rem 0", fontFamily: "var(--font-ibm-plex-sans), monospace", fontSize: "0.9rem", color: "var(--text-primary)" }}>
              <p>To:<br/>The Public Information Officer (PIO)</p>
              <p>Subject:<br/>Application under the Right to Information Act, 2005</p>
              <p>Respected Sir/Madam,</p>
              <p>Under the Right to Information Act, 2005, kindly provide the following information:</p>
              <p>1. [Question 1]<br/>2. [Question 2]<br/>3. [Question 3]</p>
              <p>I am an Indian citizen.</p>
              <p>Kindly provide the information in electronic format where available.</p>
              <p>Name:<br/>Address:<br/>Contact Information:</p>
              <p>Date:<br/>Signature</p>
            </div>

            <hr style={{ margin: "3rem 0", borderColor: "var(--border-color)", borderTop: "1px solid" }} />

            <h2 style={{ color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>Step 3: Pay the Application Fee</h2>
            <p>Most RTI applications require a fee.</p>
            <p>Typical fee: <strong style={{ color: "var(--text-primary)" }}>₹10</strong></p>
            <p>Payment methods vary by authority and may include:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "square", color: "var(--text-secondary)" }}>
              <li>Online payment</li>
              <li>Postal Order</li>
              <li>Demand Draft</li>
              <li>Banker's Cheque</li>
            </ul>
            <p>BPL (Below Poverty Line) applicants may be exempt from fees.</p>

            <hr style={{ margin: "3rem 0", borderColor: "var(--border-color)", borderTop: "1px solid" }} />

            <h2 style={{ color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>Step 4: Submit the Application</h2>
            <p>Central Government RTIs may be filed online.</p>
            <p>State governments may provide:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "square", color: "var(--text-secondary)" }}>
              <li>Online portals</li>
              <li>Email submissions</li>
              <li>Physical submission</li>
              <li>Registered post</li>
            </ul>
            <p><strong style={{ color: "var(--text-primary)" }}>Keep copies of all documents submitted.</strong><br/>Always save acknowledgements and payment receipts.</p>

            <hr style={{ margin: "3rem 0", borderColor: "var(--border-color)", borderTop: "1px solid" }} />

            <h2 style={{ color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>Step 5: Wait for the Response</h2>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "square", color: "var(--text-secondary)" }}>
              <li>Normal response period: <strong style={{ color: "var(--text-primary)" }}>30 days</strong></li>
              <li>Life and liberty matters: <strong style={{ color: "var(--text-primary)" }}>48 hours</strong></li>
              <li>Transferred applications: <strong style={{ color: "var(--text-primary)" }}>Additional time may apply.</strong></li>
            </ul>
            <p>Failure to respond within the statutory period can be treated as a deemed refusal.</p>

            <hr style={{ margin: "3rem 0", borderColor: "var(--border-color)", borderTop: "1px solid" }} />

            <h2 style={{ color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>Step 6: First Appeal</h2>
            <p>If:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "square", color: "var(--text-secondary)" }}>
              <li>No response is received</li>
              <li>Information is incomplete</li>
              <li>Information is wrongly denied</li>
            </ul>
            <p>You may file a First Appeal.</p>
            <p>The appeal is submitted to the First Appellate Authority (FAA), generally within 30 days.</p>
            <p>Include:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "square", color: "var(--text-secondary)" }}>
              <li>Original RTI copy</li>
              <li>Response received (if any)</li>
              <li>Grounds for appeal</li>
            </ul>

            <hr style={{ margin: "3rem 0", borderColor: "var(--border-color)", borderTop: "1px solid" }} />

            <h2 style={{ color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>Step 7: Second Appeal</h2>
            <p>If dissatisfied after the First Appeal:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "square", color: "var(--text-secondary)" }}>
              <li>Central Government: <strong style={{ color: "var(--text-primary)" }}>Central Information Commission (CIC)</strong></li>
              <li>State Government: <strong style={{ color: "var(--text-primary)" }}>Relevant State Information Commission</strong></li>
            </ul>
            <p>The Commission may order disclosure and impose penalties on officials where appropriate.</p>

            <hr style={{ margin: "3rem 0", borderColor: "var(--border-color)", borderTop: "1px solid" }} />

            <h2 style={{ color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>RTI Best Practices</h2>
            <p>Always:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "square", color: "var(--trust-accent)" }}>
              <li><span style={{ color: "var(--text-secondary)" }}>Request documents, not opinions.</span></li>
              <li><span style={{ color: "var(--text-secondary)" }}>Ask specific questions.</span></li>
              <li><span style={{ color: "var(--text-secondary)" }}>Use clear date ranges.</span></li>
              <li><span style={{ color: "var(--text-secondary)" }}>Avoid emotional language.</span></li>
              <li><span style={{ color: "var(--text-secondary)" }}>Keep requests concise.</span></li>
              <li><span style={{ color: "var(--text-secondary)" }}>Maintain records of all correspondence.</span></li>
            </ul>

            <hr style={{ margin: "3rem 0", borderColor: "var(--border-color)", borderTop: "1px solid" }} />

            <h2 style={{ color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>Common Mistakes</h2>
            <p>Avoid:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "square", color: "var(--alert-accent)" }}>
              <li><span style={{ color: "var(--text-secondary)" }}>Asking "why" questions.</span></li>
              <li><span style={{ color: "var(--text-secondary)" }}>Requesting explanations.</span></li>
              <li><span style={{ color: "var(--text-secondary)" }}>Filing extremely broad requests.</span></li>
              <li><span style={{ color: "var(--text-secondary)" }}>Using abusive language.</span></li>
              <li><span style={{ color: "var(--text-secondary)" }}>Submitting multiple unrelated subjects in one application.</span></li>
            </ul>

            <hr style={{ margin: "3rem 0", borderColor: "var(--border-color)", borderTop: "1px solid" }} />

            <h2 style={{ color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>RTI and Investigative Journalism</h2>
            <p>RTI is one of the most effective tools for public-interest investigations.</p>
            <p>Many major investigations involving public spending, procurement, infrastructure projects, recruitment processes, environmental compliance, and governance failures have relied on information obtained through RTI requests.</p>
            <p style={{ fontWeight: "bold", color: "var(--text-primary)", margin: "2rem 0", fontSize: "1.25rem", lineHeight: "1.6" }}>
              Evidence strengthens accountability.<br/>
              Documentation strengthens reporting.<br/>
              Transparency strengthens democracy.
            </p>
            
            <div style={{ marginTop: "2rem" }}>
              <Link href="/submit" className="btn">Submit Evidence to Us Securely</Link>
            </div>

            <hr style={{ margin: "3rem 0", borderColor: "var(--border-color)", borderTop: "1px solid" }} />

            <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
              <h3 style={{ color: "var(--text-secondary)", marginBottom: "0.5rem", fontSize: "1rem" }}>Disclaimer</h3>
              <p>This guide is provided for educational and informational purposes only.</p>
              <p>It does not constitute legal advice.</p>
              <p>Procedures, fees, and filing methods may vary depending on the public authority and jurisdiction.</p>
              <p>Citizens should consult official government RTI portals and applicable regulations before filing requests.</p>
              <br/>
              <p>Last Updated: June 2026<br/><strong style={{ color: "var(--text-primary)", fontStyle: "normal" }}>The Postmortems</strong><br/>Investigate. Verify. Reveal.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function AdminTipsPage() {
  const tips = await prisma.whistleblowerSubmission.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div style={{ padding: "2rem" }}>
      <header style={{ marginBottom: "2rem", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
        <h1 style={{ fontSize: "2rem", fontFamily: "var(--font-ibm-plex-serif)", color: "var(--foreground)", marginBottom: "0.5rem" }}>Secure Submissions</h1>
        <p style={{ color: "var(--foreground-muted)" }}>Raw evidence and tips received from the public portal.</p>
      </header>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {tips.map((tip: any) => {
          let files = [];
          if (tip.encryptedFileUrls) {
            try {
              files = JSON.parse(tip.encryptedFileUrls);
            } catch(e) {}
          }

          return (
            <div key={tip.id} style={{ padding: "1.5rem", backgroundColor: "var(--background-alt)", border: "1px solid var(--border)", borderRadius: "4px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem", borderBottom: "1px solid #333", paddingBottom: "1rem" }}>
                <div>
                  <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--foreground-muted)", display: "block", marginBottom: "0.25rem" }}>Tracking ID</span>
                  <span style={{ fontFamily: "monospace", color: "var(--accent)", fontSize: "1.1rem" }}>{tip.secureId}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--foreground-muted)", display: "block", marginBottom: "0.25rem" }}>Received At</span>
                  <span style={{ fontSize: "0.9rem", color: "var(--foreground)" }}>{tip.createdAt.toLocaleString()}</span>
                </div>
              </div>
              
              <div style={{ padding: "1.5rem", backgroundColor: "var(--background)", border: "1px solid #333", whiteSpace: "pre-wrap", fontFamily: "var(--font-ibm-plex-sans)", fontSize: "1rem", color: "var(--foreground)", lineHeight: "1.6" }}>
                {tip.encryptedContent}
              </div>

              {files.length > 0 && (
                <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px dashed var(--border)" }}>
                  <strong style={{ display: "block", marginBottom: "0.5rem", color: "var(--foreground-muted)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.05em" }}>Attached Evidence</strong>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    {files.map((url: string, i: number) => (
                      <a key={i} href={url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "0.5rem 1rem", backgroundColor: "rgba(0,200,83,0.1)", color: "var(--accent)", border: "1px solid var(--accent)", borderRadius: "2px", textDecoration: "none", fontSize: "0.85rem" }}>
                        View Attachment {i + 1} &rarr;
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {tips.length === 0 && (
          <div style={{ padding: "3rem", textAlign: "center", border: "1px dashed var(--border)", color: "var(--foreground-muted)" }}>
            No submissions received yet.
          </div>
        )}
      </div>
    </div>
  );
}

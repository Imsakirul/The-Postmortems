import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function AdminInvestigations() {
  const investigations = await prisma.investigation.findMany({
    orderBy: { updatedAt: "desc" },
    include: { author: true }
  });

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem" }}>Investigations</h1>
        <Link href="/admin/investigations/new" className="btn btn-primary">+ New Investigation</Link>
      </div>

      <div style={{ backgroundColor: "var(--background-alt)", border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)", backgroundColor: "var(--background)" }}>
              <th style={{ padding: "1rem", textAlign: "left" }}>Title</th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Status</th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Author</th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Last Updated</th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {investigations.map((inv: any) => (
              <tr key={inv.id} style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "1rem" }}>{inv.title}</td>
                <td style={{ padding: "1rem" }}>
                  <span style={{ 
                    padding: "0.25rem 0.5rem", 
                    borderRadius: "4px", 
                    fontSize: "0.875rem",
                    backgroundColor: inv.status === "PUBLISHED" ? "var(--background)" : "var(--border)",
                    color: inv.status === "PUBLISHED" ? "var(--accent)" : "var(--foreground-muted)"
                  }}>
                    {inv.status}
                  </span>
                </td>
                <td style={{ padding: "1rem" }}>{inv.author.name}</td>
                <td style={{ padding: "1rem" }}>{inv.updatedAt.toLocaleDateString()}</td>
                <td style={{ padding: "1rem" }}>
                  <Link href={`/admin/investigations/${inv.id}`} style={{ color: "var(--accent)", textDecoration: "underline" }}>Edit</Link>
                </td>
              </tr>
            ))}
            {investigations.length === 0 && (
              <tr>
                <td colSpan={5} style={{ padding: "2rem", textAlign: "center", color: "var(--foreground-muted)" }}>
                  No investigations found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

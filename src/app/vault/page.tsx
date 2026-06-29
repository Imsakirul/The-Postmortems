import Link from "next/link";
import styles from "./page.module.css";

const mockDocuments = [
  {
    id: "EXH-A01",
    title: "Urban Development Budget Allocation (2025)",
    type: "RTI Response",
    date: "2026-01-15",
    investigation: "Operation Shadow Ledger",
  },
  {
    id: "EXH-A02",
    title: "Shell Company Incorporation Certificates",
    type: "Corporate Registry",
    date: "2026-02-03",
    investigation: "Operation Shadow Ledger",
  },
  {
    id: "EXH-B14",
    title: "Sentencing Algorithm Source Code Excerpt",
    type: "Leaked Source",
    date: "2025-11-22",
    investigation: "The Silicon Veil",
  },
  {
    id: "EXH-C09",
    title: "Phantom Clinic Geographic Coordinates Data",
    type: "GIS Audit",
    date: "2026-03-01",
    investigation: "Phantom Hospitals",
  },
];

export const metadata = {
  title: "Evidence Vault | The Postmortems",
  description: "Public repository of primary source documents used in our investigations.",
};

export default function VaultPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Evidence Vault</h1>
        <p className={styles.subtitle}>
          We do not ask you to trust us. We ask you to read the primary sources. This vault contains the unedited, raw documentation underlying every investigation we publish.
        </p>
      </header>

      <div className={styles.controls}>
        <input 
          type="text" 
          placeholder="Search by Exhibit ID, Title, or Keyword..." 
          className={styles.search} 
        />
        <button className={styles.filter}>Filter by Investigation</button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Exhibit ID</th>
              <th>Document Title</th>
              <th>Classification</th>
              <th>Date Acquired</th>
              <th>Related Investigation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mockDocuments.map((doc) => (
              <tr key={doc.id}>
                <td className={styles.docId}>{doc.id}</td>
                <td className={styles.docTitle}>{doc.title}</td>
                <td>{doc.type}</td>
                <td>{doc.date}</td>
                <td>{doc.investigation}</td>
                <td>
                  <Link href="#" className={styles.actionBtn}>Examine</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

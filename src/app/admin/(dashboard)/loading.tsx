export default function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <div style={{ width: "40px", height: "40px", border: "4px solid var(--border-color)", borderTopColor: "var(--trust-accent)", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
        <p style={{ color: "var(--text-primary)", opacity: 0.7 }}>Loading Dashboard...</p>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}

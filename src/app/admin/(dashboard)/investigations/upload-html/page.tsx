"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadHtmlPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setError("");
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please select an HTML file to upload.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/investigations/upload-html", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to upload file");
      }

      router.push("/admin/investigations");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Upload HTML Investigation</h1>
      
      <p style={{ color: "var(--foreground-muted)", marginBottom: "2rem" }}>
        Upload a generated HTML file. It will be parsed and immediately published to the Investigation Feed.
      </p>

      {error && (
        <div style={{ padding: "1rem", backgroundColor: "var(--red-faint, #200808)", border: "1px solid var(--red, #CC2C2C)", color: "var(--red, #CC2C2C)", marginBottom: "1.5rem", borderRadius: "4px" }}>
          {error}
        </div>
      )}

      <form onSubmit={handleUpload}>
        <div style={{ marginBottom: "2rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>
            Select HTML File
          </label>
          <input 
            key={file ? "has-file" : "no-file"}
            type="file" 
            accept=".html" 
            onChange={handleFileChange}
            style={{ 
              display: "block", 
              width: "100%", 
              padding: "1rem", 
              border: "2px dashed var(--border)", 
              borderRadius: "8px",
              backgroundColor: "var(--background-alt)",
              cursor: "pointer"
            }}
          />
          {file && (
            <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "1rem", backgroundColor: "var(--background)", padding: "1rem", borderRadius: "8px", border: "1px solid var(--border)" }}>
              <p style={{ color: "var(--green, #00B85A)", fontSize: "1rem", fontWeight: "bold", flex: 1 }}>
                Selected: {file.name}
              </p>
              <button 
                type="button" 
                onClick={() => setFile(null)} 
                style={{ padding: "0.5rem 1rem", backgroundColor: "var(--red-faint, #200808)", border: "1px solid var(--red, #CC2C2C)", color: "var(--red, #CC2C2C)", borderRadius: "4px", cursor: "pointer", fontSize: "0.875rem", fontWeight: "bold" }}
              >
                Clear File
              </button>
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button 
            type="submit" 
            disabled={!file || loading}
            style={{ 
              padding: "0.75rem 2rem", 
              backgroundColor: (!file || loading) ? "var(--background-alt)" : "var(--green, #00B85A)", 
              color: (!file || loading) ? "var(--foreground-muted)" : "white", 
              border: (!file || loading) ? "1px solid var(--border)" : "none", 
              borderRadius: "4px", 
              cursor: (!file || loading) ? "not-allowed" : "pointer",
              fontWeight: "bold",
              fontSize: "1.1rem"
            }}
          >
            {loading ? "Uploading..." : "Upload & Publish"}
          </button>
          
          <button 
            type="button" 
            onClick={() => router.push("/admin/investigations")}
            style={{ 
              padding: "0.75rem 1.5rem", 
              backgroundColor: "transparent", 
              color: "var(--foreground)", 
              border: "1px solid var(--border)", 
              borderRadius: "4px", 
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TipTapEditor from "@/components/TipTapEditor";

export default function NewInvestigation() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [status, setStatus] = useState("DRAFT");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", { method: "POST", body: formData });
    const data = await res.json();
    if (data.url) setFeaturedImage(data.url);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = { title, excerpt, content, featuredImage, status };

    try {
      const res = await fetch("/api/investigations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        router.push(`/admin/investigations/${data.id}`);
        router.refresh();
      } else {
        alert("Failed to save");
      }
    } catch (error) {
      console.error(error);
      alert("Error saving");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Create Investigation</h1>
      
      <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required
            style={{ width: "100%", padding: "0.75rem", background: "var(--background-alt)", border: "1px solid var(--border)", color: "var(--foreground)", borderRadius: "4px" }} 
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Excerpt (Subtitle)</label>
          <textarea 
            value={excerpt} 
            onChange={(e) => setExcerpt(e.target.value)} 
            rows={3}
            style={{ width: "100%", padding: "0.75rem", background: "var(--background-alt)", border: "1px solid var(--border)", color: "var(--foreground)", borderRadius: "4px" }} 
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Featured Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "block", marginBottom: "0.5rem" }} />
          {featuredImage && <img src={featuredImage} alt="Featured" style={{ maxWidth: "100%", maxHeight: "200px", borderRadius: "4px" }} />}
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Content</label>
          <TipTapEditor content={content} onChange={setContent} />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Status</label>
          <select 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
            style={{ width: "100%", padding: "0.75rem", background: "var(--background-alt)", border: "1px solid var(--border)", color: "var(--foreground)", borderRadius: "4px" }}
          >
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
          </select>
        </div>

        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <button type="submit" disabled={loading} className="btn btn-primary" style={{ flex: 1 }}>
            {loading ? "Saving..." : "Save Investigation"}
          </button>
          <button type="button" onClick={() => router.back()} className="btn" style={{ flex: 1 }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import TipTapEditor from "@/components/TipTapEditor";

export default function EditInvestigation() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [investigationCode, setInvestigationCode] = useState("");
  const [metaTags, setMetaTags] = useState("");
  const [status, setStatus] = useState("DRAFT");
  const [wasStatus, setWasStatus] = useState("DRAFT");
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    fetch(`/api/investigations/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setTitle(data.title || "");
          setSlug(data.slug || "");
          setExcerpt(data.excerpt || "");
          setContent(data.content || "");
          setFeaturedImage(data.featuredImage || "");
          setInvestigationCode(data.investigationCode || "");
          setMetaTags(data.metaTags || "");
          setStatus(data.status || "DRAFT");
          setWasStatus(data.status || "DRAFT");
        }
      })
      .finally(() => setInitialLoading(false));
  }, [id]);

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

    const payload = { title, slug, excerpt, content, featuredImage, investigationCode, metaTags, status, wasStatus };

    try {
      const res = await fetch(`/api/investigations/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSaveMessage("Investigation updated successfully!");
        setTimeout(() => setSaveMessage(""), 3000);
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

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this investigation?")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/investigations/${id}`, { method: "DELETE" });
      if (res.ok) {
        router.push("/admin/investigations");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (initialLoading) return <div style={{ padding: "2rem" }}>Loading...</div>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <h1 style={{ fontSize: "2rem" }}>Edit Investigation</h1>
          {status === "PUBLISHED" && slug && (
            <Link href={`/investigations/${slug}`} target="_blank" className="btn btn-primary" style={{ padding: "0.25rem 0.75rem", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              View Live ↗
            </Link>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {saveMessage && <span style={{ color: "green", fontSize: "0.875rem", fontWeight: "bold" }}>{saveMessage}</span>}
          <button onClick={handleDelete} className="btn" style={{ borderColor: "var(--alert-accent)", color: "var(--alert-accent)" }}>
            Delete
          </button>
        </div>
      </div>
      
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
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Slug</label>
          <input 
            type="text" 
            value={slug} 
            onChange={(e) => setSlug(e.target.value)} 
            required
            style={{ width: "100%", padding: "0.75rem", background: "var(--background-alt)", border: "1px solid var(--border)", color: "var(--foreground)", borderRadius: "4px" }} 
          />
        </div>
        
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Investigation Code (optional)</label>
          <input 
            type="text" 
            value={investigationCode} 
            onChange={(e) => setInvestigationCode(e.target.value)} 
            placeholder="e.g. A31D2"
            style={{ width: "100%", padding: "0.75rem", background: "var(--background-alt)", border: "1px solid var(--border)", color: "var(--foreground)", borderRadius: "4px" }} 
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Meta Tags (comma separated)</label>
          <input 
            type="text" 
            value={metaTags} 
            onChange={(e) => setMetaTags(e.target.value)} 
            placeholder="e.g. corruption, health, NTA"
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
            {loading ? "Saving..." : "Update Investigation"}
          </button>
          <button type="button" onClick={() => router.back()} className="btn" style={{ flex: 1 }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

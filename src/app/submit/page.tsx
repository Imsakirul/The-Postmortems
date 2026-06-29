"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function SubmitTipPage() {
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [secureId, setSecureId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) {
      setError("Please provide details of your tip.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      let uploadedFileUrl = null;

      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (uploadRes.ok) {
          const data = await uploadRes.json();
          uploadedFileUrl = data.url;
        } else {
          throw new Error("File upload failed.");
        }
      }

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content,
          fileUrl: uploadedFileUrl
        }),
      });

      if (!res.ok) throw new Error("Submission failed. Please try again.");

      const data = await res.json();
      setSecureId(data.secureId);
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (secureId) {
    return (
      <main className={styles.container}>
        <div className={styles.successBox}>
          <h2>Submission Received</h2>
          <p>Your evidence has been securely transmitted to our investigative team.</p>
          <div className={styles.secureIdBox}>
            {secureId}
          </div>
          <p>Please save this Tracking ID. You can use it in the future to follow up on your submission.</p>
          <br />
          <Link href="/" className="btn btn-primary">Return Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Secure Submission</h1>
        <p className={styles.subtitle}>
          Use this form to securely send evidence, documents, or tips to The Postmortems.
        </p>
      </header>

      <div className={styles.warningBox}>
        <h3>Security Notice</h3>
        <p>• Do not submit this form using a device provided by your employer.</p>
        <p>• Do not use your corporate or government network to submit.</p>
        <p>• For maximum security, consider using the Tor Browser.</p>
      </div>

      {error && (
        <div style={{ color: "var(--alert-accent)", marginBottom: "1rem" }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>What do we need to know?</label>
          <textarea 
            className={styles.textarea}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Describe the issue, who is involved, and what evidence you have..."
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Attach Evidence (Optional)</label>
          <input 
            type="file" 
            className={styles.fileInput}
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            Supported formats: PDF, JPG, PNG. Ensure metadata is stripped if you require absolute anonymity.
          </p>
        </div>

        <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isSubmitting}>
          {isSubmitting ? "TRANSMITTING..." : "SUBMIT EVIDENCE SECURELY"}
        </button>
      </form>
    </main>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Failed to process request");
      }

      router.push(`/admin/reset-password?email=${encodeURIComponent(email)}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--background-alt)" }}>
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px", padding: "2rem", backgroundColor: "var(--background)", border: "1px solid var(--border)", borderRadius: "8px" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem", textAlign: "center", color: "var(--foreground)" }}>Reset Password</h1>
        <p style={{ textAlign: "center", color: "var(--foreground-muted)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>Enter your registered admin email to receive a One-Time Password.</p>
        
        {error && <div style={{ color: "var(--alert-accent)", marginBottom: "1rem", fontSize: "0.875rem", textAlign: "center" }}>{error}</div>}
        
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            style={{ width: "100%", padding: "0.75rem", backgroundColor: "var(--background-alt)", border: "1px solid var(--border)", color: "var(--foreground)", borderRadius: "4px" }} 
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="btn btn-primary"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>

        <div style={{ textAlign: "center" }}>
          <Link href="/admin/login" style={{ fontSize: "0.875rem", color: "var(--foreground-muted)", textDecoration: "none" }}>&larr; Back to Login</Link>
        </div>
      </form>
    </div>
  );
}

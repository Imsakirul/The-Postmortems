"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      let data;
      try {
        data = await res.json();
      } catch (e) {
        throw new Error("Server returned an invalid response. Check if your database is running and connected.");
      }

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--background-alt)" }}>
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px", padding: "2rem", backgroundColor: "var(--background)", border: "1px solid var(--border)", borderRadius: "8px" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center", color: "var(--foreground)" }}>Admin Login</h1>
        
        {error && <div style={{ color: "var(--alert-accent)", marginBottom: "1rem", fontSize: "0.875rem", textAlign: "center" }}>{error}</div>}
        
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            style={{ width: "100%", padding: "0.75rem", backgroundColor: "var(--background-alt)", border: "1px solid var(--border)", color: "var(--foreground)", borderRadius: "4px" }} 
          />
        </div>
        
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
            <label style={{ fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Password</label>
            <a href="/admin/forgot-password" style={{ fontSize: "0.875rem", color: "var(--accent)", textDecoration: "none" }}>Forgot Password?</a>
          </div>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            style={{ width: "100%", padding: "0.75rem", backgroundColor: "var(--background-alt)", border: "1px solid var(--border)", color: "var(--foreground)", borderRadius: "4px" }} 
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="btn btn-primary"
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
        >
          <User size={18} />
          {loading ? "Authenticating..." : "Login"}
        </button>
      </form>
    </div>
  );
}

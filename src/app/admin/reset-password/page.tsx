"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialEmail = searchParams.get("email") || "";

  const [email, setEmail] = useState(initialEmail);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to reset password");
      }

      setSuccess(true);
      setTimeout(() => {
        router.push("/admin/login");
      }, 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--background-alt)" }}>
        <div style={{ width: "100%", maxWidth: "400px", padding: "2rem", backgroundColor: "var(--background)", border: "1px solid var(--trust-accent)", borderRadius: "8px", textAlign: "center" }}>
          <h2 style={{ color: "var(--trust-accent)", marginBottom: "1rem" }}>Password Reset!</h2>
          <p style={{ color: "var(--foreground-muted)" }}>Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--background-alt)" }}>
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px", padding: "2rem", backgroundColor: "var(--background)", border: "1px solid var(--border)", borderRadius: "8px" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem", textAlign: "center", color: "var(--foreground)" }}>Enter OTP</h1>
        <p style={{ textAlign: "center", color: "var(--foreground-muted)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>Check your email (and terminal logs) for the 6-digit code.</p>
        
        {error && <div style={{ color: "var(--alert-accent)", marginBottom: "1rem", fontSize: "0.875rem", textAlign: "center" }}>{error}</div>}
        
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem", color: "var(--foreground-muted)" }}>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            readOnly={!!initialEmail}
            style={{ width: "100%", padding: "0.75rem", backgroundColor: "var(--background-alt)", border: "1px solid var(--border)", color: "var(--foreground)", borderRadius: "4px" }} 
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem", color: "var(--foreground-muted)" }}>6-Digit OTP</label>
          <input 
            type="text" 
            value={otp} 
            onChange={(e) => setOtp(e.target.value)} 
            required
            maxLength={6}
            style={{ width: "100%", padding: "0.75rem", backgroundColor: "var(--background-alt)", border: "1px solid var(--border)", color: "var(--foreground)", borderRadius: "4px", letterSpacing: "0.5em", textAlign: "center", fontFamily: "monospace" }} 
          />
        </div>
        
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem", color: "var(--foreground-muted)" }}>New Password</label>
          <input 
            type="password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
            required
            minLength={8}
            style={{ width: "100%", padding: "0.75rem", backgroundColor: "var(--background-alt)", border: "1px solid var(--border)", color: "var(--foreground)", borderRadius: "4px" }} 
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          {loading ? "Verifying..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--background-alt)", color: "var(--foreground)" }}>Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}

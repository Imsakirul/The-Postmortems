"use client";

import { useState } from "react";
import styles from "@/app/admin/(dashboard)/layout.module.css";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (res.ok) {
        alert("Logged out successfully");
        // Use window.location to force a hard reload and let middleware do the routing if needed,
        // but explicit redirect to /admin/login is best.
        window.location.href = "/admin/login";
      } else {
        alert("Failed to log out");
        setIsLoggingOut(false);
      }
    } catch (err) {
      alert("Failed to log out");
      setIsLoggingOut(false);
    }
  };

  return (
    <button 
      className={styles.logoutBtn} 
      onClick={handleLogout} 
      disabled={isLoggingOut}
      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
    >
      <LogOut size={16} />
      {isLoggingOut ? "Logging out..." : "Log Out"}
    </button>
  );
}

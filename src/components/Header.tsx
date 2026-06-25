"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <a href="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
          <span className={styles.title}>THE POSTMORTEM</span>
          <span className={styles.tagline}>Investigate. Verify. Reveal.</span>
        </a>
        
        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <Link href="/investigations" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Investigations</Link>
          <Link href="/vault" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Evidence Vault</Link>
          <Link href="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/submit" className={`${styles.navLink} text-alert`} onClick={() => setIsMenuOpen(false)}>Report to Us</Link>
        </nav>
      </div>
    </header>
  );
}

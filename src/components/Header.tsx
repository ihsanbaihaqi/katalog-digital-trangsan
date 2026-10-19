"use client";

import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Peta Desa", href: "#peta" },
  { label: "Katalog Bangunan", href: "#katalog" },
  { label: "Tentang", href: "#tentang" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "var(--green-dark)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo / Identity */}
        <a
          href="#beranda"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#beranda");
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: "var(--green-light)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <MapPin size={20} color="white" strokeWidth={2} />
          </div>
          <div>
            <div
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: "0.95rem",
                lineHeight: 1.2,
              }}
            >
              Katalog Digital
            </div>
            <div
              style={{
                color: "var(--green-light)",
                fontSize: "0.75rem",
                fontWeight: 500,
              }}
            >
              Desa Trangsan
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{ display: "flex", gap: "0.25rem" }}
          aria-label="Navigasi utama"
          className="hidden-mobile"
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.85)",
                cursor: "pointer",
                padding: "0.5rem 0.85rem",
                borderRadius: "6px",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  "rgba(255,255,255,0.12)";
                (e.target as HTMLButtonElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  "transparent";
                (e.target as HTMLButtonElement).style.color =
                  "rgba(255,255,255,0.85)";
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            padding: "0.5rem",
            borderRadius: "6px",
            display: "none",
          }}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          className="show-mobile"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          style={{
            backgroundColor: "var(--green-dark)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "0.75rem 1.25rem 1rem",
          }}
          aria-label="Navigasi mobile"
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              style={{
                display: "block",
                width: "100%",
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.9)",
                cursor: "pointer",
                padding: "0.75rem 0.5rem",
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: 500,
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

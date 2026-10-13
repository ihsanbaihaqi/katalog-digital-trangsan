"use client";

import { useState, useEffect } from "react";
import { MapPin, Heart } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState(2025);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      style={{
        backgroundColor: "var(--green-dark)",
        color: "rgba(255,255,255,0.75)",
        padding: "3rem 1.25rem 2rem",
      }}
      aria-label="Footer"
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "2rem",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: "320px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.85rem",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  backgroundColor: "var(--green-light)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MapPin size={18} color="white" strokeWidth={2} />
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 700, fontSize: "0.95rem" }}>
                  Katalog Digital
                </div>
                <div style={{ color: "var(--green-light)", fontSize: "0.75rem" }}>
                  Desa Trangsan
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.6)",
                margin: 0,
              }}
            >
              Platform informasi digital yang menyediakan akses mudah ke data
              bangunan dan fasilitas Desa Trangsan.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Navigasi footer">
            <h4
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: "0.875rem",
                marginBottom: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Navigasi
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "Beranda", href: "#beranda" },
                { label: "Peta Desa", href: "#peta" },
                { label: "Katalog Bangunan", href: "#katalog" },
                { label: "Tentang", href: "#tentang" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(255,255,255,0.65)";
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p style={{ fontSize: "0.8rem", margin: 0, color: "rgba(255,255,255,0.45)" }}>
            © {year} Katalog Digital Desa Trangsan. Hak cipta dilindungi.
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              margin: 0,
              color: "rgba(255,255,255,0.45)",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            Dibuat dengan <Heart size={12} color="#52b788" /> untuk Desa Trangsan
          </p>
        </div>
      </div>
    </footer>
  );
}

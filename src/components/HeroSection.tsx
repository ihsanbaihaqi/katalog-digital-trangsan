"use client";

import { ArrowRight, Map } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="beranda"
      style={{
        background:
          "linear-gradient(160deg, var(--green-dark) 0%, var(--green-primary) 60%, #3a7d5e 100%)",
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        padding: "5rem 1.25rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Beranda"
    >
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-60px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.03)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* Text content */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.9)",
              borderRadius: "100px",
              padding: "0.35rem 0.85rem",
              fontSize: "0.8rem",
              fontWeight: 600,
              marginBottom: "1.5rem",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "var(--green-light)",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            Katalog Digital Desa
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Jelajahi Desa{" "}
            <span style={{ color: "var(--green-light)" }}>Trangsan</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "480px",
            }}
          >
            Temukan lokasi, bangunan, dan informasi penting di Desa Trangsan
            dalam satu platform digital yang mudah diakses.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("katalog")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "white",
                color: "var(--green-dark)",
                border: "none",
                padding: "0.85rem 1.75rem",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
                transition: "transform 0.15s, box-shadow 0.15s",
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 8px 25px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 15px rgba(0,0,0,0.15)";
              }}
              aria-label="Jelajahi katalog bangunan"
            >
              Jelajahi Katalog
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollTo("peta")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid rgba(255,255,255,0.4)",
                padding: "0.85rem 1.75rem",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                transition: "border-color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(255,255,255,0.8)";
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(255,255,255,0.4)";
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "transparent";
              }}
              aria-label="Lihat peta desa"
            >
              <Map size={18} />
              Lihat Peta
            </button>
          </div>
        </div>

        {/* Visual placeholder */}
        <div className="hero-visual" style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
              aspectRatio: "4/3",
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              gap: "1rem",
            }}
          >
            {/* Simple village icon SVG */}
            <svg
              width="100"
              height="80"
              viewBox="0 0 100 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Mountains */}
              <path
                d="M0 70 L20 35 L40 70Z"
                fill="rgba(255,255,255,0.15)"
              />
              <path
                d="M25 70 L50 25 L75 70Z"
                fill="rgba(255,255,255,0.2)"
              />
              <path
                d="M55 70 L80 40 L100 70Z"
                fill="rgba(255,255,255,0.12)"
              />
              {/* Ground */}
              <rect x="0" y="68" width="100" height="4" fill="rgba(255,255,255,0.1)" rx="2" />
              {/* House */}
              <rect x="40" y="52" width="20" height="18" fill="rgba(255,255,255,0.25)" rx="2" />
              <path d="M37 54 L50 44 L63 54Z" fill="rgba(255,255,255,0.35)" />
              <rect x="47" y="60" width="6" height="10" fill="rgba(255,255,255,0.15)" rx="1" />
              {/* Sun */}
              <circle cx="80" cy="18" r="8" fill="rgba(255,255,255,0.2)" />
            </svg>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.75rem",
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              Ilustrasi akan diperbarui
              <br />dengan foto asli desa
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hero-visual {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}

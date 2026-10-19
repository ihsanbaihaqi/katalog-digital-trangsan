"use client";

import { ArrowRight, Map } from "lucide-react";
import Image from "next/image";

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

        {/* Foto Desa Asli */}
        <div className="hero-visual" style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
              aspectRatio: "4/3",
              borderRadius: "20px",
              overflow: "hidden",
              border: "3px solid rgba(255,255,255,0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              position: "relative",
            }}
          >
            <Image
              src="/images/foto-desa-asli.jpg"
              alt="Foto asli Desa Trangsan"
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="(max-width: 768px) 100vw, 420px"
            />
            {/* Caption overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.55))",
                padding: "1.5rem 1rem 0.75rem",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  margin: 0,
                  textAlign: "center",
                  letterSpacing: "0.03em",
                }}
              >
                📍 Desa Trangsan
              </p>
            </div>
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

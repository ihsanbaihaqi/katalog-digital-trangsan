"use client";

import { useState } from "react";
import { MapPin, Maximize2, X } from "lucide-react";
import Image from "next/image";

export default function MapSection() {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <section
      id="peta"
      style={{
        backgroundColor: "var(--cream)",
        padding: "5rem 1.25rem",
      }}
      aria-label="Peta Desa"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--green-primary)",
              fontWeight: 600,
              fontSize: "0.85rem",
              marginBottom: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            <MapPin size={16} />
            Peta Desa
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.25rem)",
              fontWeight: 800,
              color: "var(--green-dark)",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Peta Desa Trangsan
          </h2>
          <p
            style={{
              color: "#666",
              fontSize: "1.05rem",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Temukan lokasi bangunan dan fasilitas desa secara visual.
          </p>
        </div>

        {/* Map image card */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          {/* Image container */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/10",
              backgroundColor: "#e8f4f0",
              cursor: "zoom-in",
            }}
            onClick={() => setFullscreen(true)}
            role="button"
            aria-label="Perbesar peta desa"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setFullscreen(true)}
          >
            <Image
              src="/images/peta-desa.jpg"
              alt="Peta Desa Trangsan"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
            {/* Zoom hint */}
            <div
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "white",
                borderRadius: "8px",
                padding: "0.4rem 0.75rem",
                fontSize: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                pointerEvents: "none",
              }}
            >
              <Maximize2 size={13} />
              Klik untuk perbesar
            </div>
          </div>

          {/* Info bar */}
          <div
            style={{
              padding: "1rem 1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              borderTop: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <MapPin size={15} color="var(--green-primary)" />
            <p style={{ color: "#666", fontSize: "0.85rem", margin: 0 }}>
              Peta wilayah Desa Trangsan — klik gambar untuk melihat lebih detail.
            </p>
          </div>
        </div>
      </div>

      {/* Fullscreen lightbox */}
      {fullscreen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.92)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            cursor: "zoom-out",
          }}
          onClick={() => setFullscreen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Peta desa layar penuh"
        >
          {/* Close button */}
          <button
            onClick={() => setFullscreen(false)}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
              zIndex: 1001,
            }}
            aria-label="Tutup peta"
          >
            <X size={20} />
          </button>

          {/* Full image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              maxWidth: "1400px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/peta-desa.jpg"
              alt="Peta Desa Trangsan — layar penuh"
              fill
              style={{ objectFit: "contain" }}
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}

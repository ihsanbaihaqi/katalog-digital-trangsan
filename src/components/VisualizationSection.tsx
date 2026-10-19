"use client";

import { useState } from "react";
import { Box, ChevronLeft, ChevronRight, Layers, Cpu } from "lucide-react";
import { buildings } from "@/data/buildings";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("./ModelViewer"), { ssr: false });

const modelsWithViewer = buildings.filter((b) => b.modelUrl);

export default function VisualizationSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = modelsWithViewer[activeIndex];
  const hasModels = modelsWithViewer.length > 0;

  const prev = () =>
    setActiveIndex((i) => (i - 1 + modelsWithViewer.length) % modelsWithViewer.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % modelsWithViewer.length);

  return (
    <section
      id="visualisasi"
      style={{
        background: "linear-gradient(180deg, #f8faf9 0%, var(--cream) 100%)",
        padding: "5rem 1.25rem",
      }}
      aria-label="Visualisasi 3D"
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
            <Box size={16} />
            Visualisasi 3D
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
            Model 3D Bangunan Desa
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
            Jelajahi bangunan desa secara tiga dimensi. Putar dan zoom model untuk melihat detail bangunan.
          </p>
        </div>

        {hasModels ? (
          <div
            style={{
              backgroundColor: "#1b2e2a",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Model viewer area */}
            <div style={{ position: "relative", height: "420px" }}>
              <ModelViewer
                src={active!.modelUrl!}
                alt={`Model 3D ${active!.name}`}
              />

              {/* Navigation arrows */}
              {modelsWithViewer.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Model sebelumnya"
                    style={{
                      position: "absolute",
                      left: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(0,0,0,0.45)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "white",
                      zIndex: 10,
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(0,0,0,0.7)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(0,0,0,0.45)";
                    }}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Model berikutnya"
                    style={{
                      position: "absolute",
                      right: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(0,0,0,0.45)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "white",
                      zIndex: 10,
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(0,0,0,0.7)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(0,0,0,0.45)";
                    }}
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Hint text */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.75rem",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "100px",
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                  zIndex: 10,
                }}
              >
                Geser untuk memutar · Scroll untuk zoom
              </div>
            </div>

            {/* Model info + thumbnail tabs */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Active model name */}
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", margin: "0 0 0.25rem" }}>
                  {activeIndex + 1} / {modelsWithViewer.length}
                </p>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>
                  {active!.name}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", margin: "0.35rem 0 0" }}>
                  {active!.description}
                </p>
              </div>

              {/* Thumbnail tabs */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {modelsWithViewer.map((b, i) => (
                  <button
                    key={b.id}
                    onClick={() => setActiveIndex(i)}
                    style={{
                      padding: "0.4rem 0.85rem",
                      borderRadius: "100px",
                      border: "1px solid",
                      borderColor: i === activeIndex ? "#52b788" : "rgba(255,255,255,0.15)",
                      backgroundColor: i === activeIndex ? "rgba(82,183,136,0.15)" : "transparent",
                      color: i === activeIndex ? "#52b788" : "rgba(255,255,255,0.5)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {b.name}
                  </button>
                ))}
              </div>

              {/* Tech badges */}
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                  marginTop: "1.25rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {[
                  { icon: <Layers size={14} color="#52b788" />, text: "Format GLB" },
                  { icon: <Box size={14} color="#52b788" />, text: "Rotate & Zoom" },
                  { icon: <Cpu size={14} color="#52b788" />, text: "model-viewer WebGL" },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.78rem",
                    }}
                  >
                    {item.icon}
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Fallback jika tidak ada model */
          <div
            style={{
              backgroundColor: "#1b2e2a",
              borderRadius: "20px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <Box size={40} color="rgba(82,183,136,0.4)" strokeWidth={1.5} />
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem", margin: 0 }}>
              Model 3D sedang disiapkan
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

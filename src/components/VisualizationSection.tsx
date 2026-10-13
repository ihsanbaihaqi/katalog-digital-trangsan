import { Box, Layers, Cpu } from "lucide-react";

export default function VisualizationSection() {
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
            Jelajahi bangunan desa secara tiga dimensi dengan teknologi visualisasi modern.
          </p>
        </div>

        {/* 3D Viewer placeholder */}
        <div
          style={{
            backgroundColor: "#1b2e2a",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Viewer area */}
          <div
            style={{
              height: "380px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.25rem",
              position: "relative",
              overflow: "hidden",
            }}
            role="img"
            aria-label="Placeholder visualisasi 3D — belum tersedia"
          >
            {/* Decorative 3D-like grid */}
            <svg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0.08,
              }}
              aria-hidden="true"
            >
              <defs>
                <pattern id="grid3d" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#52b788" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid3d)" />
            </svg>

            {/* Rotating cube icon (CSS only) */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 1.25rem",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    backgroundColor: "rgba(82,183,136,0.12)",
                    border: "1px solid rgba(82,183,136,0.25)",
                  }}
                />
                <Box size={36} color="#52b788" strokeWidth={1.5} />
              </div>

              <h3
                style={{
                  fontWeight: 700,
                  color: "white",
                  fontSize: "1.15rem",
                  marginBottom: "0.6rem",
                }}
              >
                Fitur Sedang Disiapkan
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.9rem",
                  maxWidth: "380px",
                  lineHeight: 1.6,
                  margin: "0 auto",
                }}
              >
                Model 3D bangunan akan tersedia setelah file GLB/GLTF dari
                survei lapangan selesai diproses.
              </p>
            </div>
          </div>

          {/* Feature info bar */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: <Layers size={16} color="#52b788" />, text: "Model GLB/GLTF" },
              { icon: <Box size={16} color="#52b788" />, text: "Tampilan 3D Interaktif" },
              { icon: <Cpu size={16} color="#52b788" />, text: "WebGL / Three.js" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.8rem",
                }}
              >
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

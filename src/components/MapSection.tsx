import { MapPin, Clock } from "lucide-react";

export default function MapSection() {
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
            Peta Interaktif Desa Trangsan
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
            Temukan lokasi bangunan dan fasilitas desa secara visual dan interaktif.
          </p>
        </div>

        {/* Map placeholder */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          {/* Placeholder map area */}
          <div
            style={{
              height: "400px",
              backgroundColor: "#e8f4f0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.25rem",
              position: "relative",
              overflow: "hidden",
            }}
            role="img"
            aria-label="Placeholder peta desa — belum tersedia"
          >
            {/* Grid pattern background */}
            <svg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0.25,
              }}
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#2d6a4f"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Road-like lines */}
            <svg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0.15,
              }}
              aria-hidden="true"
            >
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#2d6a4f" strokeWidth="3" />
              <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#2d6a4f" strokeWidth="2" />
              <line x1="65%" y1="0" x2="65%" y2="100%" stroke="#2d6a4f" strokeWidth="2" />
            </svg>

            <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 1.5rem" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "rgba(45,106,79,0.12)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  border: "2px solid rgba(45,106,79,0.2)",
                }}
              >
                <MapPin size={28} color="var(--green-primary)" />
              </div>
              <h3
                style={{
                  fontWeight: 700,
                  color: "var(--green-dark)",
                  fontSize: "1.1rem",
                  marginBottom: "0.5rem",
                }}
              >
                Peta Desa Sedang Disiapkan
              </h3>
              <p
                style={{
                  color: "#5a7f6e",
                  fontSize: "0.9rem",
                  maxWidth: "380px",
                  lineHeight: 1.6,
                }}
              >
                Data koordinat dan lokasi bangunan desa sedang dalam proses
                pengumpulan. Peta interaktif akan segera tersedia.
              </p>
            </div>
          </div>

          {/* Info bar */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              borderTop: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <Clock size={16} color="var(--earth)" />
            <p style={{ color: "#888", fontSize: "0.85rem", margin: 0 }}>
              Fitur peta interaktif akan tersedia setelah pengumpulan data koordinat bangunan selesai.
            </p>
          </div>
        </div>

        {/* Feature preview cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
          className="feature-cards"
        >
          {[
            { icon: "📍", title: "Koordinat Terverifikasi", desc: "Lokasi akurat berdasarkan survei lapangan" },
            { icon: "🏛️", title: "Info Bangunan", desc: "Klik lokasi untuk melihat detail bangunan" },
            { icon: "🗺️", title: "Navigasi Mudah", desc: "Temukan rute menuju lokasi tujuan" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "1.25rem",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
              <h4
                style={{
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "var(--green-dark)",
                  marginBottom: "0.3rem",
                }}
              >
                {item.title}
              </h4>
              <p style={{ color: "#888", fontSize: "0.8rem", lineHeight: 1.5, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 640px) {
            .feature-cards {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

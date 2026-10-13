"use client";

import { Info, Target, Users, Smartphone } from "lucide-react";

const features = [
  {
    icon: <Target size={22} color="var(--green-primary)" />,
    title: "Tujuan Katalog",
    desc: "Menyediakan informasi bangunan dan fasilitas desa yang mudah diakses oleh warga dan pengunjung.",
  },
  {
    icon: <Smartphone size={22} color="var(--green-primary)" />,
    title: "Akses via QR Code",
    desc: "Cukup pindai QR code pada papan informasi desa untuk langsung mengakses katalog digital ini.",
  },
  {
    icon: <Users size={22} color="var(--green-primary)" />,
    title: "Untuk Semua",
    desc: "Dirancang agar mudah digunakan oleh warga desa, pengunjung, maupun tamu resmi.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="tentang"
      style={{
        backgroundColor: "white",
        padding: "5rem 1.25rem",
      }}
      aria-label="Tentang"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left column */}
          <div>
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
              <Info size={16} />
              Tentang
            </div>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.25rem)",
                fontWeight: 800,
                color: "var(--green-dark)",
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
                lineHeight: 1.25,
              }}
            >
              Katalog Digital untuk Desa yang Lebih Terbuka
            </h2>
            <p
              style={{
                color: "#555",
                fontSize: "1rem",
                lineHeight: 1.75,
                marginBottom: "1rem",
              }}
            >
              Katalog Digital Desa Trangsan adalah platform informasi yang
              dirancang untuk memudahkan akses terhadap data bangunan dan
              fasilitas desa secara digital.
            </p>
            <p
              style={{
                color: "#555",
                fontSize: "1rem",
                lineHeight: 1.75,
              }}
            >
              Platform ini merupakan bagian dari upaya digitalisasi desa agar
              informasi dapat diakses kapan saja dan dari mana saja, cukup
              dengan memindai QR code yang tersedia di papan informasi desa.
            </p>
          </div>

          {/* Right column: feature cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {features.map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: "1rem",
                  backgroundColor: "#f8faf9",
                  borderRadius: "14px",
                  padding: "1.25rem",
                  border: "1px solid rgba(45,106,79,0.08)",
                  transition: "box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 16px rgba(45,106,79,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "44px",
                    height: "44px",
                    backgroundColor: "rgba(45,106,79,0.08)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "var(--green-dark)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "#666",
                      fontSize: "0.875rem",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

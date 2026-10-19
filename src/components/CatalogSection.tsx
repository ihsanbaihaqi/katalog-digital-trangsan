import { Building2, PlusCircle } from "lucide-react";
import { buildings } from "@/data/buildings";
import BuildingCard from "./BuildingCard";

export default function CatalogSection() {
  const hasData = buildings.length > 0;

  return (
    <section
      id="katalog"
      style={{
        backgroundColor: "white",
        padding: "5rem 1.25rem",
      }}
      aria-label="Katalog Bangunan"
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
            <Building2 size={16} />
            Katalog Bangunan
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
            Bangunan & Fasilitas Desa
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
            Daftar bangunan dan fasilitas penting yang tersedia di Desa Trangsan.
          </p>
        </div>

        {/* Catalog grid or empty state */}
        {hasData ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {buildings.map((building) => (
              <BuildingCard key={building.id} building={building} />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div
            style={{
              textAlign: "center",
              padding: "5rem 1.5rem",
              backgroundColor: "#f8faf9",
              borderRadius: "20px",
              border: "2px dashed rgba(45,106,79,0.2)",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "rgba(45,106,79,0.08)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem",
              }}
            >
              <Building2 size={32} color="var(--green-primary)" />
            </div>
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "var(--green-dark)",
                marginBottom: "0.75rem",
              }}
            >
              Data Bangunan Belum Tersedia
            </h3>
            <p
              style={{
                color: "#888",
                fontSize: "0.95rem",
                maxWidth: "420px",
                margin: "0 auto 1.5rem",
                lineHeight: 1.65,
              }}
            >
              Katalog bangunan sedang dalam proses pendataan. Informasi nama,
              foto, dan deskripsi bangunan akan segera ditambahkan.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "rgba(45,106,79,0.08)",
                color: "var(--green-primary)",
                borderRadius: "8px",
                padding: "0.6rem 1.1rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                border: "1px solid rgba(45,106,79,0.15)",
              }}
            >
              <PlusCircle size={16} />
              Data akan segera diperbarui
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

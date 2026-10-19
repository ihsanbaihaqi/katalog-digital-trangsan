"use client";

import { ArrowRight, ImageOff } from "lucide-react";
import Image from "next/image";
import { Building } from "@/data/buildings";

interface BuildingCardProps {
  building: Building;
}

export default function BuildingCard({ building }: BuildingCardProps) {
  return (
    <article
      style={{
        backgroundColor: "white",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        border: "1px solid rgba(0,0,0,0.06)",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 28px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 2px 12px rgba(0,0,0,0.07)";
      }}
      aria-label={`Detail bangunan: ${building.name}`}
    >
      {/* Image area */}
      <div
        style={{
          height: "180px",
          backgroundColor: "#f0f4f2",
          position: "relative",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {building.imageUrl ? (
          <Image
            src={building.imageUrl}
            alt={`Foto ${building.name}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 320px"
          />
        ) : (
          <>
            <ImageOff size={32} color="#b0c4bb" />
            <span style={{ color: "#b0c4bb", fontSize: "0.75rem" }}>
              Foto belum tersedia
            </span>
          </>
        )}

        {/* Category badge */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            backgroundColor: "var(--green-primary)",
            color: "white",
            fontSize: "0.72rem",
            fontWeight: 600,
            padding: "0.25rem 0.6rem",
            borderRadius: "0 6px 0 0",
            zIndex: 1,
          }}
        >
          {building.category}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1.1rem 1.25rem 1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          flex: 1,
        }}
      >
        <h3
          style={{
            fontWeight: 700,
            fontSize: "1rem",
            color: "var(--green-dark)",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {building.name}
        </h3>
        <p
          style={{
            color: "#666",
            fontSize: "0.875rem",
            lineHeight: 1.55,
            margin: 0,
            flex: 1,
          }}
        >
          {building.description}
        </p>

        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "var(--green-primary)",
            background: "none",
            border: "none",
            padding: "0.4rem 0",
            fontSize: "0.875rem",
            fontWeight: 600,
            cursor: "pointer",
            marginTop: "0.25rem",
            alignSelf: "flex-start",
            transition: "gap 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.gap = "0.65rem";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.gap = "0.4rem";
          }}
          aria-label={`Lihat detail ${building.name}`}
        >
          Lihat Detail
          <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katalog Digital Desa Trangsan",
  description:
    "Jelajahi lokasi, bangunan, dan informasi Desa Trangsan melalui katalog digital interaktif.",
  keywords: ["Desa Trangsan", "katalog digital", "peta desa", "bangunan desa"],
  openGraph: {
    title: "Katalog Digital Desa Trangsan",
    description:
      "Jelajahi lokasi, bangunan, dan informasi Desa Trangsan melalui katalog digital interaktif.",
    type: "website",
    locale: "id_ID",
  },
  metadataBase: new URL("https://katalog-digital-trangsan.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

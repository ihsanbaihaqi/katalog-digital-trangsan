# Katalog Digital Desa Trangsan

Platform informasi digital untuk Desa Trangsan — dapat diakses melalui QR code yang terpasang di papan informasi desa.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS v4
- Lucide React (icons)

## Fitur MVP

- Header dengan navigasi mobile-friendly
- Hero section dengan CTA
- Placeholder peta desa interaktif (siap integrasi Leaflet/Mapbox)
- Katalog bangunan dengan empty state (siap diisi data nyata)
- Placeholder visualisasi 3D (siap integrasi Three.js/model-viewer)
- Seksi tentang
- Footer

## Instalasi & Pengembangan

```bash
# Clone repositori
git clone https://github.com/USERNAME/katalog-digital-trangsan.git
cd katalog-digital-trangsan

# Install dependensi
npm install

# Jalankan server pengembangan
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Build Produksi

```bash
npm run build
npm run start
```

## Deploy ke Vercel

### Via GitHub (Direkomendasikan)

1. Push repository ke GitHub.
2. Buka [vercel.com/new](https://vercel.com/new).
3. Import repository `katalog-digital-trangsan`.
4. Biarkan semua pengaturan default — Vercel otomatis mendeteksi Next.js.
5. Klik **Deploy**.

URL produksi akan tersedia setelah deploy selesai.

### Via Vercel CLI

```bash
npm install -g vercel
vercel
```

## Menambahkan Data Bangunan

Edit file `src/data/buildings.ts`:

```typescript
export const buildings: Building[] = [
  {
    id: "balai-desa",
    name: "Balai Desa Trangsan",
    description: "Pusat kegiatan administrasi dan pelayanan warga desa.",
    category: "Pemerintahan",
    imageUrl: "/images/balai-desa.jpg", // tambahkan foto di folder public/images/
    isPlaceholder: false,
  },
  // tambahkan bangunan lain di sini...
];
```

## Struktur Direktori

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata SEO
│   ├── page.tsx          # Halaman utama
│   └── globals.css       # Global styles + CSS variables
├── components/
│   ├── Header.tsx        # Navigasi sticky
│   ├── HeroSection.tsx   # Hero + CTA
│   ├── MapSection.tsx    # Placeholder peta
│   ├── BuildingCard.tsx  # Card komponen bangunan
│   ├── CatalogSection.tsx # Grid katalog + empty state
│   ├── VisualizationSection.tsx # Placeholder 3D viewer
│   ├── AboutSection.tsx  # Seksi tentang
│   └── Footer.tsx        # Footer
└── data/
    └── buildings.ts      # Data bangunan (edit untuk menambah data nyata)
```

## Roadmap

- [ ] Integrasi peta interaktif (Leaflet/Mapbox) dengan koordinat terverifikasi
- [ ] Halaman detail bangunan
- [ ] Visualisasi 3D dari file GLB/GLTF (Three.js / `<model-viewer>`)
- [ ] Pengalaman AR (opsional)

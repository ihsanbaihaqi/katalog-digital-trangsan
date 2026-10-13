export interface Building {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl?: string;
  isPlaceholder: boolean;
}

/**
 * Data bangunan desa.
 * Ganti isPlaceholder: false dan isi field yang sesuai
 * ketika data nyata sudah tersedia.
 */
export const buildings: Building[] = [
  // Data nyata belum tersedia. Tambahkan objek bangunan di sini
  // ketika foto dan deskripsi resmi sudah siap.
];

export const buildingCategories = [
  "Semua",
  "Pemerintahan",
  "Peribadatan",
  "Pendidikan",
  "Kesehatan",
  "Umum",
];

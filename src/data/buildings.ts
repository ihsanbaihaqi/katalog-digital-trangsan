export interface Building {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl?: string;
  modelUrl?: string;
  isPlaceholder: boolean;
}

export const buildings: Building[] = [
  {
    id: "andi-rotan",
    name: "Andi Rotan",
    description: "Industri kerajinan rotan yang menjadi salah satu usaha unggulan di Desa Trangsan.",
    category: "Industri",
    imageUrl: "/images/andi-rotan.jpeg",
    modelUrl: "/models/andi-rotan.glb",
    isPlaceholder: false,
  },
  {
    id: "pabrik-manggala-jaya",
    name: "Pabrik Manggala Jaya",
    description: "Pabrik pengolahan rotan Manggala Jaya, salah satu sentra produksi kerajinan desa.",
    category: "Industri",
    imageUrl: "/images/pabrik-manggala-jaya.png",
    modelUrl: "/models/pabrik-manggala-jaya.glb",
    isPlaceholder: false,
  },
  {
    id: "pabrik-reka-desain",
    name: "Pabrik Reka Desain",
    description: "Pabrik Reka Desain, produsen furnitur dan kerajinan rotan berkualitas di Desa Trangsan.",
    category: "Industri",
    imageUrl: "/images/pabrik-reka-desain.png",
    modelUrl: "/models/pabrik-reka-desain.glb",
    isPlaceholder: false,
  },
  {
    id: "putra-jaya-rotan",
    name: "Putra Jaya Rotan",
    description: "Usaha kerajinan rotan Putra Jaya, penghasil produk rotan untuk pasar lokal dan ekspor.",
    category: "Industri",
    imageUrl: "/images/putra-jaya-rotan.png",
    modelUrl: "/models/putra-jaya-rotan.glb",
    isPlaceholder: false,
  },
];

export const buildingCategories = [
  "Semua",
  "Pemerintahan",
  "Peribadatan",
  "Pendidikan",
  "Kesehatan",
  "Industri",
  "Umum",
];

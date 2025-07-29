export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  featured: boolean;
  inStock: boolean;
  bestseller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const products: Product[] = [
  // {
  //   id: "1",
  //   name: "SS.001",
  //   description:
  //     "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",
  //
  //   price: 1200000,
  //   images: ["/products/p1.jpg", "/products/p1-2.jpg", "/products/p1-3.jpg"],
  //   category: "Wedding",
  //   featured: true,
  //   inStock: true,
  //   bestseller: true,
  // },
  // {
  //   id: "2",
  //   name: "SS.002",
  //   description:
  //     "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",
  //
  //   price: 800000,
  //   images: ["/products/p2.jpg", "/products/p2-2.jpg"],
  //   category: "Wedding",
  //   featured: true,
  //   inStock: true,
  //   bestseller: true,
  // },
  // {
  //   id: "3",
  //   name: "SS.003",
  //   description:
  //     "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",
  //
  //   price: 1000000,
  //
  //   images: ["/products/p3.jpg", "/products/p3-2.jpg"],
  //   category: "Wedding",
  //   featured: true,
  //   inStock: true,
  //   bestseller: true,
  // },
  {
    id: "4",
    name: "AP.001",
    description:
      "Jenis Bahan:\n- Amplop : Jasmine 200 gsm\n- isi : Jasmine 200 gsm\n-  Ukuran: 10 x 19 cm\n",

    price: 1000000,

    images: ["/products/detail-produk/ap.001.png"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "5",
    name: "AP.002",
    description:
      "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",

    price: 1200000,

    images: ["/products/detail-produk/ap.002.png"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "4",
    name: "AP.003",
    description:
      "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",

    price: 1000000,

    images: ["/products/detail-produk/ap.003.png"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "5",
    name: "AP.004",
    description:
      "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",

    price: 1000000,

    images: ["/products/detail-produk/ap.004.png"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "6",
    name: "LP.001",
    description:
      "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",

    price: 1000000,

    images: ["/products/detail-produk/lp.001.png"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "7",
    name: "LP.002",
    description:
      "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",

    price: 1000000,

    images: ["/products/detail-produk/lp.002.png"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "8",
    name: "LP.003",
    description:
      "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",

    price: 1000000,

    images: ["/products/detail-produk/lp.003.png"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "9",
    name: "LP.004",
    description:
      "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",

    price: 1000000,

    images: ["/products/detail-produk/lp.004.png"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "10",
    name: "LP.005",
    description:
      "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",

    price: 1000000,

    images: ["/products/detail-produk/lp.005.png"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "11",
    name: "RS.001",
    description:
      "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",

    price: 1000000,

    images: ["/products/detail-produk/rs.001.png"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "12",
    name: "LP.002",
    description:
      "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",

    price: 1000000,

    images: ["/products/detail-produk/rs.002.png"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "13",
    name: "RS.003",
    description:
      "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",

    price: 1000000,

    images: ["/products/detail-produk/rs.003.png"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
];

export const categories = ["Wedding", "Birthday", "Hantaran"];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((product) => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

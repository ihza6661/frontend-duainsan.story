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
  {
    id: "1",
    name: "SS.001",
    description:
      "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",

    price: 89.99,
    images: ["/products/p1.jpg","/products/p1-2.jpg","/products/p1-3.jpg"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "2",
    name: "SS.002",
    description:
      "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",

    price: 80.99,
    images: ["/products/p2.jpg","/products/p2-2.jpg"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "3",
    name: "SS.003",
    description:
      "Jenis Bahan:\n- isi : Linen White 200gsm\n- Hardboard: Yellow Board k.40\n- Ukuran: 10 x 19 cm\nLama Pengerjaan:\n- Desain Awal: 3-7 hari kerja\n - Persetujuan: Maksimal 5 kali persetujuan desain\n - Produksi: -+30 hari kerja (tidak termasuk tgl merah)\n - Pemesanan dibawah 50 hubungi WA.",

    price: 70.99,
    images: ["/products/p3.jpg","/products/p3-2.jpg"],
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

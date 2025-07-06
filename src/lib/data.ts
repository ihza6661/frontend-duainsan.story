
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
    name: "Plant Theme Invitation",
description: "Main Invitation: Hardcover\nMaterial: Milano White\nEnvelope: Aster Sangria Red",

    price: 89.99,
    images: [
      "/products/p1.jpg",
    ],
    category: "Undangan Cetak",
    featured: true,
    inStock: true,
    bestseller: true
  },
  {
    id: "2",
    name: "Yellow Theme Invitation",
    description: "",
    price: 98.99,
    images: [
      "/products/p2.jpg"
    ],
    category: "Undangan Cetak",
    featured: true,
    inStock: true,
    bestseller: true
  },
  {
    id: "3",
    name: "A-line mini dress with long sleeves",
    description: "",
    price: 98.99,
    images: [
      "/products/p3.jpg",
    ],
    category: "Undangan Cetak",
    featured: true,
    inStock: true,
    bestseller: true
  },
  {
    id: "4",
    name: "Chiffon dress with three frills",
    description: "",
    price: 98.99,
    images: [
      "/products/p4.jpg"
    ],
    category: "Undangan Cetak",
    featured: true,
    inStock: true,
    bestseller: true
  },
  {
    id: "5",
    name: "Casual dress",
    description: "",
    price: 98.99,
    images: [
      "/products/p5.jpg"
    ],
    category: "Undangan Cetak",
    featured: true,
    inStock: true,
    bestseller: true
  },
  {
    id: "6",
    name: "Flared dress with an envelope neckline",
    description: "",
    price: 98.99,
    images: [
      "/products/p6.jpg",
    ],
    category: "Undangan Cetak",
    featured: true,
    inStock: true,
    bestseller: true
  },
];


export const categories = [
  "Undangan Digital",
  "Undangan Cetak",
  "Hantaran",
  "Undangan Ulang Tahun",
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

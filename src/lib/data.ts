
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
    name: "Cobalt trousers with wide-down leg",
    description: "",
    price: 89.99,
    images: [
      "/products/Cobalt-trousers-with-wide-down-leg.webp",
      "/products/Cobalt-trousers-2.webp"
    ],
    category: "Women Bottom",
    featured: true,
    inStock: true,
    bestseller: true
  },
  {
    id: "2",
    name: "A detachable dress at the waist with pleats",
    description: "",
    price: 98.99,
    images: [
      "/products/A-detachable-dress-at-the-waist with-pleats.webp",
      "/products/A-detachable-dress-at-the-waist with-pleats-2.webp"
    ],
    category: "Dress",
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
      "/products/A-line-mini-dress with-long-sleeves.webp",
      "/products/A-line-mini-dress with-long-sleeves-2.webp"
    ],
    category: "Dress",
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
      "/products/Chiffon dress with three frills.webp",
      "/products/Chiffon dress with three frills.webp-2.webp"
    ],
    category: "Dress",
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
      "/products/casual_dress.webp",
      "/products/casual_dress_2.webp"
    ],
    category: "Dress",
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
      "/products/Flared dress with an envelope neckline.webp",
      "/products/Flared dress with an envelope neckline_2.webp"
    ],
    category: "Dress",
    featured: true,
    inStock: true,
    bestseller: true
  },
];


export const categories = [
  "All",
  "Woman Bottom",
  "Woman Top",
  "Dress",
  "Accessories"
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

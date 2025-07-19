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
    description:
      "Main Invitation: Hardcover\nMaterial: Milano White\nEnvelope: Aster Sangria Red",

    price: 89.99,
    images: ["/products/p1.jpg"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "2",
    name: "Yellow Theme Invitation",
    description: `Package XH.15.1\n
Main Invitation: Hardcover\n
Material: Milano White\n
Envelope: Aster Sangria Red\n
What you get:\n
- Additional card 2 pcs (8 x 14 cm)\n
- Rumbai Tassel\n
Processing time:\n
- Design: 3-10 days service (5x approval design)\n
- Production: 25 days service (excluding holidays)`,


    price: 98.99,
    images: ["/products/p2.jpg","/products/p2-2.jpg","/products/p2-3.jpg"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "3",
    name: "SH",
    description:
      "Main Invitation: Hardcover\nMaterial: Milano White\nEnvelope: Aster Sangria Red",

    price: 98.99,
    images: ["/products/1.webp","/products/2.webp","/products/3.webp","/products/4.webp","/products/5.webp"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "4",
    name: "Card Holder V1.1",
    description:
      "Main Invitation: Hardcover\nMaterial: Milano White\nEnvelope: Aster Sangria Red",

    price: 98.99,
    images: ["/products/p2.webp","/products/p2-2.webp","/products/p2-2.webp"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "5",
    name: "Casual dress",
    description:
      "Main Invitation: Hardcover\nMaterial: Milano White\nEnvelope: Aster Sangria Red",

    price: 98.99,
    images: ["/products/p5.jpg"],
    category: "Wedding",
    featured: true,
    inStock: true,
    bestseller: true,
  },
  {
    id: "6",
    name: "Flared dress with an envelope neckline",
    description:
      "Main Invitation: Hardcover\nMaterial: Milano White\nEnvelope: Aster Sangria Red",

    price: 98.99,
    images: ["/products/p6.jpg"],
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

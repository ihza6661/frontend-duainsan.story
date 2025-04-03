
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Desk Lamp",
    description: "A sleek, adjustable desk lamp with a clean design and warm lighting perfect for any workspace.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Home Office",
    featured: true,
    inStock: true
  },
  {
    id: "2",
    name: "Ergonomic Office Chair",
    description: "Premium ergonomic chair with breathable mesh back, adjustable lumbar support, and smooth-rolling casters.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505843490701-5c4b83a1d314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    category: "Home Office",
    featured: true,
    inStock: true
  },
  {
    id: "3",
    name: "Wireless Bluetooth Earbuds",
    description: "Truly wireless earbuds with immersive sound, active noise cancellation, and a compact charging case.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
    category: "Electronics",
    featured: true,
    inStock: true
  },
  {
    id: "4",
    name: "Smart Home Speaker",
    description: "Elegant smart speaker with crystal clear audio and voice assistant integration for your connected home.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1589003511263-bf99f0c5addb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    category: "Electronics",
    featured: false,
    inStock: true
  },
  {
    id: "5",
    name: "Ceramic Pour-Over Coffee Set",
    description: "Handcrafted ceramic coffee dripper with matching cup for the perfect pour-over brewing experience.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
    category: "Kitchen",
    featured: true,
    inStock: true
  },
  {
    id: "6",
    name: "Minimalist Watch",
    description: "Elegant timepiece with a clean dial, premium leather band, and Japanese quartz movement.",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Accessories",
    featured: false,
    inStock: true
  },
  {
    id: "7",
    name: "Leather Laptop Sleeve",
    description: "Premium leather laptop sleeve with soft microfiber lining and magnetic closure for 13-15 inch laptops.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1612690669207-fed642192c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Accessories",
    featured: false,
    inStock: true
  },
  {
    id: "8",
    name: "Glass Water Bottle",
    description: "Eco-friendly borosilicate glass water bottle with protective silicone sleeve and leak-proof bamboo lid.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Kitchen",
    featured: false,
    inStock: true
  }
];

export const categories = [
  "All",
  "Home Office",
  "Electronics",
  "Kitchen",
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

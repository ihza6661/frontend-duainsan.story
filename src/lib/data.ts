
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
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
    image: "/products/Cobalt-trousers-with-wide-down-leg.webp",
    category: "Women Bottom",
    featured: true,
    inStock: true,
    bestseller: true
  },
  {
    id: "2",
    name: "Cobalt Shirt with wide-down leg",
    description: "",
    price: 89.99,
    image: "/products/Cobalt-trousers-with-wide-down-leg.webp",
    category: "Women Bottom",
    featured: true,
    inStock: true,
    bestseller: true
  },
  {
    id: "5",
    name: "Ceramic Pour-Over Coffee Set",
    description: "Handcrafted ceramic coffee dripper with matching cup for the perfect pour-over brewing experience.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
    category: "Kitchen",
    featured: true,
    inStock: true,
    bestseller: true
  },
  {
    id: "6",
    name: "Minimalist Watch",
    description: "Elegant timepiece with a clean dial, premium leather band, and Japanese quartz movement.",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Accessories",
    featured: false,
    inStock: true,
    bestseller: true
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


import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";
import { Product, CartItem } from "@/lib/data";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  
  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing saved cart", e);
      }
    }
  }, []);
  
  // Save cart to localStorage
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
    
    // Calculate cart total
    const total = cartItems.reduce((sum, item) => 
      sum + (item.product.price * item.quantity), 0);
    setCartTotal(total);
  }, [cartItems]);
  
  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id
      );
      
      if (existingItemIndex > -1) {
        // Product already exists in cart, increase quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        toast.success(`${product.name} quantity updated in cart`);
        return updatedItems;
      } else {
        // Add new product to cart
        toast.success(`${product.name} added to cart`);
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };
  
  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };
  
  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.product.id !== productId)
    );
    toast.info("Item removed from cart");
  };
  
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    toast.info("Cart cleared");
  };
  
  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

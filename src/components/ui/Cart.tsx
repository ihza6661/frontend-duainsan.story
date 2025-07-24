import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";
import { Product, CartItem } from "@/lib/data";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error("Error parsing saved cart", e);
      return [];
    }
  });

  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));

    const total = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    setCartTotal(total);
  }, [cartItems]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.product.id === product.id
      );

      let updatedItems;

      if (existingItemIndex > -1) {
        const existingQuantity = Number(prevItems[existingItemIndex].quantity);
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: existingQuantity + Number(quantity),
        };
      } else {
        updatedItems = [...prevItems, { product, quantity: Number(quantity) }];
      }

      return updatedItems;
    });

    toast.success(`${product.name} added to cart (x${quantity})`);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => {
      const updatedItems = items.filter(
        (item) => Number(item.product.id) !== id
      );

      localStorage.setItem("cart", JSON.stringify(updatedItems));

      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify({}));
    toast.info("Cart cleared");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        cartTotal,
      }}
    >
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

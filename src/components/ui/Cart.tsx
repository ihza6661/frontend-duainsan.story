import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";
import { Product, CartItem } from "@/lib/data";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    product: Product,
    quantity: number,
    selectedVariant: string
  ) => void;
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

    const total = cartItems.reduce((sum, item) => {
      const variant = item.product.variants?.find(
        (v) => v.type === item.selectedVariant
      );
      const price = variant?.price ?? 0;
      return sum + price * item.quantity;
    }, 0);

    setCartTotal(total);
  }, [cartItems]);

  const addToCart = (
    product: Product,
    quantity: number = 1,
    selectedVariant: string
  ) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedVariant === selectedVariant
      );

      let updatedItems;

      if (existingItemIndex > -1) {
        const existingQuantity = prevItems[existingItemIndex].quantity;
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: existingQuantity + quantity,
        };
      } else {
        updatedItems = [...prevItems, { product, quantity, selectedVariant }];
      }

      return updatedItems;
    });

    toast.success(
      `${product.name} (${selectedVariant}) added to cart (x${quantity})`
    );
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

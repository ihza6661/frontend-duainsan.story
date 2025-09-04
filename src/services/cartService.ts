// src/services/cartService.ts (Corrected for API v1.1.0)

import apiClient from "@/lib/api";
import type { Product, ProductVariant } from "./productService"; // Import ProductVariant

// =================================================================================
// --- TYPE DEFINITIONS (SYNCHRONIZED WITH API v1.1.0) ---
// =================================================================================

/**
 * Defines the structure for an item within the cart.
 * CORRECTED: Added the `variant` property.
 */
export interface CartItem {
  id: number;
  quantity: number;
  unit_price: number;
  sub_total: number;
  customization_details: object;
  product: Product;
  variant: ProductVariant; // This now holds the specific variant details
}

/**
 * Defines the structure for the entire shopping cart object.
 * (No changes needed here, but its items are now richer)
 */
export interface Cart {
  id: number;
  session_id: string | null;
  total_items: number;
  subtotal: number;
  items: CartItem[];
}

// Helper type for API responses
interface CartResponse {
  data: Cart;
}

/**
 * Defines the payload for adding an item to the cart.
 * CORRECTED: This now requires a `variantId`.
 */
export interface AddToCartPayload {
  variantId: number; // Changed from productId and options
  quantity: number;
  addOns?: number[];
}

// =================================================================================
// --- API FUNCTIONS ---
// =================================================================================

/**
 * Fetches the current user's or guest's cart from the server.
 */
export const fetchCart = async (): Promise<Cart> => {
  console.log('fetchCart: Making API call to /cart'); // ADDED LOG
  const response = await apiClient.get<CartResponse>('/cart');
  console.log('fetchCart: API response received:', response.data); // ADDED LOG
  return response.data.data;
};

/**
 * Adds an item to the cart.
 * CORRECTED: Sends `variant_id` instead of `product_id`.
 */
export const addToCart = async (payload: AddToCartPayload): Promise<Cart> => {
  const response = await apiClient.post<CartResponse>('/cart/items', {
    variant_id: payload.variantId, // Use variant_id as required by the new API
    quantity: payload.quantity,
    add_ons: payload.addOns,
  });
  return response.data.data;
};

/**
 * Updates the quantity of a specific item in the cart.
 */
export const updateCartItem = async ({ itemId, quantity }: { itemId: number; quantity: number }) => {
  const response = await apiClient.patch<CartResponse>(`/cart/items/${itemId}`, { quantity });
  return response.data.data;
};

/**
 * Removes a specific item from the cart.
 */
export const removeCartItem = async (itemId: number): Promise<Cart> => {
  const response = await apiClient.delete<CartResponse>(`/cart/items/${itemId}`);
  return response.data.data;
};

/**
 * Removes all items from the cart.
 */
export const clearCart = async (): Promise<Cart> => {
  const response = await apiClient.post<CartResponse>('/cart/clear');
  return response.data.data;
};

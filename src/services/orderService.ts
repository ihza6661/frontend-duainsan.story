import api from '@/lib/api';
import { Order } from '@/services/cartService'; // Re-use Order type if it's the same

// Define a type for a paginated list of orders if the API returns one
interface PaginatedOrders {
  data: Order[];
  // Add pagination links and meta if available from API
  links: { first: string; last: string; prev: string | null; next: string | null; };
  meta: { current_page: number; from: number; last_page: number; path: string; per_page: number; to: number; total: number; };
}

/**
 * Fetches a list of orders for the authenticated user.
 * @returns A paginated list of orders.
 */
export const fetchOrders = async (): Promise<PaginatedOrders> => {
  const response = await api.get('/orders');
  return response.data;
};

/**
 * Fetches a single order by its ID.
 * @param orderId The ID of the order to fetch.
 * @returns The details of the specified order.
 */
export const fetchOrderById = async (orderId: string): Promise<{ data: Order }> => {
  const response = await api.get(`/orders/${orderId}`);
  return response.data;
};

import { apiService } from './api';

/**
 * Order API service
 */
export const orderService = {
  /**
   * Create order
   */
  create: async (orderData) => {
    return apiService.post('/orders', orderData);
  },

  /**
   * Get user orders
   */
  getUserOrders: async () => {
    return apiService.get('/orders');
  },

  /**
   * Get order by ID
   */
  getById: async (id) => {
    return apiService.get(`/orders/${id}`);
  },

  /**
   * Cancel order
   */
  cancel: async (id) => {
    return apiService.put(`/orders/${id}/cancel`);
  },
};

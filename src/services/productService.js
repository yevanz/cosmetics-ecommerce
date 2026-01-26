import { apiService } from './api';

/**
 * Product API service
 */
export const productService = {
  /**
   * Get all products
   */
  getAll: async () => {
    return apiService.get('/products');
  },

  /**
   * Get product by ID
   */
  getById: async (id) => {
    return apiService.get(`/products/${id}`);
  },

  /**
   * Get products by category
   */
  getByCategory: async (category) => {
    return apiService.get(`/products?category=${category}`);
  },

  /**
   * Search products
   */
  search: async (query) => {
    return apiService.get(`/products/search?q=${encodeURIComponent(query)}`);
  },

  /**
   * Create product (admin)
   */
  create: async (productData) => {
    return apiService.post('/products', productData);
  },

  /**
   * Update product (admin)
   */
  update: async (id, productData) => {
    return apiService.put(`/products/${id}`, productData);
  },

  /**
   * Delete product (admin)
   */
  delete: async (id) => {
    return apiService.delete(`/products/${id}`);
  },
};

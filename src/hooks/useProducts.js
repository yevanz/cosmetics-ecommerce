import { useState, useEffect } from 'react';
import { products, getProductById, getProductsByCategory, searchProducts } from '../data/products';

/**
 * Custom hook for product operations
 * @param {Object} options - Options for filtering/searching
 * @returns {Object} - Products data and operations
 */
export const useProducts = (options = {}) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      let filteredProducts = products;

      if (options.category) {
        filteredProducts = getProductsByCategory(options.category);
      } else if (options.searchTerm) {
        filteredProducts = searchProducts(options.searchTerm);
      } else if (options.limit) {
        filteredProducts = products.slice(0, options.limit);
      }

      setProductList(filteredProducts);
      setError(null);
    } catch (err) {
      setError(err.message);
      setProductList([]);
    } finally {
      setLoading(false);
    }
  }, [options.category, options.searchTerm, options.limit]);

  const getProduct = (id) => {
    return getProductById(id);
  };

  return {
    products: productList,
    loading,
    error,
    getProduct,
    total: productList.length,
  };
};

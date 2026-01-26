import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../hooks';
import ProductCard from '../components/ProductCard';
import { products, getProductsByCategory, searchProducts } from '../data/products';
import './ProductListing.css';

const ProductListing = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);
  const category = searchParams.get('cat');
  const searchQuery = searchParams.get('search');

  // Filter products based on category or search
  let filteredProducts = products;
  
  if (category) {
    filteredProducts = getProductsByCategory(category);
  } else if (searchQuery) {
    filteredProducts = searchProducts(searchQuery);
  } else if (debouncedSearch) {
    filteredProducts = searchProducts(debouncedSearch);
  }

  return (
    <div className="product-listing-container">
      <h1 className="listing-title">
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : 'All Products'}
      </h1>
      
      <input
        type="text"
        className="search-bar"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} showDiscount={true} />
          ))
        ) : (
          <p className="no-products">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductListing;

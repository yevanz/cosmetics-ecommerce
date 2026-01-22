import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductListing.css';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Placeholder: Fetch from backend
    setProducts([
      { id: 1, name: 'Rose Lip Balm', price: 15, category: 'Lips' },
      { id: 2, name: 'Hydrating Serum', price: 25, category: 'Skincare' },
    ]);
  }, []);

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="product-listing-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`} className="view-btn">View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;

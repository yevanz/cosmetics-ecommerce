import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import logo from '../assets/back.png'; // ✅ Keep your existing logo

const Homepage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Placeholder — fetch from backend later
    setFeaturedProducts([
      { id: 1, name: 'Rose Lip Balm', price: 15, image: 'https://placehold.co/300x300?text=Lip+Balm', discount: 20 },
      { id: 2, name: 'Hydrating Serum', price: 25, image: 'https://placehold.co/300x300?text=Serum', discount: 35 },
      { id: 3, name: 'Glow Foundation', price: 30, image: 'https://placehold.co/300x300?text=Foundation', discount: 40 },
      { id: 4, name: 'Matte Lipstick', price: 18, image: 'https://placehold.co/300x300?text=Lipstick', discount: 25 },
    ]);
  }, []);

  return (
    <div className="homepage">
      {/* === Hero Section (Gradient Background) === */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Unleash Your <span>Glow</span></h1>
          <p>Exclusive beauty deals and top-rated cosmetics — just for you!</p>
          <Link to="/products" className="hero-btn">Shop Now</Link>
        </div>
      </section>

      {/* === Header Section === */}
      <header className="homepage-header">
        <div className="logo-container">
          <img src={logo} alt="Glowify Logo" className="glowify-logo" />
        </div>
        <div className="header-text">
          <h1>Welcome to <span>Glowify</span></h1>
          <p>Discover premium cosmetics that bring out your natural beauty.</p>
          <Link to="/products" className="shop-btn">Explore All</Link>
        </div>
      </header>

      {/* === Category Shortcuts === */}
      <section className="category-bar">
        <Link to="/products?cat=skincare">💧 Skincare</Link>
        <Link to="/products?cat=makeup">💄 Makeup</Link>
        <Link to="/products?cat=fragrance">🌸 Fragrance</Link>
        <Link to="/products?cat=haircare">💇 Haircare</Link>
        <Link to="/products?cat=accessories">👜 Accessories</Link>
      </section>

      {/* === Featured Products Section === */}
      <section className="featured-section">
        <h2>✨ Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="discount-tag">-{product.discount}%</div>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">KSh {product.price * 100}</p>
              <Link to={`/product/${product.id}`} className="details-btn">View Details</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;


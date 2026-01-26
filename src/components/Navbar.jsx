import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';
import logo from '../assets/glowify.png';

const Navbar = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000); // Splash duration
    return () => clearTimeout(timer);
  }, []);

  // Splash Screen
  if (showSplash) {
    return (
      <div className="splash-screen">
        <img src={logo} alt="Glowify Logo" className="splash-logo" />
      </div>
    );
  }

  return (
    <header className="gb-header" role="banner" aria-label="Welcome header">
      <div className="gb-container">
        {/* === Mobile Menu Button === */}
        <button
          className="gb-menu-btn"
          aria-label="Open menu"
          onClick={() => setShowMobileSearch(prev => !prev)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Brand / Logo Section */}
        <Link to="/" className="gb-brand" aria-label="Glowify home">
          <div className="gb-logo-box">
            <img src={logo} alt="Glowify logo" className="gb-logo-img" />
            <span className="gb-brand-name">Glowify</span>
          </div>
        </Link>

        {/* Desktop Search */}
        <div className="gb-search" role="search" aria-label="Search products">
          <svg className="gb-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 21l-4.35-4.35" stroke="#b19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="11" cy="11" r="6" stroke="#b19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input
            className="gb-search-input"
            type="search"
            placeholder="Search foundations, lipsticks, skincare..."
          />
        </div>

        {/* Navigation (Desktop) */}
        <nav className={`gb-nav ${showMobileSearch ? 'open' : ''}`} aria-label="Main navigation">
          {/* Mobile Close Button */}
          <button className="gb-menu-close" onClick={() => setShowMobileSearch(false)}>&times;</button>

          <Link to="/products" className="gb-link" onClick={() => setShowMobileSearch(false)}>Products</Link>
          <Link to="/new" className="gb-link" onClick={() => setShowMobileSearch(false)}>New</Link>
          <Link to="/sale" className="gb-link" onClick={() => setShowMobileSearch(false)}>Sale</Link>
          <Link to="/favorites" className="gb-link" onClick={() => setShowMobileSearch(false)}>Favorites</Link>

          {/* Account */}
          <Link to="/account" className="gb-icon-btn" aria-label="Account" onClick={() => setShowMobileSearch(false)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" fill="#fff" />
            </svg>
            <span className="gb-icon-text">Account</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="gb-icon-btn" aria-label={`Cart with ${cartCount} items`} onClick={() => setShowMobileSearch(false)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M7 4h-2l-1 2v2h2l3.6 7.6-1.3 2.4C8.5 18.4 9.5 20 11 20h8v-2h-7.2c-.1 0-.3-.1-.3-.2l.1-.2L14 16h3.5c.7 0 1.4-.4 1.8-1l2.6-8H6.2" fill="#fff" />
            </svg>
            <span className="gb-icon-text">Cart</span>
            <span className="gb-count">{cartCount}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

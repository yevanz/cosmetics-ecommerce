import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/glowify.png';

const Header = ({ cartCount = 0 }) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

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
        {/* Brand / Logo Section */}
        <Link to="/" className="gb-brand" aria-label="Glowify home">
          <div className="gb-logo-box">
            <img src={logo} alt="Glowify logo" className="gb-logo-img" />
            <span className="gb-brand-name">Welcome</span>
          </div>
        </Link>

        {/* Desktop Search */}
        <div className="gb-search" role="search" aria-label="Search products">
          <svg className="gb-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 21l-4.35-4.35" stroke="#b19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="11" r="6" stroke="#b19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            className="gb-search-input"
            type="search"
            placeholder="Search foundations, lipsticks, skincare..."
          />
        </div>

        {/* Mobile Search Button */}
        <button
          className="gb-mobile-search-btn"
          aria-label="Open search"
          onClick={() => setShowMobileSearch(true)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 21l-4.35-4.35" stroke="#4d233d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="11" r="6" stroke="#4d233d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Navigation */}
        <nav className="gb-nav" aria-label="Main navigation">
          <Link to="/products" className="gb-link">Products</Link>
          <Link to="/new" className="gb-link">New</Link>
          <Link to="/sale" className="gb-link">Sale</Link>
          <Link to="/favorites" className="gb-link">Favorites</Link>

          <Link to="/account" className="gb-icon-btn" aria-label="Account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 
              1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" fill="#fff"/>
            </svg>
            <span className="gb-icon-text">Account</span>
          </Link>

          <Link to="/cart" className="gb-icon-btn" aria-label={`Cart with ${cartCount} items`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M7 4h-2l-1 2v2h2l3.6 7.6-1.3 2.4C8.5 18.4 9.5 20 11 20h8v-2h-7.2c-.1 0-.3-.1-.3-.2l.1-.2L14 16h3.5c.7 0 1.4-.4 1.8-1l2.6-8H6.2" fill="#fff"/>
            </svg>
            <span className="gb-icon-text">Cart</span>
            <span className="gb-count">{cartCount}</span>
          </Link>
        </nav>
      </div>

      {/* Mobile Search Overlay */}
      {showMobileSearch && (
        <div className="gb-mobile-search-overlay">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 21l-4.35-4.35" stroke="#4d233d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="11" r="6" stroke="#4d233d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            className="gb-mobile-search-input"
            type="search"
            placeholder="Search foundations, lipsticks, skincare..."
            autoFocus
          />
          <button className="gb-mobile-close-btn" onClick={() => setShowMobileSearch(false)}>
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

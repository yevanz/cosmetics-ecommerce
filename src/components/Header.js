import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ cartCount = 0 }) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="gb-header" role="banner" aria-label="GlowBeauty header">
      <div className="gb-container">
        <Link to="/" className="gb-brand" aria-label="GlowBeauty home">
          <div className="gb-logo-box" aria-hidden>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 2c1.1 2.6 3.3 4.6 6 5 -2.7.4-4.9 2.4-6 5-1.1-2.6-3.3-4.6-6-5 2.7-.4 4.9-2.4 6-5z" fill="rgba(77,35,61,0.95)"/>
            </svg>
            <span className="gb-brand-name">GlowBeauty</span>
          </div>
        </Link>

        <div className="gb-search" role="search" aria-label="Search products">
          <svg className="gb-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M21 21l-4.35-4.35" stroke="#b19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="11" r="6" stroke="#b19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            className="gb-search-input"
            type="search"
            aria-label="Search products"
            placeholder="Search foundations, lipsticks, skincare..."
          />
        </div>

        <button
          className="gb-mobile-search-btn"
          aria-label="Open search"
          onClick={() => setShowMobileSearch(true)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M21 21l-4.35-4.35" stroke="#4d233d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="11" r="6" stroke="#4d233d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <nav className="gb-nav" aria-label="Main navigation">
          <Link to="/products" className="gb-link">Products</Link>
          <Link to="/new" className="gb-link">New</Link>
          <Link to="/sale" className="gb-link">Sale</Link>
          <Link to="/favorites" className="gb-link">Favorites</Link>

          <Link to="/account" className="gb-icon-btn" aria-label="Account">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#fff"/>
            </svg>
            <span className="gb-icon-text">Account</span>
          </Link>

          <Link to="/cart" className="gb-icon-btn" aria-label={`Cart with ${cartCount} items`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M7 4h-2l-1 2v2h2l3.6 7.59-1.35 2.44C8.52 18.37 9.48 20 11 20h8v-2h-7.2c-.14 0-.25-.08-.3-.2l.03-.03L14.1 16h3.45c.75 0 1.41-.41 1.75-1.03L22 7H6.21" fill="#fff"/>
            </svg>
            <span className="gb-icon-text">Cart</span>
            <span className="gb-count" aria-hidden>{cartCount}</span>
          </Link>
        </nav>
      </div>

      {showMobileSearch && (
        <div className="gb-mobile-search-overlay" role="search" aria-label="Mobile search overlay">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M21 21l-4.35-4.35" stroke="#4d233d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="11" r="6" stroke="#4d233d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            className="gb-mobile-search-input"
            type="search"
            aria-label="Search products"
            placeholder="Search foundations, lipsticks, skincare..."
            autoFocus
          />
          <button
            className="gb-mobile-close-btn"
            aria-label="Close search"
            onClick={() => setShowMobileSearch(false)}
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

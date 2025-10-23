import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ background: '#fff', padding: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#e91e63' }}>GlowBeauty</Link>
        <nav>
          <Link to="/products" style={{ margin: '0 15px', textDecoration: 'none', color: '#333' }}>Products</Link>
          <Link to="/cart" style={{ margin: '0 15px', textDecoration: 'none', color: '#333' }}>Cart (0)</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

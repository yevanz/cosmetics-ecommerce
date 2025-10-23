import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Placeholder: Fetch from backend API
    // fetch('/api/products?featured=true')
    //   .then(res => res.json())
    //   .then(data => setFeaturedProducts(data));

    // Temporary hardcoded products
    setFeaturedProducts([
      { id: 1, name: 'Rose Lip Balm', price: 15, image: 'https://via.placeholder.com/300x300?text=Rose+Lip+Balm' },
      { id: 2, name: 'Hydrating Serum', price: 25, image: 'https://via.placeholder.com/300x300?text=Hydrating+Serum' },
    ]);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(to right, #fce4ec, #f8bbd0)',
          padding: '50px',
          textAlign: 'center',
        }}
      >
        <h1>Welcome to GlowBeauty</h1>
        <p>Discover premium cosmetics for every woman.</p>
        <Link to="/products" className="btn">Shop Now</Link>
      </section>

      {/* Featured Products */}
      <section style={{ maxWidth: '1200px', margin: '40px auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Featured Products</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          {featuredProducts.map(product => (
            <div
              key={product.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '15px',
                textAlign: 'center',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <h3 style={{ marginTop: '10px' }}>{product.name}</h3>
              <p style={{ color: '#e91e63', fontWeight: 'bold' }}>${product.price}</p>
              <Link to={`/product/${product.id}`} className="btn">View Details</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;


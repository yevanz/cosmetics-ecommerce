import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Placeholder: Fetch from backend API
    // fetch('/api/products?featured=true').then(res => res.json()).then(data => setFeaturedProducts(data));
    setFeaturedProducts([
      { id: 1, name: 'Rose Lip Balm', price: 15, image: 'https://via.placeholder.com/300x300?text=Lip+Balm' },
      { id: 2, name: 'Hydrating Serum', price: 25, image: 'https://via.placeholder.com/300x300?text=Serum' },
    ]);
  }, []);

  return (
    <div>
      <section style={{ background: 'linear-gradient(to right, #fce4ec, #f8bbd9)', padding: '50px', textAlign: 'center' }}>
        <h1>Welcome to GlowBeauty</h1>
        <p>Discover premium cosmetics for every woman.</p>
        <Link to="/products" className="btn">Shop Now</Link>
      </section>
      <section style={{ maxWidth: '1200px', margin: '20px auto' }}>
        <h2>Featured Products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {featuredProducts.map(product => (
            <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <Link to={`/product/${product.id}`} className="btn">View Details</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;

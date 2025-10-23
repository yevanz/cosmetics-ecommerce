import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Placeholder: Fetch from backend
    setProduct({ id, name: 'Rose Lip Balm', price: 15, description: 'Nourishing and hydrating.', image: 'https://via.placeholder.com/400x400?text=Lip+Balm' });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button className="btn" onClick={() => alert('Added to cart!')}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;

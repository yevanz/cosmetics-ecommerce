import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { getProductById, products } from '../data/products';
import './Products.css';

const Products = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct);
      
      // Get related products (same category, excluding current product)
      if (foundProduct) {
        const related = products
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    } else {
      // If no ID, show all products
      setRelatedProducts(products);
    }
  }, [id]);

  if (id && !product) {
    return (
      <div className="products-container">
        <h1>Product not found</h1>
        <p>The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  if (id && product) {
    // Single product view
    return (
      <div className="product-detail-container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image || '/images/default-product.jpg'} alt={product.name} />
          </div>
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p className="product-category">{product.category}</p>
            <p className="product-description">{product.description}</p>
            <div className="product-detail-price">
              {product.discount ? (
                <>
                  <span className="original-price">${product.price}</span>
                  <span className="discounted-price">
                    ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                  <span className="discount-badge">-{product.discount}%</span>
                </>
              ) : (
                <span>${product.price}</span>
              )}
            </div>
            <button 
              className="product-detail-btn"
              onClick={() => addToCart(product, 1)}
            >
              Add to Cart
            </button>
          </div>
        </div>
        
        {relatedProducts.length > 0 && (
          <section className="related-products">
            <h2>Related Products</h2>
            <div className="product-grid">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} showDiscount={true} />
              ))}
            </div>
          </section>
        )}
      </div>
    );
  }

  // Product listing view (fallback - should use ProductListing component)
  return (
    <div className="products-container">
      <h1 className="products-title">Ladies' Products 💄</h1>
      <p className="products-subtitle">Explore our beautiful collection!</p>

      <div className="products-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} showDiscount={true} />
          ))
        ) : (
          <p className="no-products">No products available yet.</p>
        )}
      </div>
    </div>
  );
};

export default Products;

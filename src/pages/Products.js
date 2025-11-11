import React, { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  return (
    <div className="products-container">
      <h1 className="products-title">Ladies’ Products 💄</h1>
      <p className="products-subtitle">Explore our beautiful collection!</p>

      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="product-card">
              <img
                src={product.image || "/images/default-product.jpg"}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">KSh {product.price}</p>
              <button className="product-btn">Add to Cart</button>
            </div>
          ))
        ) : (
          <p className="no-products">No products available yet.</p>
        )}
      </div>
    </div>
  );
};

export default Products;


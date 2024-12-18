import React, { useEffect, useState } from "react";
import { fetchProducts } from "../utils/shopifyUtils";
import "../../assets/styles/shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(); // Fetch products via utility
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="shop-container">
      <h1>Shop Our Collection</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.shopifyId} className="product-card">
            <img
              src={product.imageUrl || "placeholder.jpg"}
              alt={product.title}
              className="product-image"
            />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <a
                // href={`https://${process.env.REACT_APP_SHOPIFY_STORE}/products/${product.shopifyHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shop-now-button"
              >
                View on Shopify
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

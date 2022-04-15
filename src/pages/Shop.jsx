import React from "react";
import "./shop.css";

const Shop = ({ products, addToCart }) => {
  return (
    <div className="shop-container">
      <div className="featured-title">Cards</div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-container">
            <div className="product">
              <div className="product-image">
                <img src={product.img} alt="something" />
              </div>
              <div className="product-details">
                <div className="product-title">{product.title}</div>
                <div className="product-price">{product.price}</div>
                <button
                  onClick={() => {
                    addToCart(product);
                  }}
                  className="product-button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

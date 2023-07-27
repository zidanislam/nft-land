import React from "react";
import "./product.css";
const Product = ({ product }) => {
  const { name, price, image } = product;
  return (
    <div className="product-card">
      <img className="product-img" src={image} alt="" />
      <h2 className="product-name">{name}</h2>
      <h4 className="product-price">{price}</h4>
      <button className="product-btn">Place Your Bid</button>
    </div>
  );
};

export default Product;

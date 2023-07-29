import { motion } from "framer-motion";
import React from "react";
import "./product.css";
const Product = ({ product }) => {
  const { name, price, image } = product;
  return (
    <motion.div layout className="product-card">
      <img className="product-img" src={image} alt="" />
      <h2 className="product-name">{name}</h2>
      <h4 className="product-price">{price}</h4>
      <button className="product-btn">Place Your Bid</button>
    </motion.div>
  );
};

export default Product;

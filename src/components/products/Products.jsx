import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Filter from "../filter/Filter";
import useProductApi from "../hooks/useProductApi";
import "./products.css";

const Products = () => {
  const [filtered, setFilterd] = useState([]);
  const [activeItem, setActiveItem] = useState("all");
  const products = useProductApi();
  useEffect(() => {
    if (activeItem === "all") {
      setFilterd(products);
      return;
    } else {
      const filtered = products.filter((product) =>
        product.categories.includes(activeItem)
      );
      console.log(filtered);
      setFilterd(filtered);
    }
  }, [activeItem, products]);
  return (
    <>
      <div className="all-products">
        <h2 className="section-heading">Explore All</h2>
        <Filter activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>
      <motion.div layout className="products">
        {filtered.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </motion.div>
    </>
  );
};

export default Products;

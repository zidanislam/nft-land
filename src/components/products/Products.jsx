import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Filter from "../filter/Filter";
import useProductApi from "../hooks/useProductApi";

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
      <div>
        <h2>Explore All</h2>
        <Filter
          products={products}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setFilterd={setFilterd}
        />
      </div>
      <div className="products">
        {filtered.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;

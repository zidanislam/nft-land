import React from "react";
import Product from "../Product/Product";
import useProductApi from "../hooks/useProductApi";

const Products = () => {
  const products = useProductApi();
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

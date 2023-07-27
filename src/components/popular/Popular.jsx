import React from "react";
import Product from "../Product/Product";
import useTopItems from "../hooks/useTopItems";

const Popular = () => {
  const topItems = useTopItems();
  return (
    <div id="topopular">
      <div className="spinner-section">
        <div></div>
        <h2 className="section-heading">Top Items</h2>
      </div>
      <div className="products">
        {topItems.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Popular;

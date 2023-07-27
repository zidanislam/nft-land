import React from "react";
import Product from "../Product/Product";
import usePostPerPage from "../hooks/usePostPerPage";

const Live = () => {
  const liveBids = usePostPerPage();
  return (
    <div id="tolive">
        <div className="spinner-section">
            <div className="spinner spinner-1"></div>
            <h2 className="section-heading">Live Bidding</h2>
        </div>
      <div className="products">
        {liveBids.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Live;

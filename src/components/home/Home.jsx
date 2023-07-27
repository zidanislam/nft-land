import React from "react";
import Hero from "../hero/Hero";
import Live from "../live/Live";
import Popular from "../popular/Popular";
import Products from "../products/Products";
import SideNav from "../sideNav/SideNav";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="bar">
        <SideNav />
      </div>
      <div className="home-components">
        <Hero />
        <Live id="tolive" />
        <Popular />
        <Products />
      </div>
    </div>
  );
};

export default Home;

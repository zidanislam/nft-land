import React from "react";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import useNavState from "../hooks/useNavState";
import Info from "../info/Info";
import Live from "../live/Live";
import Popular from "../popular/Popular";
import Products from "../products/Products";
import SideNav from "../sideNav/SideNav";
import "./home.css";

const Home = () => {
  const navState = useNavState();
  return (
    <div className="home-container">
      <div className="bar">
        <SideNav navState={navState} />
      </div>
      <div className="home-components">
        <Hero navState={navState} />
        <Live />
        <Popular />
        <Products />
        <Info />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

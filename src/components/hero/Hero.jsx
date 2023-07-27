import React from "react";
import { Link as LinkScroll } from "react-scroll";
import "./hero.css";

const Hero = () => {
  const myStyle = {
    backgroundImage: "url('https://i.imgur.com/UPE0qGv.jpg')",
    height: "60vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: "30px",
    borderRadius: "10px",
    textShadow: "2px 2px 2px rgba(0,0,0,.5)",
    position: "relative",
  };
  return (
    <div  id="tohero" style={myStyle}>
      <div className="heading">
        <div>
          <p>
            The term fungible means something that can be replaced by something
            similar. So, by the name Non Fungible Tokens, we can easily
            understand.
          </p>
          <LinkScroll to="toall" smooth={true} duration={500}>
            <button className="btn">Shop Now</button>
          </LinkScroll>
        </div>
        <h3>Discover Rare Digital art & collect NFT's</h3>
        <img src="https://i.imgur.com/9YMTvk8.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import logo from "../../images/logo.png";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" />
      <p><small>© 2023. All rights reserved by Zidan Islam.</small></p>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link as LinkScroll } from "react-scroll";
import logo from "../../images/logo.png";
import "./sidenav.css";

const SideNav = () => {
  return (
    <div className="nav-bar">
      <LinkScroll to="tohero" smooth={true} duration={500}>
        <img className="logo" src={logo} alt="logo" />
      </LinkScroll>
      <div className="nav-item">
        <LinkScroll to="tohero" smooth={true} duration={500}>
          <p>Home</p>
        </LinkScroll>
        <LinkScroll to="tolive" smooth={true} duration={500}>
          <p>Live</p>
        </LinkScroll>
        <LinkScroll to="topopular" smooth={true} duration={500}>
          <p>Popular</p>
        </LinkScroll>
        <LinkScroll to="toall" smooth={true} duration={500}>
          <p>All Items</p>
        </LinkScroll>
        <LinkScroll to="toicon" smooth={true} duration={500}>
          <p>Info</p>
        </LinkScroll>
      </div>
    </div>
  );
};

export default SideNav;

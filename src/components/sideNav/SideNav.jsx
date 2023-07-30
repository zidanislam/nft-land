import {
  faCubesStacked,
  faFireFlameCurved,
  faHeartPulse,
  faHouseChimney,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link as LinkScroll } from "react-scroll";
import logo from "../../images/logo.png";
import "./sidenav.css";

const SideNav = () => {
  return (
    <div className="nav-bar">
      <LinkScroll
        className="nav-item"
        to="tohero"
        smooth={true}
        offset={-40}
        duration={500}
      >
        <img className="logo" src={logo} alt="logo" />
      </LinkScroll>
      <div className="nav-items">
        <LinkScroll
          className="nav-item"
          to="tohero"
          smooth={true}
          offset={-30}
          duration={500}
        >
          <FontAwesomeIcon icon={faHouseChimney} />
          <p>Home</p>
        </LinkScroll>
        <LinkScroll
          className="nav-item"
          to="tolive"
          smooth={true}
          offset={-30}
          duration={500}
        >
          <FontAwesomeIcon icon={faHeartPulse} />
          <p>Live</p>
        </LinkScroll>
        <LinkScroll
          className="nav-item"
          to="topopular"
          smooth={true}
          offset={-30}
          duration={500}
        >
          <FontAwesomeIcon icon={faFireFlameCurved} />
          <p>Popular</p>
        </LinkScroll>
        <LinkScroll
          className="nav-item"
          to="toall"
          smooth={true}
          offset={-30}
          duration={500}
        >
          <FontAwesomeIcon icon={faCubesStacked} />
          <p>All Items</p>
        </LinkScroll>
        <LinkScroll
          className="nav-item"
          to="toinfo"
          smooth={true}
          offset={-30}
          duration={500}
        >
          <FontAwesomeIcon icon={faLightbulb} />
          <p>Info</p>
        </LinkScroll>
      </div>
    </div>
  );
};

export default SideNav;

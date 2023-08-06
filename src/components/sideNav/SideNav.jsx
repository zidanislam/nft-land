import {
  faCubesStacked,
  faFireFlameCurved,
  faHeartPulse,
  faHouseChimney,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import logo from "../../images/logo.png";
import "./sidenav.css";

const SideNav = ({ navState }) => {
  const [selected, setSelected] = useState("");
  const { Sidenav_animation, open, setOpen } = navState;
  return (
    <>
      <motion.div
        variants={Sidenav_animation}
        animate={open ? "open" : "closed"}
        className="nav-bar"
      >
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
            className={selected === "home" ? "nav-item selected" : "nav-item"}
            onClick={() => {
              setSelected("home");
              setOpen(false);
            }}
            to="tohero"
            smooth={true}
            offset={-30}
            duration={500}
          >
            <FontAwesomeIcon icon={faHouseChimney} />
            <p>Home</p>
          </LinkScroll>
          <LinkScroll
            className={selected === "live" ? "nav-item selected" : "nav-item"}
            onClick={() => {
              setSelected("live");
              setOpen(false);
            }}
            to="tolive"
            smooth={true}
            offset={-30}
            duration={500}
          >
            <FontAwesomeIcon icon={faHeartPulse} />
            <p>Live</p>
          </LinkScroll>
          <LinkScroll
            className={
              selected === "popular" ? "nav-item selected" : "nav-item"
            }
            onClick={() => {
              setSelected("popular");
              setOpen(false);
            }}
            to="topopular"
            smooth={true}
            offset={-30}
            duration={500}
          >
            <FontAwesomeIcon icon={faFireFlameCurved} />
            <p>Popular</p>
          </LinkScroll>
          <LinkScroll
            className={
              selected === "all-items" ? "nav-item selected" : "nav-item"
            }
            onClick={() => {
              setSelected("all-items");
              setOpen(false);
            }}
            to="toall"
            smooth={true}
            offset={-30}
            duration={500}
          >
            <FontAwesomeIcon icon={faCubesStacked} />
            <p>All Items</p>
          </LinkScroll>
          <LinkScroll
            className={selected === "info" ? "nav-item selected" : "nav-item"}
            onClick={() => {
              setSelected("info");
              setOpen(false);
            }}
            to="toinfo"
            smooth={true}
            offset={-30}
            duration={500}
          >
            <FontAwesomeIcon icon={faLightbulb} />
            <p>Info</p>
          </LinkScroll>
        </div>
      </motion.div>
      <div
        onClick={() => setOpen(false)}
        className={open ? "overlay show" : "overlay hide"}
      ></div>
    </>
  );
};

export default SideNav;

import {
  faBars,
  faCubesStacked,
  faFireFlameCurved,
  faHeartPulse,
  faHouseChimney,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link as LinkScroll } from "react-scroll";
import logo from "../../images/logo.png";
import "./sidenav.css";

const SideNav = () => {
  const [selected, setSelected] = useState("");
  let isTab = useMediaQuery({ query: "(max-width:768px)" });
  const [open, setOpen] = useState(isTab ? false : true);
  const Sidenav_animation = isTab
    ? {
        open: {
          x: 0,
          width: "200px",
          fontSize: "16px",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: "0px",
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "250px",
          fontSize: "18px",
          transition: {
            damping: 40,
          },
        },
      };
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
      <div className="mobile-menu" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faBars} size="xl" />
      </div>
    </>
  );
};

export default SideNav;

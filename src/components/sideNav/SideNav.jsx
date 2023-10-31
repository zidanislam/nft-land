import {
  faCubesStacked,
  faFireFlameCurved,
  faHeartPulse,
  faHouseChimney,
  faLightbulb,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import logo from "../../images/logo.png";
import LoginPopup from "../login-register/LoginPopup";
import "./sidenav.css";

const SideNav = ({ navState }) => {
  const [popUp, setPopUp] = useState(false);
  const [selected, setSelected] = useState("");
  const { Sidenav_animation, open, setOpen } = navState;

  const close = () => {
    setPopUp(false);
    document.body.classList.remove("no-scroll");
  };
  const popUpOpen = () => {
    setPopUp(true);
    document.body.classList.add("no-scroll");
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
            spy={true}
            offset={-50}
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
            spy={true}
            smooth={true}
            offset={-50}
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
            spy={true}
            smooth={true}
            offset={-50}
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
            spy={true}
            smooth={true}
            offset={-50}
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
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <FontAwesomeIcon icon={faLightbulb} />
            <p>Info</p>
          </LinkScroll>
          <motion.div
            className="nav-item"
            onClick={() => {
              setOpen(false);
              popUp ? close() : popUpOpen();
            }}
          >
            <FontAwesomeIcon icon={faUser} />
            <p>LogIn/Register</p>
          </motion.div>
        </div>
      </motion.div>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {popUp && <LoginPopup popUp={popUp} handleClose={close} />}
      </AnimatePresence>
      <div
        onClick={() => setOpen(false)}
        className={open ? "overlay show" : "overlay hide"}
      ></div>
    </>
  );
};

export default SideNav;

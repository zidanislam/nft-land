import {
  faBars,
  faMagnifyingGlass,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import React, { useContext, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { AuthContext } from "../../context/AuthContext";
import AddAuction from "../addAuction/AddAuction";
import "./hero.css";

const Hero = ({ navState }) => {
  const { setOpen } = navState;
  const { currentUser } = useContext(AuthContext);
  const [popUp, setPopUp] = useState(false);

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
      <div id="tohero" className="header">
        <div
          className="mobile-menu"
          onClick={() => {
            setOpen(true);
          }}
        >
          <FontAwesomeIcon icon={faBars} size="2xl" />
        </div>

        <div className="header-item search-bar">
          {currentUser && (
            <button
              onClick={() => {
                setOpen(false);
                popUp ? close() : popUpOpen();
              }}
            >
              Add Auction +
            </button>
          )}
          <input className="search" type="search" placeholder="Search..." />
          <FontAwesomeIcon
            className="search-icon"
            icon={faMagnifyingGlass}
            size="xl"
          />
        </div>
        <div className="header-item contact">
          <a
            href="https://api.whatsapp.com/send?phone=8801847310885"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="social" size="lg" icon={faPhone} />
          </a>

          <a
            href="mailto:zidantwinkle@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="social" size="lg" icon={faMessage} />
          </a>
          {currentUser ? (
            <button className="user-name" disabled>
              Hi! {currentUser.email}
            </button>
          ) : null}
        </div>
      </div>
      <div className="bg-img">
        <div className="heading">
          <div id="text">
            <p>
              The term fungible means something that can be replaced by
              something similar. So, by the name Non Fungible Tokens, we can
              easily understand.
            </p>
            <LinkScroll to="toall" smooth={true} duration={500}>
              <button className="btn">Shop Now</button>
            </LinkScroll>
          </div>
          <h3 id="headline">Discover Rare Digital art & collect NFT&apos;s</h3>
          <img id="seal" src="https://i.imgur.com/9YMTvk8.png" alt="" />
        </div>
      </div>

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {popUp && <AddAuction popUp={popUp} handleClose={close} />}
      </AnimatePresence>
      <div
        onClick={() => setOpen(false)}
        className={open ? "overlay show" : "overlay hide"}
      ></div>
    </>
  );
};

export default Hero;

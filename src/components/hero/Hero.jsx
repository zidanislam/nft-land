import {
  faBars,
  faMagnifyingGlass,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link as LinkScroll } from "react-scroll";
import "./hero.css";

const Hero = ({ navState }) => {
  const { setOpen } = navState;

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
    </>
  );
};

export default Hero;

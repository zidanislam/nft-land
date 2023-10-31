import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Backdrop from "../backdrop/Backdrop";
import "./login-popup.css";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const LoginPopup = ({ handleClose, text }) => {
  const [login, isLogin] = useState(true);
  return (
    <Backdrop onClick={(handleClose, text)}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="wrapper"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="title">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="close"
            onClick={handleClose}
          />
          <p onClick={() => isLogin(true)}>Login</p>
          <p>/</p>
          <p onClick={() => isLogin(false)}>Register</p>
        </div>
        {login ? (
          <form action="#">
            <div className="field">
              <input type="text" required />
              <label>Email Address</label>
            </div>
            <div className="field">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="content">
              <div className="checkbox">
                <input type="checkbox" id="remember-me" />
                <label>Remember me</label>
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div className="field button-parent">
              <button type="submit" value="Login">
                Login
              </button>
            </div>
            <div className="signup-link">
              Not a member? <a onClick={() => isLogin(false)}>Signup now</a>
            </div>
          </form>
        ) : (
          <form action="#">
            <div className="field">
              <input type="text" required />
              <label>Email Address</label>
            </div>
            <div className="field">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="field">
              <input type="password" required />
              <label>Confirm Password</label>
            </div>
            <div className="field button-parent">
              <button type="submit" value="Login">
                Login
              </button>
            </div>
            <div className="signup-link">
              Already have an account?{" "}
              <a onClick={() => isLogin(true)}>Login</a>
            </div>
          </form>
        )}
      </motion.div>
    </Backdrop>
  );
};

export default LoginPopup;

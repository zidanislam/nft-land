import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
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
  const [loginForm, setLoginForm] = useState(true);
  const [error, setError] = useState("");

  const loginEmailRef = useRef();
  const loginPassRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();

  const { register, login } = useContext(AuthContext);

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await login(loginEmailRef.current.value, loginPassRef.current.value);
      handleClose();
    } catch (error) {
      setError(error.message);
    }
  };

  const submitRegForm = async (e) => {
    e.preventDefault();
    setError("");

    if (passRef.current.value !== confirmPassRef.current.value) {
      return setError("Passwords don't match");
    }
    try {
      await register(emailRef.current.value, passRef.current.value);
      handleClose();
    } catch (error) {
      setError(error.message);
    }

    console.log(`email is ${emailRef.current.value}`);
    console.log(`pass is ${passRef.current.value}`);
    console.log(`confirmPass is ${confirmPassRef.current.value}`);
    emailRef.current.value = "";
    passRef.current.value = "";
    confirmPassRef.current.value = "";
  };
  return (
    <Backdrop onClick={handleClose}>
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
          <p onClick={() => setLoginForm(true)}>Login</p>
          <p>/</p>
          <p onClick={() => setLoginForm(false)}>Register</p>
        </div>
        {loginForm ? (
          <form action="#">
            {/* {error && <p className="error">{error}</p>} */}
            <div className="field">
              <input type="email" required ref={loginEmailRef} />
              <label>Email Address</label>
            </div>
            <div className="field">
              <input type="password" required ref={loginPassRef} />
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
              <button type="submit" value="Login" onClick={submitForm}>
                Login
              </button>
            </div>
            <div className="signup-link">
              Not a member?{" "}
              <a onClick={() => setLoginForm(false)}>Register now</a>
            </div>
          </form>
        ) : (
          <form action="#">
            {error && <p className="error">{error}</p>}
            <div className="field">
              <input type="email" ref={emailRef} required />
              <label>Email Address</label>
            </div>
            <div className="field">
              <input type="password" ref={passRef} required />
              <label>Password</label>
            </div>
            <div className="field">
              <input type="password" ref={confirmPassRef} required />
              <label>Confirm Password</label>
            </div>
            <div className="field button-parent">
              <button type="submit" value="Register" onClick={submitRegForm}>
                Register
              </button>
            </div>
            <div className="signup-link">
              Already have an account?{" "}
              <a onClick={() => setLoginForm(true)}>Login</a>
            </div>
          </form>
        )}
      </motion.div>
    </Backdrop>
  );
};

export default LoginPopup;

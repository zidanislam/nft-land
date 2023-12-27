import { motion } from "framer-motion";
import React, { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import Backdrop from "../backdrop/Backdrop";
import "./addAuction.css";

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
const AddAuction = ({ handleClose, text }) => {
  const { login, currentUser } = useContext(AuthContext);
  const itemName = useRef();
  const itemDesc = useRef();
  const itemDuration = useRef();
  const itemImage = useRef();
  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await login(loginEmailRef.current.value, loginPassRef.current.value);
      handleClose();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="wrap"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <form action="#">
            {/* {error && <p className="error">{error}</p>} */}
            <h3 className="title">List New Auction</h3>
            <div className="field">
              <input type="text" required ref={itemName} />
              <label>Item Title</label>
            </div>
            <div className="field">
              <input type="text" required ref={itemDesc} />
              <label>Item Description</label>
            </div>
            <div className="price-img">
              <div className="field">
                <input type="number" required />
                <label>Start Price</label>
              </div>
              <div className="field">
                <input type="number" required ref={itemDuration} />
                <label>Item Duration</label>
              </div>
            </div>
            <div className="price-img">
              <div className="field">
                <input
                  type="file"
                  accept="image/*"
                  label="Select Item Image"
                  name="image"
                  id="file"
                  required
                  ref={itemImage}
                />
              </div>
              <div className="field">
                <input type="text" readOnly value={currentUser.email} />
              </div>
            </div>
            <div className="field button-parent">
              <button type="submit" value="Submit" onClick={submitForm}>
                Publish
              </button>
            </div>
          </form>
        </motion.div>
      </Backdrop>
    </div>
  );
};

export default AddAuction;

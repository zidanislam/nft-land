import React from "react";
import "./info.css";

const Info = () => {
  return (
    <section id="toinfo" className="info-section">
      <div className="info">
        <div className="info-head">
          <p>STEP-01</p>
          <img src="https://i.imgur.com/pxCT8Li.png" alt="" />
        </div>
        <h2 className="title">Set up your wallet</h2>
        <p className="desc">
          Powerful features and inclusions, which makes Nuron standout, easily
          customizable and scalable.
        </p>
        <button></button>
      </div>
      <div className="info">
        <div className="info-head">
          <p>STEP-02</p>
          <img src="https://i.imgur.com/jc8IEha.png" alt="" />
        </div>
        <h2 className="title">Create your collection</h2>
        <p className="desc">
          A great collection of beautiful website templates for your need.
          Choose the best suitable template.
        </p>
        <button></button>
      </div>
      <div className="info">
        <div className="info-head">
          <p>STEP-03</p>
          <img src="https://i.imgur.com/njkhawG.png" alt="" />
        </div>
        <h2 className="title">Add your NFT&apos;s</h2>
        <p className="desc">
          We&apos;ve made the template fully responsive, so it looks great on
          all devices: desktop, tablets and.
        </p>
        <button></button>
      </div>
    </section>
  );
};

export default Info;

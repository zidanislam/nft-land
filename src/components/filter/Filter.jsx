import React from "react";

const Filter = ({ setActiveItem }) => {
  return (
    <div>
      <button onClick={() => setActiveItem("all")}>All</button>
      <button
        onClick={() => {
          setActiveItem("Art");
        }}
      >
        Art
      </button>
      <button
        onClick={() => {
          setActiveItem("Video");
        }}
      >
        Video
      </button>
      <button onClick={() => setActiveItem("AI")}>AI</button>
    </div>
  );
};

export default Filter;

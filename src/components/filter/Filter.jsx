import React from "react";

const Filter = ({ setActiveItem, activeItem }) => {
  return (
    <div>
      <button
        className={activeItem === "all" ? "active" : ""}
        onClick={() => setActiveItem("all")}
      >
        All
      </button>
      <button
        className={activeItem === "Art" ? "active" : ""}
        onClick={() => {
          setActiveItem("Art");
        }}
      >
        Art
      </button>
      <button
        className={activeItem === "Video" ? "active" : ""}
        onClick={() => {
          setActiveItem("Video");
        }}
      >
        Video
      </button>
      <button
        className={activeItem === "AI" ? "active" : ""}
        onClick={() => setActiveItem("AI")}
      >
        AI
      </button>
    </div>
  );
};

export default Filter;

import React from "react";

const Filter = ({ setActiveItem, activeItem }) => {
  return (
    <div className="filter-buttons">
      <button 
        className={activeItem === "all" ? "active-filter filter-btn" : "filter-btn"}
        onClick={() => setActiveItem("all")}
      >
        All
      </button>
      <button
        className={activeItem === "Art" ? "active-filter filter-btn" : "filter-btn"}
        onClick={() => {
          setActiveItem("Art");
        }}
      >
        Art
      </button>
      <button
        className={activeItem === "Video" ? "active-filter filter-btn" : "filter-btn"}
        onClick={() => {
          setActiveItem("Video");
        }}
      >
        Video
      </button>
      <button
        className={activeItem === "AI" ? "active-filter filter-btn" : "filter-btn"}
        onClick={() => setActiveItem("AI")}
      >
        AI
      </button>
    </div>
  );
};

export default Filter;

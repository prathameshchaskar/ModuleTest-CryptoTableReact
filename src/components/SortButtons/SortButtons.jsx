import React from "react";
import "./SortButtons.css";

const SortButtons = ({ handleSort }) => {
  return (
    <div className="sort-buttons">
      <button
        className="sort-button"
        onClick={() => handleSort("current_price")}
      >
        Sort by Current Price
      </button>
      <button
        className="sort-button"
        onClick={() => handleSort("total_volume")}
      >
        Sort by Total Volume
      </button>
    </div>
  );
};

export default SortButtons;

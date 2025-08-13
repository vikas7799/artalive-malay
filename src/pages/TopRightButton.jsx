// src/components/TopRightButton.jsx
import React from "react";

const TopRightButton = ({ label = "Go to Soalan Lazim", onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
          position: "absolute",
        top: "100px",     // You can reduce this to "20px" if needed
        right: "20px",   // Same here
        cursor: "pointer",
        zIndex: 99,
      }}
      className="btn button1"
    >
      {label}
    </button>
  );
};

export default TopRightButton;

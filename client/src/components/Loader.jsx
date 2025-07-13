import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="zugo-loader-overlay">
      <div className="zugo-loader-circle"></div>
      <div className="zugo-loader-text">ZUGO</div>
    </div>
  );
}

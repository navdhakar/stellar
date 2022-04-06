import React from "react";
import "./Home.css";
import image from "../assets/icons/asteroid.png";
import { Link, Redirect, useHistory } from "react-router-dom";
export default function Home() {
  return (
    <div className="container">
      <div className="leftsection">
        <div className="logo">
          <div>Stellar</div> <div style={{ color: "#C6C6C6" }}>AI</div>
        </div>
        <div className="hometext">
          <span>Making </span>
          <span className="aiml">AI/ML</span> <span>accessible </span>
          <span style={{ marginLeft: "10px" }}>to all</span>
        </div>
        <div className="button-container">
          <Link to="/Selection">
            <button className="button-style">
              <div className="button-text">get started</div>
            </button>
          </Link>
          <Link to="/Selection">
            <button className="button-style">
              <div className="button-text">read docs</div>
            </button>
          </Link>
        </div>
      </div>
      <div className="rightsection">
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={image} alt="asteroid" className="asteroid" />
        </div>
      </div>
    </div>
  );
}

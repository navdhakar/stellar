import React, { useState } from "react";
import "./Home.css";
import image from "../assets/icons/asteroid.png";
import LoginHooks from "../Login";
import Logout from "../Logout";
import "../auth.css";
import signup from "../signup";
import { Link, Redirect, useHistory } from "react-router-dom";
export default function Home() {
  const [Global_auth_state, setGlobal_auth] = useState("");
  const Global_auth = (response_data) => {
    setGlobal_auth(response_data);
    console.log(Global_auth_state.profileObj);
  };
  function Signup() {
    if (Global_auth_state == "failure" || Global_auth_state == false) {
      return <LoginHooks Global_auth={Global_auth} />;
    } else {
      return (
        <div style={{ flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              fontSize: "25px",
              cursor: "pointer",
              flexDirection: "row",
              justifyContent: "center",

              height: "8vh",
              alignItems: "center",
            }}
          >
            <img src={Global_auth_state.profileObj.imageUrl} alt="profile_pic" className="icon_profile" />
            {Global_auth_state.profileObj.name}
          </div>
          <Logout Global_auth={Global_auth} />
        </div>
      );
    }
  }

  return (
    <div className="container">
      <div className="leftsection">
        <div className="logo">
          <div style={{ flex: 5, flexDirection: "row" }}>
            <div>
              Stellar <span style={{ color: "#C6C6C6" }}>AI</span>
            </div>
          </div>

          <Signup />
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

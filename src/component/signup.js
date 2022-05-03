import React, { useState } from "react";
import LoginHooks from "./Login";
import Logout from "./Logout";
import "./auth.css";
export default function Signup({ Global_auth }) {
  const [response, setResponse] = useState("");

  const Authresponse = (response_data) => {
    setResponse(response_data);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", justifyContent: "center" }} className="signup">
      <LoginHooks Authresponse={Authresponse} />
    </div>
  );
}

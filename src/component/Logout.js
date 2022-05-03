import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

function Logout({ Global_auth }) {
  const onSuccess = () => {
    alert("Signed out successfully 👋");
    Global_auth("failure");
  };

  return (
    <div>
      <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onSuccess}></GoogleLogout>
    </div>
  );
}

export default Logout;

import React, { useState } from "react";
import { useGoogleLogin } from "react-google-login";
import "./auth.css";
// refresh token
import { refreshTokenSetup } from "./refreshToken";

const clientId = "612470439960-9cr8dfia2v3hr89no7emec851rrt9sug.apps.googleusercontent.com";

function LoginHooks({ Global_auth }) {
  const onSuccess = (res) => {
    Global_auth(res);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login.😢`);
    Global_auth("failure");
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <div onClick={signIn} className="button-auth">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText-auth">Sign in</span>
    </div>
  );
}

export default LoginHooks;

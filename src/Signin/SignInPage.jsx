import React from "react";
import GoogleLoginButton from "../GoogleLoginButton";
import "./SignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignInPage = () => {
  const handleSuccess = (response) => {
    // Handle successful sign-in
    console.log("Successful sign-in:", response);
    // You can redirect the user to another page or perform other actions after successful sign-in
  };

  const handleFailure = (error) => {
    // Handle sign-in failure
    console.error("Sign-in error:", error);
    // You can display an error message to the user or log the error for debugging
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <h2 className="signin-title">Sign In with</h2>
        <div className="google-icon-container"></div>
        <div>
          <FontAwesomeIcon icon={faGoogle} className="google-icon" />
        </div>
       
      </div>
      <div className="button">
      <GoogleLoginButton
          onSuccess={handleSuccess}
          onFailure={handleFailure}
        />
      </div>
     
      

      <p className="signin-footer">
        By signing in with Google, you agree to our{" "}
        <a href="/terms">Terms of Service</a> and{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default SignInPage;

/* eslint-disable react/prop-types */
import { useState } from "react";
import "./login.css";
import cross_icon from "../../assets/cross_icon.png"; // Ensure the path is correct

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign up");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login or signup logic here
    console.log("Form Submitted");
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={cross_icon}
            alt="cross_icon"
            className="close-icon"
            onClick={() => setShowLogin(false)} // This closes the modal when clicked
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign up" && (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>

        {/* Submit button */}
        <button type="submit">
          {currentState === "Sign up" ? "Create Account" : "Login"}
        </button>

        {/* For Sign up, show terms and conditions */}
        {currentState === "Sign up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        )}

        {/* Switch between login and signup */}
        {currentState === "Login" ? (
          <p>
            Don't have an account?
            <span onClick={() => setCurrentState("Sign up")}>Sign up here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the active state and fix the position of the toggle-left panel
  const handleSignUpClick = () => {
    setIsActive(true); // Set the active state to true
    const toggleLeftPanel = document.querySelector(".toggle-left");
    if (toggleLeftPanel) {
      toggleLeftPanel.style.transform = "translateX(-620px)"; // Fix position
    
      
    }
  };

  const handleSignInClick = () => {
    setIsActive(false); // Set the active state to false
    const toggleLeftPanel = document.querySelector(".toggle-left");
    if (toggleLeftPanel) {
      toggleLeftPanel.style.transform = "translateX(-620px)"; // Move off-screen
    }
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      {/* Sign Up Form */}
      <div className="sign-up">
        <form>
          <h1>Create Account</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="sign-in">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot password?</a>
          <button type="button" onClick={handleSignInClick}>
            Sign In
          </button>
        </form>
      </div>

      {/* Toggle Panel */}
      <div
        className="toggle-container"
        id="toggle-container"
        style={{ background: isActive ? "#6c63ff" : "white" }}
      >
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p id="NoAcc">Already have an account? Sign in to stay connected!</p>
            <button className="hidden" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p id="NoAcc">Don't have an account? Join us and start your journey!</p>
            <button className="hidden" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

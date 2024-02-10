import React, { useState, useEffect } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username, password,"username password");
  return (
    <>
      {/* <Header/> */}
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            <form class="sign-in-form">
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <input
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  if (username && password) {
                    navigate("/");
                  } else {
                    alert("Please enter username password");
                  }
                }}
                value="Login"
                class="btn solid"
              />
            </form>
            <form class="sign-up-form">
              <h2 class="title">Sign up</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input placeholder="Username" />
              </div>
              {/* <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div> */}
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" class="btn" value="Sign up" />
              <p class="social-text">Or Sign up with social platforms</p>
            </form>
          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              {/* <h3>New here ?</h3> */}
              <h1>Welcome to our website Credible Code</h1>
              {/* <button class="btn transparent" id="sign-up-btn">
              Sign up
            </button> */}
            </div>
            <img src="img/log.svg" class="image" alt="" />
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button class="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img src="img/register.svg" class="image" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div id="header" class="header">
        <div class="social">
          <div class="social-links">
            <div class="email">
              <p>info@medilink.com</p>
            </div>
            <div class="social-media">
              <a href="#" class="facebok">
                <div class="icon-facebok">
                  <i class="fa-brands fa-facebook"></i>
                </div>
              </a>
              <a href="#" class="facebok">
                <div class="icon-facebok">
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </a>
              <a href="#" class="facebok">
                <div class="icon-facebok">
                  <i class="fa-brands fa-twitter"></i>
                </div>
              </a>
              <a href="#/" class="facebok">
                <div class="icon-facebok">
                  <i class="fa-brands fa-linkedin"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <nav class="main-header">
          <div class="logo">
            <h1>
              Medi<span class="green">Link</span>
            </h1>
            {/* <p><small>TECHNOLOGIES</small></p> */}
          </div>
          <nav class="main-nav">
            <ul class="navigations">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#main">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#">Testimonies</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <button class="get-started" id="pop-btn">
              Login/Signup
            </button>
          </nav>
          <div class="menu-container">
            <i class="fa-solid fa-bars"></i>
          </div>
        </nav>
      </div>

      <div id="hero" class="hero">
        <div class="hero-content">
          <p>DATA DRIVEN FARMING</p>
          <h2 class="main-title">EXPERIENCE REAL PREDICTABLE AGRICULTURE</h2>
          <button class="get-started1" id="pop-btn2">
            Get Started
          </button>
        </div>
        <div class="apps">
          <h2>DOWNLOAD OUR APP</h2>
          <div class="links">
            <a href="#" class="playstore-button">
              <img src="data:image/png;base64,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" />
            </a>
            <a href="#" class="applestore-button">
              <img src="data:image/jpeg;base64,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" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

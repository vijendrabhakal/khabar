import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    const body = document.body;
    const header = document.getElementById("header_headlines");

    if (darkMode) {
      body.style.backgroundColor = "#ffffff";
      header.style.color = "#000000";
    } else {
      body.style.backgroundColor = "#000000";
      header.style.color = "#ffffff";
    }

    setDarkMode(!darkMode);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark custom-navbar-bg">
        <div className="container-fluid">
          <Link className="nav-link text-white" to="/">
            <h1 style={{ marginRight: "200px" }}>KHABAR</h1>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
            </ul>
          </div>
          <div className="form-check text-white form-switch mx-5">
            <input
              onClick={toggleMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

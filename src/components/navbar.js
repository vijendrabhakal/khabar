import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  handleDarkModeToggle = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };

  componentDidUpdate() {
    const { darkMode } = this.state;
    if (darkMode) {
      document.body.style.backgroundColor = "#000000";
      document.getElementById("header_headlines").style.color = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.getElementById("header_headlines").style.color = "#000000";
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar-bg">
          <div className="container-fluid">
            <Link className="nav-link text-white" to="/">
              <h1 style={{ marginRight: "200px" }}>KHABAR</h1>
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
            <div className="form-check text-white small form-switch mx-5">
              <input
                onClick={this.handleDarkModeToggle}
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
  }
}

export default Navbar;

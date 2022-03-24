import React from "react";

import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark header sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkups"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkups">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="/shop">
              Shop
            </a>
            <a className="nav-link" href="/Oder">
              Order
            </a>
            <a className="nav-link" href="/Inventory">
              Inventory
            </a>
            <a className="nav-link" href="/About">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

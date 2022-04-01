import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/Logo.svg";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark header sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" />
        </Link>
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
            <CustomLink
              className="nav-link active"
              aria-current="page"
              to="/shop"
            >
              Shop
            </CustomLink>
            <CustomLink className="nav-link" to="/orders">
              Order
            </CustomLink>
            <CustomLink className="nav-link" to="/Inventory">
              Inventory
            </CustomLink>
            <CustomLink className="nav-link" to="/About">
              About
            </CustomLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

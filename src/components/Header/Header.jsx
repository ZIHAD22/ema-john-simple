import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

import logo from "../../images/Logo.svg";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
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
            {user?.uid ? (
              <CustomLink className="nav-link" to="/profile">
                {user?.displayName}
              </CustomLink>
            ) : (
              <>
                <CustomLink className="nav-link" to="/login">
                  Login
                </CustomLink>
                <CustomLink className="nav-link" to="/signUp">
                  Sign Up
                </CustomLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

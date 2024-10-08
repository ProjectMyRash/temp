import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/cafelogo.svg";
import Login from "./Login";
import Registor from "./Registor";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignInClose = () => setShowSignIn(false);
  const handleSignUpClose = () => setShowSignUp(false);

  return (
    <>
    <nav className="navbar navbar-expand-md navbar-light bg-light w-100">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Myrash"
            style={{
              width: "135px",
              height: "36px",
              top: "0px",
              position: "relative",
            }}
          />
        </Link>
        <button
          onClick={handleToggle}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="#navbarSupportedContent"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            menuOpen ? "d-block" : "d-none"
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex flex-column flex-sm-row justify-content-sm-end mt-2 mt-sm-0">
          <button
                className="btn btn-outline-secondary mb-2 mb-sm-0 mx-sm-2"
                onClick={(e) => {
                  e.preventDefault();
                  setShowSignIn(true)
                }}
              >
                Sign-In
              </button>
              <button
                className="btn btn-outline-secondary mb-2 mb-sm-0 mx-sm-2"
                onClick={(e) => {
                  e.preventDefault();
                  setShowSignUp(true)
                }}
              >
                Sign-Up
              </button>
          </form>
        </div>
      </div>
    </nav>
    <Login show={showSignIn} handleClose={handleSignInClose} />
      <Registor show={showSignUp} handleClose={handleSignUpClose} />
    </>
  );
}

export default Navbar;

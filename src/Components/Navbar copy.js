import React, { useState } from "react";
import logo from "../Images/cafelogo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact Us
              </a>
            </li>
          </ul>
          <form className="d-flex flex-column flex-sm-row justify-content-sm-end mt-2 mt-sm-0">
            <button
              className="btn btn-outline-secondary mb-2 mb-sm-0 mx-sm-2"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Sign-In
            </button>
            <button
              className="btn btn-outline-secondary mb-2 mb-sm-0 mx-sm-2"
              data-bs-toggle="modal"
              data-bs-target="#registorModal"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Sign-Up
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

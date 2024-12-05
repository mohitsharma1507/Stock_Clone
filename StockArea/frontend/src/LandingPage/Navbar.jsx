import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom fixed-top bg-white">
      <Link
        to="/"
        className="d-flex align-items-center  mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        style={{ marginLeft: "6rem" }}
      >
        <img
          src="media/logo.svg"
          style={{ width: "25%", marginRight: "15px" }}
        />
      </Link>

      <ul className="nav nav-pills " style={{ marginRight: "5rem" }}>
        <li className="nav-item">
          <Link
            to="/signup"
            className="nav-link "
            style={{ color: "black" }}
            aria-current="page"
          >
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" style={{ color: "black" }}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/product" className="nav-link" style={{ color: "black" }}>
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/pricing" className="nav-link " style={{ color: "black" }}>
            Pricing
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/support" className="nav-link" style={{ color: "black" }}>
            Support
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link" style={{ color: "black" }}>
            <i className="fa-solid fa-bars"></i>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;

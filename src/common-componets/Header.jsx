import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-sm position-sticky top-0" style={{ zIndex: 1000 }}>
      <nav className="navbar navbar-expand-lg bg-light py-3">
        <div className="container">
         
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Travel
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/destinations">Destinations</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/travelpackages">Travel Packages</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/guide">Travel Guide</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

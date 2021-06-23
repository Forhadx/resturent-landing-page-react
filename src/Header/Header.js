import React from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/home">
          <div className="logo">SNACK</div>
        </NavLink>
        <div className="menuItems">
          <NavLink to="#home">
            <div className="menuItem active">Home</div>
          </NavLink>
          <NavLink to="#about">
            <div className="menuItem">About</div>
          </NavLink>
          <NavLink to="#menu">
            <div className="menuItem">Menu</div>
          </NavLink>
          <NavLink to="#testimonials">
            <div className="menuItem">Testimonials</div>
          </NavLink>
          <NavLink to="#contact">
            <div className="menuItem">Contact us</div>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;

/**
 
          
 */
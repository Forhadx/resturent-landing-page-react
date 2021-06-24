import React from "react";
import { AiOutlineHome } from 'react-icons/ai';
import { SiAboutDotMe } from 'react-icons/si';
import { MdRestaurantMenu } from 'react-icons/md';
import { MdRateReview } from 'react-icons/md';
import { GrContact } from 'react-icons/gr';


import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#home">
          <div className="logo">SNACK</div>
        </a>
        <div className="menuItems">
          <a href="#home">
            <div className="menuItem">Home</div>
          </a>
          <a href="#about">
            <div className="menuItem">About</div>
          </a>
          <a href="#menu">
            <div className="menuItem">Menu</div>
          </a>
          <a href="#testimonials">
            <div className="menuItem">Testimonials</div>
          </a>
          <a href="#contact">
            <div className="menuItem">Contact us</div>
          </a>
        </div>
      </nav>

      <nav className="mobileNavbar">
        <div className="mobileItems">
          <a href="#home">
            <div className="mobileItem"><AiOutlineHome /></div>
          </a>
          <a href="#about">
            <div className="mobileItem"><SiAboutDotMe /></div>
          </a>
          <a href="#menu">
            <div className="mobileItem"><MdRestaurantMenu /></div>
          </a>
          <a href="#testimonials">
            <div className="mobileItem"><MdRateReview /></div>
          </a>
          <a href="#contact">
            <div className="mobileItem"><GrContact /></div>
          </a>
        </div>
      </nav>

    </header>
  );
};

export default Header;


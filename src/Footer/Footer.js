import React from "react";

import "./footer.scss";
import bg from './l.jpg';


const Footer = () => {
  return (
    <footer
      className="footer bgImg bgImgFixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="footerInfo">
          <div className="footerDetails">
            <h1>Services</h1>
            <a href="#home">
              <p>Delivery</p>
            </a>
            <a href="#menu">
              <p>Pricing</p>
            </a>
          </div>
          <div className="footerDetails">
            <h1>Information</h1>
            <a href="#contact">
              <p>Contact us</p>
            </a>
            <a href="#home">
              <p>Terms of services</p>
            </a>
          </div>
          <div className="footerDetails" >
            <iframe title="our location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14603.245752682107!2d90.40167963647151!3d23.789728087650133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1624357622368!5m2!1sen!2sbd"></iframe>
          </div>
        </div>
        <p className="license">copyright 2021 &#169; snack</p>
      </div>
    </footer>
  );
};

export default Footer;

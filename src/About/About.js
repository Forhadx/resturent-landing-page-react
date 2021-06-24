import React from "react";
import "./about.scss";
import bg from "./g.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="aboutContainer">
            <div
              style={{ backgroundImage: `url(${bg})` }}
              className="aboutContainerImg bgImg"
            ></div>

            <div className="aboutContainerDetails">
              <h1>
                <span className="colorGrey">We</span> create delicious memories
                for<span className="colorGrey"> us</span>
              </h1>
              <p>
                We cook the best food in the entire city, with excellent
                customer service, the best meals and at the best price, visit
                us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

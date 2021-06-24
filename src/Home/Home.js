import React from "react";

import "./home.scss";

const Home = () => {
  return (
    <section id="home" className="home">
      <video
        className="homeVideoIntro"
        autoPlay
        muted
        loop
      >
        <source src="assets/home-intro.mp4" type="video/mp4" />
        Your browser is not supported
      </video>
      <div className="homeDetails">
        <div className="container">
          <div className="row">
            <div className="slogan">
              <h1>SNACK</h1>
              <p>Try the best food of the week.</p>
              <div>
                <a href="https://www.foodpanda.com.bd/"><button>Order Now</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

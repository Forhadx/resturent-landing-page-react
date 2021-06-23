import React from "react";

import "./menu.scss";
import bg from "./d.jpg";
const Menu = () => {
  return (
    <section
      id="menu"
      className="foodMenu bgImg bgImgFixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="foodMenuContainer">
            <h1 className="foodMenuContainerHeader">
              What will you <span className="color-grey">Eat</span> today?
            </h1>
            <div className="foodMenuContainerList">
              <div className="foodMenuContainerItem">Combo</div>
              <div className="foodMenuContainerItem">Burger</div>
              <div className="foodMenuContainerItem">Pizza</div>
              <div className="foodMenuContainerItem">Chicken</div>
              <div className="foodMenuContainerItem">Drinks & others</div>
            </div>
            <div className="foodMenu">
              <div className="foodMenuDetails">
                <div className="foodMenuImg">
                  <img
                    src="./assets/burger/Big-Mac.jpg"
                    alt=""
                    className="bgImg"
                  />
                </div>
                <h1>Big Mac</h1>
                <p>250 $</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

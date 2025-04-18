import React from "react";
import robo from "../assets/robo.png";
function Header() {
  return (
    <div>
      <div className="img-container">
        <img src={robo} alt="" srcset="" />
        <p>Chef Claude</p>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import robo from "../assets/robo.png";
function Header() {
  function over(){
    console.log("Hover")
  }
  return (
    <div>
      <div className="img-container">
        <img src={robo} alt="" 
        onMouseOver={over}/>
        <p>Chef Claude</p>
      </div>
    </div>
  );
}

export default Header;

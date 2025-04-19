import React, { useState } from "react";

function Ternary() {

  const [isGoingOut , setIsGoingOut] = useState(false)
  function changeMind() {
        setIsGoingOut(prev => !prev)
    }

  return (

    <div>
      <h1 className="title">Do you feel like going out tonight?</h1>
      <button
        onClick={changeMind}
        >
        {isGoingOut ? "Yes" : "No"}</button>
    </div>
  );
}

export default Ternary;

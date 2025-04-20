import React from "react";
import { useState } from "react";

function ComplexState() {
  const [myFavoriteThings ,setMyFavoriteThings ] = useState([])
  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing() {
    // aba hamle vairable lai matra change gare kei render nai hudena set function lai use garnu parxa
    setMyFavoriteThings((prevFav) => {
        return [...prevFav , 
          allFavoriteThings[prevFav.length]
        ]
    })
    
   
  }

  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
}

export default ComplexState;

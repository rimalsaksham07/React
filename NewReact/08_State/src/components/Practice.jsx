import React, { useState, useEffect } from "react";

function Practice() {
  const [color, setColor] = useState("#f2f2f2");

  document.body.style.backgroundColor = color;

  return (
    <footer>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => setColor("red")}
      >
        Red
      </button>
      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => setColor("blue")}
      >
        Blue
      </button>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => setColor("green")}
      >
        Green
      </button>
    </footer>
  );
}

export default Practice;

import React, { useState } from "react";

// conditional rendering
function Joke(props) {
  const [isShown, setIsShown] = useState(false);

  function click() {
    setIsShown((prevValue) => !prevValue);
    console.log(isShown);
  }

  return (
    <div>
      {props.setup && (
        <i>
          <p className="setup">
            Setup:
            {props.setup}
          </p>
        </i>
      )}
      <button onClick={click}>
        {isShown ? "Hide Punchline" : "Show Punchline"}
      </button>

      {isShown && props.punchline && (
        <b>
          <p className="punchline">Punchline: {props.punchline}</p>
          <hr />
        </b>
      )}
    </div>
  );
}
export default Joke;

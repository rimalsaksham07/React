import { useState } from "react";
import "./App.css";

function App() {
  let  [counter, setCounter] = useState(15); // Corrected let -> const

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter => counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter = counter - 1);
    }
  };

  return (
    <>
      <h1>Learning React</h1>
      <h2 id="count">Counter Value: {counter} </h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Count from "./components/Count";

function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrease() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <Count count={count} />
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
}

export default App;

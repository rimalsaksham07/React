import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Intro from "./components/Intro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="border">
        <nav className="nav">
          <img src="src/assets/react.svg" alt="" height={40} />
          <ul className="list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <h3>React Components</h3>
        
        
      </div>
    </>
  );
}

export default App;

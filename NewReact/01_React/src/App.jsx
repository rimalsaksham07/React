import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Intro from "./components/Intro";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="border">
        <Header / >
       
        <h3>React Components</h3>    
      </div>
    </>
  );
}

export default App;

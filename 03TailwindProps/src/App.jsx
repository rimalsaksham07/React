import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
 

  return (
    <>
      <Card userName="Code" btnText = "clickMe" />
      <Card userName="React" btnText = "vist me" />
  
    </>
  );
}

export default App;

// new process haru yo chai tailwind ko lagi 

// npm install -D tailwindcss postcss autoprefixer
// npm install -D tailwindcss@3.4.17
// npx tailwindcss init -p

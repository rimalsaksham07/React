import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
    <Card username="Saksham Rimal" age="28" location="Nepal" />
    <Card username="Cristianooooo" age="36" location="Portugual"/>      
    </>
  );
}

export default App;

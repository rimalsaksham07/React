import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const map1 = data.map((map) => {
    return(
      <Entry 
    key = {map.id}
    img={map.img} 
    title = {map.title}
    country = {map.country}
    />
    )
  })  
  return (
    <>
      <Header />
      {map1}
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

function App() {
  const map1 = data.map((x) => {
    return <Entry key={x.id} entry={x} />;
  });

  return (
    <>
      <Header />
      {map1}
    </>
  );
}

export default App;

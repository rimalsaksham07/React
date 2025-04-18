import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

function App() {
  const entries = data.map((item) => {
    return (
      <Entry 
        key={item.id}
        entry={item}
      />
    );
  });

  return (
    <>
      <Header />
      {entries}
    </>
  );
}

export default App;

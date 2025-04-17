import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const ninjaTurtles = ["Donatello", "MichaelLangelo" , "Rafael" , "Leonardo"];
  const map = ninjaTurtles.map(
    (a) => {
      return <h2> {a} </h2>
    }
  )
  console.log(map)
  return (
    <>
      <main>
         {map} 
      </main>
    </>
  );
}

const nums = [1, 2, 3, 4, 5];
const squares = nums.map((x) => x ** 2);
// console.log(squares);

const names = ["alice", "bob", "charlie", "danielle"];
const upper = names.map((name) => name[0].toUpperCase() + name.slice(1));
// console.log(upper);

const pokemon = ["bulbasaur", "charmander", "squirtle"];
const wrap = pokemon.map((p) => {
  return `<p> ${p} </p>`;
});
// console.log(wrap);

export default App;

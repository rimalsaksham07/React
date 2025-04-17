import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Joke from "./components/Joke";
import jokesData from "./jokesData";

function App() {
  const [count, setCount] = useState(0);
  const jokeElement = jokesData.map(
    (jokes) => {
      return <Joke setup={jokes.setup} punchline = {jokes.punchline}/>
    }
  )
  console.log(jokeElement);
  
  return (
    <>
     <main>
      {jokeElement}


     </main>
    </>
  );
}

export default App;

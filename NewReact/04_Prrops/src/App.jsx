import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Joke from "./components/Joke";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Joke
        // setup=" I got my daughter a fridge for her birthday."
        punchline=" can't wait to see her face light up when she opens it."
        upvotes={10}
      />
      <Joke
        setup=" How did the hacker escape the police?"
        punchline=" He just ransomware!"
      />
      <Joke
        setup="Why don't pirates travel on mountain roads? "
        punchline="Scurvy."
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline=" Swarm."
      />
      <Joke
        setup="What's the best thing about Switzerland? "
        punchline=": I don't know, but the flag is a big plus!"
      />
    </>
  );
}

export default App;

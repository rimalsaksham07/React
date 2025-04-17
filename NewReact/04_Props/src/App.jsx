import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Joke from "./components/Joke";
import jokesData from "./jokesData";

function App() {
  const [count, setCount] = useState(0);
  const jokeElement = jokesData.map((jokes) => {
    return <Joke setup={jokes.setup} punchline={jokes.punchline} />;
  });
  console.log(jokeElement);

  return (
    <>
      <main>{jokeElement}</main>
    </>
  );
}

export default App;

// map method is the built in method which can be run to iterate over every item in the array and whatwere we run in call back function it will return in the original array basically function ma xa operation xa telle original array ma replace garxa .

// map ma chai we use raw data is convert it into jsx 

// why it is better than using simple array 
// we often dont have data ahead of the time 
// by using this method we can make them more sustaining as updating or modifying the data.

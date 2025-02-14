import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };

  const sub = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="flex bg-green-200 justify-center items-center h-screen text-6xl">
        <div className="bg-green-300 rounded-4xl w-20 h-40 flex justify-center items-center place-items-stretch">
          <button onClick={sub}>-</button>
        </div>
        <div className="bg-green-400 rounded-4xl w-90 h-40 flex justify-center items-center">
          Count : {count}
        </div>
        <div className="bg-green-300 rounded-4xl w-20 h-40 flex justify-center items-center">
          <button onClick={add}>+</button>
        </div>
      </div>
    </>
  );
}

export default App;

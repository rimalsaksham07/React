import { useState } from "react";
function App() {
  let [Counter, setCounter] = useState(5);

  const addvalue = () => {
    if (Counter < 20) return setCounter(Counter + 1);
    console.log(Counter);
  };

  const subValue = () => {
    if (Counter > 0) return setCounter(Counter - 1);
  };

  return (
    <>
      <h1>React code</h1>
      <h2 id="add">Counter Value: {Counter}</h2>
      <button onClick={addvalue}>Add Value </button>
      <br></br>
      <button onClick={subValue}>Remove Value</button>
    </>
  );
}

export default App;

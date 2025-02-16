import { useState } from "react";

function App() {
  const [color, setColor] = useState();

  // function change(){
    
  // }

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl "> 
          <button className="outline-none px-4 bg-red-400 rounded-full " onClick={() => setColor('red')}>
            Red
          </button>
          <button className="outline-none px-4 bg-yellow-400 rounded-full" onClick={() => setColor('yellow')}>
            Yellow
          </button>
          <button className="outline-none px-4 bg-blue-400 rounded-full" onClick={() => setColor('blue')}>
            Blue
          </button>
          <button className="outline-none px-4 bg-400 rounded-full" onClick={() => setColor('')}>
            Default
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
import { useState } from "react";

function App() {

  const [color, setColor] = useState('black');

  return (
    <>
      <div
        className="flex justify-center items-center h-screen"
        style={{ backgroundColor: color }}
      >
        <div className="flex rounded-3xl px-5 py-8 bg-amber-700 gap-4">
         
          <button
            className="bg-red-500 flex rounded-2xl py-4 size-20 justify-center"
            onClick={() => setColor('red')}
          >
            Red
          </button>

      
          <button
            className="bg-green-500 flex rounded-2xl py-4 size-20 justify-center"
            onClick={() => setColor('green')}
          >
            Green
          </button>


          <button
            className="bg-blue-500 flex rounded-2xl py-4 size-20 justify-center"
            onClick={() => setColor('blue')}
          >
            Blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
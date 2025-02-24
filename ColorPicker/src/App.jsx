import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  

  return (
    <>
    <div className="h-screen" style={{ backgroundColor: color }}>
    <div className="flex items-center justify-center fixed bottom-20 left-0 w-full gap-10 px-0.5 ">
        <button className="border-0 p-6 shadow-2xs bg-red-500 rounded-full w-18 hover:bg-red-300"
        onClick={() => {
          setColor('red')
        }}>Red</button>
        <button  className="border-0 p-6 shadow-2xs bg-blue-500 rounded-full w-18 hover:bg-blue-300 px-0.5  "
         onClick={() => {
          setColor('blue')
        }}>Blue</button>
        <button  className="border-0 p-6 shadow-2xs bg-green-500 rounded-full w-18 hover:bg-green-300 text-center px-0.5 " 
         onClick={() => {
          setColor('green')
        }}>Green</button>
      </div>
      
    </div>
     
    </>
  );
}

export default App;

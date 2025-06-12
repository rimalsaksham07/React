// import { useState } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  let[count , setCount] = useState(5)
  return (
    <>
      <div className="App">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <p className="text-lg text-gray-700">
          This is a simple React app with Tailwind CSS.
        </p>
        <h2>Counter Value : {count}</h2>
        <div className = 'rounded-3xl p-1 gap-2 pointer-events-aut flex justify-center items-center'>
          <button 
          onClick={ 
            prevCount => {
              setCount(prevCount => prevCount + 1)
            }
        }>Add Value</button>
        <button
        onClick={
           prevCount => {
              setCount(prevCount => prevCount - 1)
            }
          }
        >Subtract Value</button>
        </div>
      </div>
      
    </>
  )
}

export default App

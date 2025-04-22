import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increase(){

  }
  function decrease(){

  }


  return (
    <>
    <h1 className='value'> {count} </h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
      
    </>
  )
}

export default App

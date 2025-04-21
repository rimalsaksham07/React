import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Ternary from './assets/components/Ternary'
// import Practice from './assets/components/Practice'
// import ComplexState from './assets/components/ComplexState'
import Stateobject from './components/Stateobject'
import Post from './components/PostApp'
import PostApp from './components/PostApp'

function App() {

  // const [isImportant  , setIsImportant] = React.useState("Yes")
  // // result le in value pauxa ani func le ni pauxa j assign gareko
  // // hamle sidhai varaible declare garera garem bhane chai react le react gardena bhannale re render hudena so if we use state then it rerender ani stae chnage garxa 
  // function handleClick(){
  //   setIsImportant("Heck Yes")
  // }
  // using ternary operator






  const [value , setValue ] = React.useState(0)
  function decrease(){
    setValue((prevCount) => {
      return prevCount - 1
    })
   
  }
  function increase(){
    setValue((prevCount) => {
      return prevCount + 1
    })

  }

  return (
    <>
      {/* <h1 className='title'>Is state important to learn?</h1>
      <button onClick={decrease}>-</button>
      <h1>{value}</h1>
      <button onClick={increase}>+</button> */}
      {/* <Ternary /> */}
      {/* <Practice /> */}
      {/* <ComplexState /> */}
      {/* <Stateobject /> */}
      <PostApp />
    </>
  )
}
export default App

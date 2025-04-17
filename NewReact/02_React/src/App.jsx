import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
    <Header /> 
    <Entry name="Mount Fuji" country="Japan" />
    <Entry name="Taj Mahal" country="India" />
    </div>  
  


    </>
  )
}

export default App

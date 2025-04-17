import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const map1 = data.map(
    (x) => {
      return <Entry
      img = {x.img}
      title = {x.title}
      country = {x.country}
      name = {x.title}

       />
    }
  )
  console.log(map1);
  


  return (
    <>
    <div className='container'>
    <Header /> 
    {map1}

    {/* <Entry name="Mount Fuji" country="Japan" />
    <Entry name="Taj Mahal" country="India" /> */}
    </div>  
  


    </>
  )
}

export default App

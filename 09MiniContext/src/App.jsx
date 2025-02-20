import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)
  
  // usercontextprovider le wrap garera aba tya component halne 

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

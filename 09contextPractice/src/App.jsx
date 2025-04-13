import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    // wrap gareko usercontext provider sanga tyo componenet haru globally accept garna ko lagi 
    <UserContextProvider>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App

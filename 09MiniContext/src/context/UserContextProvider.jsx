import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) =>{
    const [user , setUser] = useState(null) 
    return (
        //provider sanga warp gardine userContext lai 
        <UserContext.Provider value={{user, setUser}}> 
        {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;

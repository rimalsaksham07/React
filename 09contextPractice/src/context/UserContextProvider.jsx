
import React, { useState } from "react";
import UserContexts from "./UserContext";

const UserContextProvider = ({children}) => {
    // children is a generic name it is nothing but returns as it is 
    // children bhanera diyepaxi chia each component haru barambar herirakhnu pardena j xa as it is tei pathaidine ho 
    // aba yo chai hamle wrap garna ko lagi matra use gareko ho 
    const [user , setUser] = useState(null)
    return(
        <UserContexts.Provider value={{user , setUser}}>
        {children} 
        </UserContexts.Provider>
    )


}
export default UserContextProvider
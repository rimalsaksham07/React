// context usually js file mai hunxa jsx ma hudena 

import React from 'react'

const UserContext = React.createContext() // context create bhayo ya aba
// each context is a provider 
// and context is wrapped 
// after warpping the context it becomes a provider 
// so what ever we wrap in that provider it get the access of the component 
// aba hamle edi 4-5 ota componenet banako xam bhane tyo componenet haru lai wrap garyo 
// context le wrap garyo bhane it will get access of the context
// context is nothing but a global variable
export default UserContext;

// step 1 ma hamle first ma context create gareko ani tellai export gardeko
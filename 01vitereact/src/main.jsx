import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click me to visit gooel'

)

const anotherElement = (
  <a href="http://google.com" target="_blank" rel="noopener noreferrer">Visit Google</a>

)


createRoot(document.getElementById('root')).render( // html ma id banako xa tya bata root lai liyo 
  // ani tespaxi hamro functioning the sabai arko App.jsx ma xa nita tei 
  // bhayera  app lai render gareko import gareko 
    <App />
    // app ko bhitra new bhanne rakheki hamle 

) // ani create root ma rakhera display garaideko teti nai ho 
// js ma bhako bhaye hamle getElementById linthem and tespaxi createElementuse garera tesma innerhtml use garera dekhauthem 
// react ma resko kam chai createroot le garxa 
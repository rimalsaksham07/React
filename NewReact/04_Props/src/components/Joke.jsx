import React from 'react'

// conditional rendering 
function Joke(props) {
    console.log(props)
  return (
    <div>
        {props.setup && <p className='setup'>
            Setup:
        {props.setup}</p>}
        <p className='punchline'>
            Punchline: {props.punchline}</p>
        <hr />  
    </div>
  )
}

export default Joke

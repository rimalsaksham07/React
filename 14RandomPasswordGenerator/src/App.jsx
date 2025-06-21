import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*()"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, number, character])

  return (
    <>  
      <div className='flex max-w-md mx-auto shadow-md rounded-lg items-center justify-center px-4 my-8 text-orange-500 bg-gray-700'>
        <div>
          <h1 className='text-2xl font-bold mb-4'>Password Generator</h1>
          <div className='mb-4'>
            <label htmlFor="length" className='block mb-2'>Length:</label>
            <input
              type="number"
              id="length"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className='border rounded px-2 py-1 w-full'
              min={1}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="number" className='block mb-2'>
              <input type="checkbox" id="number" checked={number} onChange={(e) => setNumber(e.target.checked)} />
              {' '}Include Numbers
            </label>
          </div>
          <div className='mb-4'>
            <label htmlFor="character" className='block mb-2'>
              <input type="checkbox" id="character" checked={character} onChange={(e) => setCharacter(e.target.checked)} />
              {' '}Include Special Characters
            </label>
          </div>
          <button onClick={passwordGenerator} className='bg-orange-500 text-white px-4 py-2 rounded'>Generate Password</button>
          {password && (
            <div className='mt-4'>
              <h2 className='text-lg font-bold'>Generated Password:</h2>
              <p className='text-gray-300 break-all'>{password}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App

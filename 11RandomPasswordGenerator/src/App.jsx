import { useCallback, useEffect, useState ,useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useref hook 
  const passwordRef = useRef(null)

  // Password generator function
  const passwordGenerator = useCallback(() => {
    let pass = ""; // Initialize an empty string
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Base characters

    // Add numbers if allowed
    if (numberAllowed) str += "0123456789";

    // Add special characters if allowed
    if (characterAllowed) str += "!@#$%^&*()";

    // Generate password of the specified length
    for (let i = 0; i < length; i++) {
      const rand = Math.floor(Math.random() * str.length); // Random index within bounds
      pass += str.charAt(rand); // Append the character at the random index
    }

    setPassword(pass); // Set the generated password
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password) // copy garna ko lagi use hunxa yo password bata 
    
  } , [password])

  // Trigger password generation when dependencies change
  useEffect(() => {
    passwordGenerator(); // function lai call matra garaideko ho esma rerender prevent garna lai useeffect use gareko ho
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-8 my-8 bg-gray-700 text-orange-500 items-center">
        <h3 className="relative items-center justify-center">
          Password Generator
        </h3>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-4">
          <input
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPassword } className="bg-blue-500 text-white px-4 py-1 hover:bg-blue-700">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <label>Number:</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
          </div>
          <div className="flex items-center gap-x-1">
            <label>Character:</label>
            <input
              type="checkbox"
              checked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

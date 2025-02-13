import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setPassword] = useState(" ");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let count = 0;
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()";

    for (let i = 0; i < length - 1; i++) {
      let char = Math.floor(Math.random() * (str.length - 1) + 1);
      console.log(char);
      count = count + 1;
      pass = pass + str[char];
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]); // aba esko kei dependecy change garyo bhane function ni change hune bhayo

  const copyPassword = useCallback(() => {
    passwordRef.current?.select(); // elle copy garda text lai bold garauxa
    passwordRef.current?.setSelectionRange(0, 3); // elle chai range dinxa kati copy garne bhanera 
    window.navigator.clipboard.writeText(pass); // elle chai copy garxa
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-3xl px-4 h-30 my-8 bg-gray-600 text-center ">
        Password Generator
        <div className="flex shadow rounded-3xl overflow-hidden mb-4">
          <input
            type="text"
            value={password} // this is out evaluated expression hamle expression lekhne ho function haina thats why it is evaluated expression
            className="outline-none w-full py-1 px-3 bg-amber-50 text-black"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button
            className="py-3 rounded-2xl text-amber-300 px-1 "
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <label>Number: {numberAllowed} </label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onClick={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
          </div>
          <div className="flex items-center gap-x-1">
            <label>Character: {characterAllowed} </label>
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="numberInput"
              onChange={() => {
                setcharacterAllowed((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

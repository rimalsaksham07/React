import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+";

    if (number) characters += numbers;
    if (character) characters += specialCharacters;

    let pass = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      pass += characters[randomIndex];
    }

    setPassword(pass);
  }, [length, character, number]);

  useEffect(() => {
    passwordGenerator();
  }, [length, character, number, passwordGenerator]);

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="bg-green-300 p-8 rounded-2xl text-center shadow-lg">
          <h1 className="text-2xl font-bold mb-6">Password Generator</h1>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={password}
                readOnly
                className="border-2 border-black rounded-2xl px-4 py-2 w-64 focus:outline-none focus:border-blue-500"
                placeholder="Generated Password"
              />
              <button className="bg-green-500 hover:bg-green-700 text-white rounded-2xl px-4 py-2 transition duration-300">
                Copy
              </button>
            </div>
            <div className="flex items-center gap-4">
              <label className="font-medium">Range: {length}</label>
              <input
                onChange={(e) => setLength(e.target.value)}
                type="range"
                className="w-64"
                name="range"
                id="range"
                min="8"
                max="32"
                value={length}
              />
            </div>
            <div className="flex items-center gap-5 fit-content">
              <label className="font-medium">Character:</label>
              <input
                type="checkbox"
                name="character"
                id="character"
                checked={character}
                onChange={() => setCharacter((prev) => !prev)}
              />
              <label className="font-medium">Number:</label>
              <input
                type="checkbox"
                name="number"
                id="number"
                checked={number}
                onChange={() => setNumber((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
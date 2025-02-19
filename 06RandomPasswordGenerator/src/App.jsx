import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [Character, setCharacter] = useState(false);
  const [Number, setNumber] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let charPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const specialChars = "!@#$%^&*()";
    const digits = "1234567890";

    if (Character) charPool += specialChars;
    if (Number) charPool += digits;

    let password = "";
    for (let i = 0; i < length; i++) {
      const rand = Math.floor(Math.random() * charPool.length);
      password += charPool[rand];
    }

    setPassword(password); // Update the state
  }, [length, Character, Number]);

  useEffect(() => {
    passwordGenerator();
  }, [length, Character, Number]);

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-amber-300">
        <div className="flex flex-col bg-amber-100 h-64 w-132 text-2xl items-center rounded-4xl shadow-2xl font-mono p-4">
          <h1 className="text-left justify-center items-center">Random Password Generator</h1>
          <div className="mt-4 flex flex-col items-start gap-2">
            <label>
              Password:
              <input
                className="bg-white rounded-3xl p-0.5 w-fit shadow-2xl"
                type="text"
                value={Password}
                disabled
              />
            </label>
            <label>
              Range: {length}
              <input
                className="bg-white rounded-3xl p-0.5 w-fit"
                type="range"
                min={6}
                max={32}
                value={length}
                onChange={(e) => (Number(e.target.value))}
              />
            </label>
            <label>
              Number:
              <input
                className="bg-white rounded-3xl p-0.5 w-fit"
                type="checkbox"
                checked={Number}
                onChange={(e) => setNumber(e.target.checked)}
              />
            </label>
            <label>
              Character:
              <input
                className="bg-white rounded-3xl p-0.5 w-fit"
                type="checkbox"
                checked={Character}
                onChange={(e) => setCharacter(e.target.checked)}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

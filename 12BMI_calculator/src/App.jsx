import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2); // Calculate BMI
      setBmi(bmiValue);
    } else {
      alert("Please enter valid height and weight values.");
    }
  };

  return (
    <>
      <div className="text-white font-serif h-screen flex justify-center items-center">
        <div className="border-2 p-8 shadow-4xl rounded-3xl bg-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-center">
            BMI Calculator
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Height (cm)
              </label>
              <input
                type="number"
                className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
                placeholder="Enter height"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Weight (kg)
              </label>
              <input
                type="number"
                className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                placeholder="Enter weight"
              />
            </div>
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              value={bmi}
              onClick={calculateBMI}
            >
              Calculate BMI
            </button>

            {bmi && (
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold">Your BMI:</h3>
                <p className="text-lg">{bmi}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

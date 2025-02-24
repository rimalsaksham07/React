import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [height, setHeight] = useState(0);
  let [weight, setWeight] = useState(0);
  let [bmi, setBmi] = useState(null);

  const BMICalculator = () => {
    if (height > 0 && weight > 0){
      bmi = weight / height * height;
      setBmi(bmi)     
    }
    else{
      alert('Enter valid Values')
  };
  console.log(BMICalculator)
}
  

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-3xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          BMI Calculator
        </h2>

        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Height (cm):</label>
            <input
              type="number"
              className="p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter height"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value)

              }}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Weight (kg):</label>
            <input
              type="number"
              className="p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value)
              }}
            />
          </div>
        </div>

        <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
        value={bmi}
        onClick={BMICalculator}>
          Calculate BMI
        </button>

        <div className="text-black">
          BMI : {bmi}
           </div>
    

      </div> 
    </>
  );
}

export default App;

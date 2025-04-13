// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "./index.css";
// const root = createRoot(document.getElementById("root"));
// console.log(root);
// // const h1 = document.createElement("h1");
// // (h1.textContent = "Hi"),
// // (h1.className = "header"),
// // root.appendChild(h1)
// // aba hamlai etro append innerHTML nagari sidhai append garna milyo
// root.render(
//   <>
//       <img src="src/assets/react.svg" alt="" height={200} />

//   </>
// );

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { StrictMode } from "react";
import Intro from "./components/Intro";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <Intro />
    
  </StrictMode>
);

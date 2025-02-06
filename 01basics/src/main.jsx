import React from "react";
import ReactDOM from 'react-dom/client';

import App from "./App.jsx";

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };
const anotherUser = "chai aur react "

const ReactElement = React.createElement(
  // predfined hunxa esma first ma p tag haru ani <object data="" type=""></object>
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser


)
const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>

)
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App /> 
  //   {/* // app is a function  */}
  // </React.StrictMode>
  ReactElement
);
{/* // react uses bundler syntax lai sudharna khojxa bundle le chai 
// app ko nam jaile capital hunu parxa   */}
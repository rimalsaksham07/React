import React from "react";
// to create a prop we just simple pass props as a parameter which create an object
// aba object banxa props use garera bhane hamle sidhai . operator use garera opjevt lai lina sakinxa
// props ko satta object lai nai parameter ma pathaidekoyo chua
function Contact({ img, name, phone, email }) {
  return (
    <div>
      <article className="contact-card">
        <img src={img} alt="Photo of Mr. Whiskerson" />
        <h3>{name}</h3>
        <div className="info-group">
          <img src="src/assets/phone-icon.png" alt="phone icon" />
          <p>{phone}</p>
        </div>
        <div className="info-group">
          <img src="src/assets/mail-icon.png" alt="mail icon" />
          <p>{email}</p>
        </div>
      </article>
    </div>
  );
}

export default Contact;

// object destructuring
const person = {
  name: "ram",
  age: "10",
  roll: "12",
};
// aba normally hamle object bata edi kunai value acces garnu paryo bhane . operator use garera garuinxa tara destructuring garera tyo use nagari ni garna milxa

const { name, age } = person;
// this process is object destructuring
console.log(name);
console.log(age);

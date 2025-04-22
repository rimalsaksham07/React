import React from "react";
import { useState  } from "react";

function Form() {
  const [userData, setUserData] = useState(null);

  function signUp(formData) {
    setUserData({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      status: formData.get("employment"),
      diet: formData.getAll("diet"),
      favColor: formData.get("favColor"),
    });
  }

  return (
    <>
      <h1>Signup Form</h1>
      <form action={signUp}>
        <label htmlFor="Name">Name:</label>
        <input id="name" type="text" name="name" required />
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description"></textarea>

        <fieldset>
          <legend>Employment Status</legend>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="employment"
                // react ma chai value rakhnu parxa dekhauna ko lagi
                value="employed"
              />
              Employed
            </label>
            <label className="radio-option">
              <input type="radio" name="employment" value="unemployed" />
              Unemployed
            </label>
            <label className="radio-option">
              <input type="radio" name="employment" value="student" />
              Student
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Dietary Restrictions</legend>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="checkbox"
                name="diet"
                // react ma chai value rakhnu parxa dekhauna ko lagi
                value="Kosher"
              />
              Kosher
            </label>
            <label className="radio-option">
              <input type="checkbox" name="diet" value="Vegan" />
              Vegan
            </label>
            <label className="radio-option">
              <input type="checkbox" name="diet" value="Gluten Free" />
              Gluten Free
            </label>
          </div>
        </fieldset>

        <label htmlFor="">What is your favorite color?</label>
        <select name="favColor" id="favColor">
          <option value="">Choose a color</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
          <option value="Pink">Pink</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {userData && (
        <div className="user-details">
          <h2>Submitted User Details:</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Password: {"*".repeat(userData.password?.length || 0)}</p>
          <p>Status:{userData.status}</p>
          <p>Dietary Restrictions:</p>
          <ul>
            {userData.diet.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <p>Favorite Color : {userData.favColor}</p>
        </div>
      )}
    </>
  );
}
export default Form;

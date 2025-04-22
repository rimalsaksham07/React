import React, { useState } from "react";

function Practice() {
  const [userData, setUserData] = useState(null);
  function handleForm(formData) {
    setUserData({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    });
  }
  return (
    <div>
      <h3>Handling Forms in React</h3>
      <form action={handleForm}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <br />
    
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" id="password" />

        <button type="submit">Submit</button>
        <label htmlFor="gender">
            
            <input type="radio"  />
        </label>
      </form>
      {userData && (
        <div className="user-details">
        <h2>Submitted User Details:</h2>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        <p>Password: {"*".repeat(userData.password?.length || 0)}</p>
        </div>
        )}
      
    </div>
  )
}

export default Practice;

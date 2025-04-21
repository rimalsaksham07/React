import React, { useState } from "react";

function Main() {
  //   function click(){
  //   console.log("Clicked")
  // }
  const [ingredient, setIngredient] = useState([]);
  const map1 = ingredient.map((map) => {
    return (
      <li className="list" key={map}>
        {map}
      </li>
    );
  });
  function submit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredient((prevIngredient) => {
      return [...prevIngredient, newIngredient];
    });
  }
  console.log(map1);
  return (
    <main>
      <form className="add-ingredient-form" action={submit}>
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {map1}
    </main>
  );
}

export default Main;

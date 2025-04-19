import React from "react";

function Main() {
  //   function click(){
  //   console.log("Clicked")
  // }
  const ingredient = ["Chicken", "Oregano", "Tomatoes"];
  const map1 = ingredient.map((map, index) => {
    return <li key={map}>{map}</li>;
  });
  function submit(event) {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget)
    const newIngredient = formdata.get('ingredient')
    // console.log(newIngredient)
    ingredient.push(newIngredient)
    console.log(ingredient)
  }
  console.log(map1);
  return (
    <main>
      <form className="add-ingredient-form" onSubmit={submit}>
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

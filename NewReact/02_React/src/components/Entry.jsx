import React from "react";

function Entry(props) {
  return (
    <div className="entry-container">
      <div className="struct">
        <img
          src= {props.img.src}
          height={200}
          width={200}
        />
        <div className="loc">
          <div className="intro">
            <p>{props.country}</p>
            <a href=""> View on google Map</a>
          </div>
          <h1>{props.name}</h1>
          <h5>12 Jan 2021 - 24 Jan 2021</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            repellendus laborum esse quis corporis officiis. Illo eius itaque
            alias laboriosam.
          </p>
        </div>
      </div>
    </div>
  );
}
// const nums = [1, 2, 3, 4, 5];

// const squares = nums.map((x) => x ** 2);
// console.log(squares)

// const names = ['alice' , 'bob' , 'charlie' , 'danielle']
// const capital = names.map(
//   (name) => name[0].toUpperCase() + name.slice(1)
// )
// console.log(capital);

// const pokemon = ["Bulbasaur" , "Charmander", "Squirtle"]
// const wrap = pokemon.map(
//   (p) => {
//     return `<p> ${p} </p>`
//   }
// )
// console.log(wrap);

const nums = [1,2,3,4,5]
const squares = nums.map(
  (x) => x ** 2 
)
console.log(squares)

const names = ['alice' , 'bob' , 'charlie' , 'danielle']
const upper = names.map(
  (name) => name[0].toUpperCase() + name.slice(1)
)
console.log(upper)

const pokemon = ['bulbasaur', 'charmander' , 'squirtle']
const wrap = pokemon.map(
  (p) => {
    return `<p> ${p} </p>`
  }
)
console.log(wrap)


export default Entry;


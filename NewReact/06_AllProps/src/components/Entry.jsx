import React from "react";

function Entry(props) {
  return (
    <div className="container">
      <div>
        <img
        src={props.entry.img.src}
        alt={props.entry.img.alt}

          className="places"
        />
      </div>
      <div className="main">
      <div className="container1">
        <h3>{props.entry.title}</h3>
        <a href={props.entry.googleMapsLink} >View on goolge map</a>
        <p>{props.entry.country}</p>
        <img src="src/assets/location.png" alt="location-logo" height={20} />
        <p className="country"></p>
      </div>
      
      <p className="text">{props.entry.text}</p>

    </div>

      </div>
      
  );
}

export default Entry;

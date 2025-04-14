import React from "react";

function Entry() {
  return (
    <div className="entry-container">
      <div className="struct">
        <img
          src="src/assets/fuji.avif"
          alt=""
          srcset=""
          height={200}
          width={200}
        />
        <div className="loc">
          <div className="intro">
            <p>Japan</p>
            <a href=""> View on google Map</a>
          </div>
          <h1>Mount Fuji</h1>
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

export default Entry;

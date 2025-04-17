import React from 'react'

function Entry(props) {
  return (
    <div>
        <div>
            <img src={props.img.src} alt="" />
            <h3>{props.title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt repudiandae corrupti exercitationem corporis consectetur, ex molestias? Magni labore laborum, quibusdam officiis cupiditate perferendis placeat eum rem, nam ducimus accusamus pariatur.</p>
        </div>
    </div>
  )
}

export default Entry

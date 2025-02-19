import React from 'react'

function Card({username ,age , location}) { // destructuring gareko ho yo 
    console.log(username)
    console.log(age)

  return (
    <div>
      <h1 className="bg-green-400 text-black p-4 rounded-2xl">
        This is tailwind
      </h1>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full text-center">
          <img
            src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg"
            alt="Profile Picture"
            className="rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold mb-4">Profile</h2>
          <div className="mb-2">
            <span className="font-medium">Name:</span> {username}
          </div>
          <div className="mb-2">
            <span className="font-medium">Age:</span> {age}
          </div>
          <div className="mb-2">
            <span className="font-medium">Location:</span> {location}
          </div>
        </div>
    </div>
    </div>
  )
}

export default Card

import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
function Github() {
    const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/rimalsaksham07')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)

    //     })

    // } , [])

  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <div className="flex items-center justify-center">
      <img src={data.avatar_url} alt="Git Picture" width={300} />
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rimalsaksham07')
    return response.json()
}

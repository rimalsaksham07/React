import React, { useState } from 'react'
import { useParams } from 'react-router-dom'



function Pages() {
  const {pageid} = useParams()
  return (
    <div>
      Pages: {pageid}
    </div>
  )
}

export default Pages

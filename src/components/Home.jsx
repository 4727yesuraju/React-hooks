import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <ul>
      <li>
        <Link to="/useState" >useState</Link>
      </li>
    </ul>
  )
}

export default Home

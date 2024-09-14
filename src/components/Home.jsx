import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <ul>
      <li>
        <Link to="/useState" >useState</Link>
      </li>
      <li>
        <Link to="/useEffect" >useEffect</Link>
      </li>
    </ul>
  )
}

export default Home

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
      <li>
        <Link to="/useRef" >useRef</Link>
      </li>
      <li>
        <Link to="/useMemo" >useMemo</Link>
      </li>
      <li>
        <Link to="/useCallBack" >useCallBack</Link>
      </li>
    </ul>
  )
}

export default Home

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import UseState from './components/UseState'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className="flex flex-col items-center justify-center h-screen text-xl">
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/useState' element={<UseState />} />

      </Routes>
    </div>
  )
}

export default App

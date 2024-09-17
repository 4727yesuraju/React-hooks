import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import UseState from './components/UseState'
import UseEffect from './components/UseEffect'
import UseRef from './components/UseRef'
import UseMemo from './components/UseMemo'
import UseCallBack from './components/UseCallBack'
import ContextCounter from './components/ContextCounter'
import UseReducer from './components/useReducer'
import UseLayoutEffect from './components/UseLayoutEffect'
function App() {
  return (
    <div  className="flex flex-col items-center justify-center h-screen text-xl">
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/useState' element={<UseState />} />
          <Route path='/useEffect' element={<UseEffect />} />
          <Route path='/useRef' element={<UseRef />} />
          <Route path='/useMemo' element={<UseMemo />} />
          <Route path='/useCallBack' element={<UseCallBack />} />
          <Route path='/useContext' element={<ContextCounter />} />
          <Route path='/useReducer' element={<UseReducer />} />
          <Route path='/useLayoutEffect' element={<UseLayoutEffect />} />

      </Routes>
    </div>
  )
}

export default App

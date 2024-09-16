import React from 'react'
import { useAppContext } from '../context/AppContext'

function ContextCounter() {
    const {count,setCount} = useAppContext();

    const decrement = ()=>{
        setCount(counter=>--counter)
    }
    const increment = ()=>{
        setCount(counter=>++counter)
    }
  return (
    <div className="flex gap-4 items-center justify-center flex-col h-screen">
    <h1 className="text-4xl">
       counter : {count}
    </h1>
    <div className="flex gap-4 items-center justify-center text-2xl">
      <button onClick={decrement} className="btn">Decrement</button>
      <button onClick={increment} className="btn">Increment</button>
    </div>

  </div>
  )
}

export default ContextCounter

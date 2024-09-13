import React, { useState } from 'react'

function UseState() {
    const [counter,setCounter] = useState(0);
    const decrement = ()=>{
        setCounter(counter=>--counter)
    }
    const increment = ()=>{
        setCounter(counter=>++counter)
    }
  return (
    <div className="flex gap-4 items-center justify-center flex-col h-screen">
      <h1 className="text-4xl">
         counter : {counter}
      </h1>
      <div className="flex gap-4 items-center justify-center text-2xl">
        <button onClick={decrement} className="btn">Decrement</button>
        <button onClick={increment} className="btn">Increment</button>
      </div>

    </div>
  )
}

export default UseState

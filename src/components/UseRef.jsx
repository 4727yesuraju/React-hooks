import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
  const [counter,setCounter] = useState(0);
  const count =  useRef(0);
  const inputEle = useRef();

  const decrement = ()=>{
    setCounter(counter=>--counter)
  }
  const increment = ()=>{
      setCounter(counter=>++counter)
  }
  const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(inputEle.current.value);
  }
   useEffect(()=>{
    count.current = count.current+1;
   })
  return (
    <div className="flex gap-4 items-center justify-center flex-col h-screen">
      <h1 className="text-4xl">
         counter : {counter}
      </h1>
      <div className="flex gap-4 items-center justify-center text-2xl">
        <button onClick={decrement} className="btn">Decrement</button>
        <button onClick={increment} className="btn">Increment</button>
      </div>
      <h1>Render count : {count.current}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputEle} className="border-b-2 border-red-500 outline-none"/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default UseRef

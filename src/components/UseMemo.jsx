import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [num,setNum] = useState(0);
    const [count,setCount] = useState(0);

    function calculateSquare(number){
        console.log("calculation is done!");
        return number*number;
    }
    const res = useMemo(()=>calculateSquare(num),[num]);

  return (
    <div className="flex flex-col items-center">
      <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} className="text-center border-b-2 border-red-500 outline-none"/>
      <h1>square of the number is : {res}</h1>
      <button onClick={e=>setCount(count+1)} className="border-b-2 bg-red-500 px-2 rounded-lg">count++</button>
      <h1>counter : {count}</h1>
    </div>
  )
}

export default UseMemo

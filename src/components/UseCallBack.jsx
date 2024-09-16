import React, { useCallback, useState } from 'react'
import Header from './Header';

function UseCallBack() {
    const [count,setCount] = useState(0);
    const [val,setVal] = useState(0);
    const fn = useCallback(()=>{console.log("hai")},[val]);
  return (
    <div className="flex flex-col items-center">
      <Header fn={fn}/>
      <h1>count : {count}</h1>
      <button onClick={()=>setCount(count+1)} className="border-b-2 px-2 bg-black text-white rounded-lg">++</button>
      <button onClick={()=>setVal(val+1)} className="border-b-2 px-2 bg-black text-white rounded-lg">++</button>

    </div>
  )
}



export default UseCallBack

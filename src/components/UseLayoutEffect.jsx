import React, { useEffect, useLayoutEffect } from 'react'

function UseLayoutEffect() {

    //post mounting effect
    useEffect(()=>{
        console.log("from useEffect")
    })

    //pre mounting effect
    useLayoutEffect(()=>{   
        console.log("from useLayoutEffect")
    })
  return (
    <div>
      hello
    </div>
  )
}

export default UseLayoutEffect

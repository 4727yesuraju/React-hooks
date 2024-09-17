import React,{useReducer} from 'react'

function UseReducer() {
    const initialState = {count : 0};
    function reducer(state,action){
         switch(action.type){
            case 'inc' : {
                return {count : state.count+1}
            }
            case 'dec' : {
                return {count : state.count-1}
            }
         }
    }
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div className="flex gap-4 items-center justify-center flex-col h-screen">
      <h1 className="text-4xl">
         counter : {state.count}
      </h1>
      <div className="flex gap-4 items-center justify-center text-2xl">
        <button onClick={()=>dispatch({type : 'dec'})} className="btn">Decrement</button>
        <button onClick={()=>dispatch({type : 'inc'})} className="btn">Increment</button>
      </div>

    </div>
  )
}

export default UseReducer

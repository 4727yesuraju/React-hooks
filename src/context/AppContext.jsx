import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext();
export const useAppContext = ()=>{
    return useContext(AppContext)
}

function AppContextProvider({children}) {
    const [count,setCount] = useState(0);
  return (
    <AppContext.Provider value={{count,setCount}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider

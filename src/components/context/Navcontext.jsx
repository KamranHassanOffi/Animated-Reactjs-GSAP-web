import React, { useContext, useState } from 'react'
import { createContext } from 'react'
export const Navbarcontext=createContext()

const Navcontext = ({children}) => {
    
    const [navopen,Setnavopen]= useState(false)

  return (
    <div>
        <Navbarcontext.Provider value={[navopen,Setnavopen]}>
            {children}
        </Navbarcontext.Provider>
    </div>
  )
}

export default Navcontext

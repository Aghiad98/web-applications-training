import React, { createContext, useEffect, useMemo, useState } from 'react'


  export const CurenncyContext = createContext();

function CurenncyProvider({children}) {
   const [price , setPrice] = useState( JSON.parse(localStorage.getItem("Price")) || " ");
   const togglePrice = (newprice)=>{
   setPrice(newprice)
   }
   useEffect(()=>{
    localStorage.setItem ('Price',JSON.stringify(price))
   } , [price] )
   
  return (
    <CurenncyContext.Provider value={{ price , togglePrice }}>
      {children}
    </CurenncyContext.Provider>
  )
}

export default CurenncyProvider
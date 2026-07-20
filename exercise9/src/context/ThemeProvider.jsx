import React, { Children, createContext, useEffect, useState } from 'react'



export  const ThemeContext =createContext()

function ThemeProvider({children}) {
    const [theme , setTheme] = useState(JSON.parse(localStorage.getItem('Thetheme'))|| '' );
    let toggletheme = (newTheme)=>{
       
        setTheme(newTheme )
    }
    useEffect(()=>{
        localStorage.setItem("Thetheme" , JSON.stringify(theme))
    },[theme])
    let value={
        theme,toggletheme
    }
  return (
    <ThemeContext.Provider value={{theme,toggletheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
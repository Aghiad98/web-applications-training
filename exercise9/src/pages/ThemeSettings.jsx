import React, { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import ThemeProvider, { ThemeContext } from '../context/ThemeProvider'

function ThemeSettings() {
    const navigate = useNavigate()
  const handleback= ()=>{
    navigate(-1)
  }
  let {theme,toggletheme} = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const handleSubmit =(e)=>{
    e.preventDefault()
    return toggletheme(selectedTheme)
  }
  return ( 
    <>
    <div className="headerSettings">
      <h2>Settings</h2>
      <button className='btn' onClick={handleback}>Back</button>
      </div>
      <div className='main-settings'>
         <h3>App Settings</h3>
         <form onSubmit={handleSubmit}>
          <h5>Theme</h5>

          <select name="" id=""   value={selectedTheme} onChange={(e)=>setSelectedTheme(e.target.value)}>
            <option className='option' value='light' >Light</option>
            <option className='option'  value='dark'  >Dark</option>
          </select>
         <button type='submit' className='btn'>update</button>
         </form>
      </div>
      </>
  )
}

export default ThemeSettings
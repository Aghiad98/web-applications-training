import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeProvider'

function Settings() {
  let {theme,toggletheme} = useContext(ThemeContext)
  const mainSettings = theme === 'light' ? "main-settings main-settingsLight" : "main-settings main-settingsDark";

  return (
    <>
    <h2>Settings</h2>
    <div className={mainSettings}>
       <h4>
        <NavLink to='/Settings/UserProfile'>
          UserProfile
        </NavLink>
      </h4>
      <h4>
        <NavLink to='/Settings/ThemeSettings'>
          App Settings
        </NavLink>
      </h4>
      <h4>
        <NavLink to='/Settings/CurrencySettings'>
          Product Settings
        </NavLink>
      </h4>
    </div>
     
   
    </>
    
  )
}

export default Settings
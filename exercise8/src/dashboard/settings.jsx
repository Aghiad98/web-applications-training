import React from 'react'
import { NavLink  } from 'react-router-dom'
import "./dashboard.css"
function Settings() {
  return (
    <div className='Settings'>
      <h2>Settings page</h2>
      <ul>
        <li>
          <NavLink to='/dashboard/UserProfile'>UserProfile</NavLink>
        </li>
        <li>Notfications</li>
        <li>Accability</li>
        <li>Theme</li>
      </ul>
      
    </div>
  )
}

export default Settings
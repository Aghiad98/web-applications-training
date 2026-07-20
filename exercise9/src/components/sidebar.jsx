import React from 'react'
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/'>
                HOME
                </NavLink>
            </li>
             <li>
                <NavLink to='Products'>
                Products
                </NavLink>
            </li>
             <li>
                <NavLink to='Settings'>
                Setting
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
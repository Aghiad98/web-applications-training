import { NavLink } from "react-router-dom";
import "./dashboard.css"
import UserContext from "../UserContext";
import React, { useContext } from 'react'
function Sidebar() {
 const {user} = useContext(UserContext);
  return (
    <aside className="sidebar">

      <h2>Welcome {user}</h2>

      <ul>

        <li>
          <NavLink to="/dashboard/home">Home</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/services">Services</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/products">Products</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/contact">Contact</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/settings">Settings</NavLink>
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;
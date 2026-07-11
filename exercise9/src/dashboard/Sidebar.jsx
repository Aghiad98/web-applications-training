import { NavLink } from "react-router-dom";
import "./dashboard.css"
function Sidebar() {
  return (
    <aside className="sidebar">

      <h2>Dashboard</h2>

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
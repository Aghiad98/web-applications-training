import React, { useContext } from 'react'
import Sidebar from './components/sidebar'
import {Outlet} from "react-router-dom";
import Nav from './components/nav';
import './DashboardLayout.css'
import { ThemeContext } from './context/ThemeProvider';

function DashboardLayout()  {
    let {theme,toggletheme} = useContext(ThemeContext);
    const nav = theme === "light" ? "nav navLight" :"nav navDark" ;
    const sidebar = theme === "light" ? "sidebar sidebarLight" :"sidebar sidebarDark" ;
    const content = theme === "light" ? "content contentLight" :"content contentDark" ;
  return (
    <div className="dashboard">

      <header className={nav}>
        <Nav />
      </header>

      <div className="dashboard-body">

        <div className={sidebar}>
          <Sidebar />
        </div>

        <main className={content}>
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout
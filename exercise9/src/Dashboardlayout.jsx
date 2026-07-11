import { Outlet } from "react-router-dom";
import Sidebar from "./dashboard/Sidebar";

function DashboardLayout() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="content">
        <Outlet />
      </div>

    </div>
  );
}

export default DashboardLayout;
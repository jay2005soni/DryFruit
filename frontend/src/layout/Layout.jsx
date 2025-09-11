// layout/Layout.jsx
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar (fixed) */}
      <Sidebar />

      {/* Page Content */}
      <div className="flex-1 ">
        <Outlet /> {/* Renders the child route */}
      </div>
    </div>
  );
};

export default Layout;

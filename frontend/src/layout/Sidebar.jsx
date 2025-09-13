import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faImages,
  faTags,
  faBoxOpen,
  faHome,
  faTableColumns,
  faBox,
  faDashboard
} from "@fortawesome/free-solid-svg-icons";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      {/* Mobile Toggle */}
      <div onMouseEnter={() => setExpanded(true)}>
        <button
          className="fixed top-7 left-4 z-50 text-white p-2 rounded lg:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
        />
      )}

      <div
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={`fixed top-0 left-0 bg-gradient-to-r from-neutral-900 to-neutral-900 border border-r-2 rounded-md border-white text-white z-50 transform duration-300 ease-in-out min-h-screen 
        ${expanded ? "w-64" : "w-20"}
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static`}
      >
        {/* Header (Mobile) */}
        <div className="pt-4 pl-2 flex items-center justify-between sm:hidden">
          <div className="pl-6 pt-4 flex justify-between items-center gap-2">
            <img src="../src/assets/logo.png" className="w-8 bg-white" alt="Logo" />
            {expanded && <span className="text-xl font-bold">Admin</span>}
            <button onClick={() => setMobileOpen(false)} className="text-white">
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
          </div>
        </div>

        {/* Logo (Desktop) */}
        <div className="pl-6 pt-4 hidden lg:flex items-center gap-2 ">
          <img src="../src/assets/logo.png" className="w-8 bg-white" alt="Logo" />
          {expanded && <span className="text-xl font-bold">DFH</span>}
        </div>

        {/* Menu */}
        <div className="mt-6 flex flex-col pl-6 px-2">
        
          <SidebarLink
            to="/dashboard"
            icon={<FontAwesomeIcon icon={faTableColumns} />}
            label="Dashboard"
            current={location.pathname}
            expanded={expanded}
          />
          <SidebarLink
            to="/product/1"
            icon={<FontAwesomeIcon icon={faBox} />}
            label="Products"
            current={location.pathname}
            expanded={expanded}
          />

          <SidebarLink
            to="/add/slider"
            icon={<FontAwesomeIcon icon={faImages} />}
            label="Slider"
            current={location.pathname}
            expanded={expanded}
          />

          <SidebarLink
            to="/category"
            icon={<FontAwesomeIcon icon={faTags} />}
            label="Category"
            current={location.pathname}
            expanded={expanded}
          />

          <SidebarLink
            to="/add/product"
            icon={<FontAwesomeIcon icon={faBoxOpen} />}
            label="Add Product"
            current={location.pathname}
            expanded={expanded}
          />
        </div>
      </div>
    </>
  );
};

// 🔹 Reusable Sidebar Link
const SidebarLink = ({ to, icon, label, current, expanded }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
      current === to ? "text-blue-400 font-bold border" : "hover:border"
    }`}
  >
    {icon}
    {expanded && <span>{label}</span>}
  </Link>
);

export default Sidebar;

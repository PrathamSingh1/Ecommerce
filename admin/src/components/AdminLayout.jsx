import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Toggle Button */}
      <div className="flex md:hidden p-4 bg-neutral-800 text-neutral-100 z-20">
        <button onClick={openSidebar}>
          <FaBars />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* sidebar */}
      <div
        className={
          `bg-neutral-900 w-64 min-h-screen text-neutral-100 ` +
          `absolute md:relative transform transition-transform duration-300 z-20 ` +
          (isSidebarOpen ? "translate-x-0" : "-translate-x-full") +
          ` md:translate-x-0 md:static md:block`
        }
        style={{
          // Prevent page interaction with sidebar when open on mobile
          pointerEvents:
            isSidebarOpen || window.innerWidth >= 768 ? "auto" : "none",
        }}
      >
        {/* Sidebar */}
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;

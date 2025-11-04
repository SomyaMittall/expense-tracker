import React from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

/**
 * Provides a consistent dashboard layout with a navbar,
 * sidebar, and scrollable main content area.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The main content to render inside the layout
 * @param {string} props.activeMenu - The currently active menu item
 */
const DashboardLayout = ({ children, activeMenu }) => {
  return (
    <div className="bg-slate-50 h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <Navbar activeMenu={activeMenu} />

      {/* Body: Sidebar + Main */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (fixed height, no scroll) */}
        <div className="max-[1080px]:hidden h-full">
          <SideMenu activeMenu={activeMenu} />
        </div>

        {/* Main Content (only this scrolls) */}
        <main className="flex-1 overflow-y-auto px-6 py-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

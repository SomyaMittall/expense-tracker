import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

/**
 * Displays the top navigation bar for the Expense Tracker dashboard.
 * Handles mobile menu toggling and renders the sidebar for smaller screens.
 *
 * @param {Object} props - Component props
 * @param {string} props.activeMenu - The currently active menu item
 */
const Navbar = ({ activeMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggles the sidebar visibility in mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-20">
      {/* Mobile Menu Button */}
      <button
        className="block lg:hidden text-gray-700"
        onClick={toggleMenu}
        aria-label="Toggle sidebar"
      >
        {isMenuOpen ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      {/* App Title */}
      <h1 className="text-base font-semibold text-gray-800">
        Expense Tracker
      </h1>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-48 bg-white border-t border-gray-100 shadow-md lg:hidden">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </header>
  );
};

export default Navbar;

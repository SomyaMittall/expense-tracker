import React from "react";
import { useNavigate } from "react-router-dom";
import { SIDE_MENU_DATA } from "../../utils/data";
import profileImage from "../../assets/image.png";

/**
 * Displays the sidebar navigation menu with profile info and navigation buttons.
 *
 * @param {Object} props - Component props
 * @param {string} props.activeMenu - The label of the currently active menu item
 */
const SideMenu = ({ activeMenu }) => {
  const navigate = useNavigate();

  /**
   * Navigates to the selected route when a menu item is clicked.
   * @param {string} route - The path to navigate to
   */
  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <aside className="w-60 h-screen bg-white border-r border-gray-200 flex flex-col items-center py-6">
      
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10">
        <img
          src={profileImage}
          alt="User"
          className="w-16 h-16 rounded-full object-cover border border-gray-300"
        />
        <h4 className="text-gray-800 font-medium mt-3">Welcome!</h4>
      </div>

      {/* Menu List */}
      <nav className="w-full px-3">
        {SIDE_MENU_DATA.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(item.path)}
            className={`w-full flex items-center gap-3 px-5 py-3 rounded-md text-sm font-medium transition-colors
              ${
                activeMenu === item.label
                  ? "bg-violet-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            <item.icon className="text-lg" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default SideMenu;

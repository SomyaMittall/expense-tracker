import React from "react";

/**
 * Displays a small card with an icon, label, and value.
 *
 * @param {object} props
 * @param {JSX.Element} props.icon - Icon element to display
 * @param {string} props.label - Text label 
 * @param {string|number} props.value - Value to show 
 * @param {string} props.color - Tailwind background color class 
 */
const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-5 border border-slate-200 hover:shadow-lg transition-all">
      {/* Icon section */}
      <div className={`p-3 rounded-full ${color}`}>{icon}</div>

      {/* Text section */}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <h2 className="text-2xl font-semibold text-gray-900">{value}</h2>
      </div>
    </div>
  );
};

export default InfoCard;

import React from "react";

/**
 * Displays a list of income records in a simple table format.
 * Also allows deleting an income entry through a callback function.
 *
 * @param {Object[]} incomes - Array of income objects
 * @param {Function} onDelete - Function to handle income deletion
 */
const IncomeList = ({ incomes, onDelete }) => {
  // If there are no incomes, show a placeholder message
  if (incomes.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-5 text-center text-gray-600 shadow-sm">
        No income records found.
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b text-gray-700">
            <th className="py-2">Source</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Date</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map((income) => (
            <tr key={income.id} className="border-b hover:bg-gray-50">
              <td className="py-2">{income.source}</td>
              <td className="py-2">₹{income.amount}</td>
              <td className="py-2">{income.date}</td>

              {/* Delete button triggers onDelete with the income id */}
              <td className="py-2 text-red-600 cursor-pointer hover:underline"
                  onClick={() => onDelete(income.id)}>
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeList;

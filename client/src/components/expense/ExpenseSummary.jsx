import React from "react";

/**
 * Displays a summary of total expenses grouped by category.
 * @param {Array} expenses - List of expense objects with category and amount.
 */
const ExpenseSummary = ({ expenses }) => {
  // Calculate total amount per category
  const totals = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + parseFloat(exp.amount);
    return acc;
  }, {});

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-4">
      {Object.keys(totals).length === 0 ? (
        <p className="text-gray-500 text-sm">No data yet.</p>
      ) : (
        <ul className="space-y-2">
          {Object.entries(totals).map(([category, total]) => (
            <li
              key={category}
              className="flex justify-between text-gray-700 text-sm"
            >
              <span>{category}</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseSummary;

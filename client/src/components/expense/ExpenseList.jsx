import React from "react";

/**
 * Displays a list of all expenses in a table.
 * @param {Array} expenses - List of expense objects.
 * @param {Function} onDelete - Function to handle deleting an expense.
 */
const ExpenseList = ({ expenses, onDelete }) => {
  // If no expenses exist, show message instead of table
  if (expenses.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center text-gray-500">
        No expenses added yet.
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      {/* Scrollable table container */}
      <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr className="text-gray-700 border-b">
              <th className="py-2 px-3">Type</th>
              <th className="py-2 px-3">Amount</th>
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((expense) => (
              <tr
                key={expense.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="py-2 px-3">{expense.category}</td>
                <td className="py-2 px-3">${expense.amount}</td>
                <td className="py-2 px-3">{expense.date}</td>

                {/* Delete button — removes expense by ID */}
                <td
                  className="py-2 px-3 text-red-500 cursor-pointer hover:underline"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;

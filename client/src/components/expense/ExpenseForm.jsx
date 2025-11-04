import React, { useState } from "react";

/**
 * Handles user input for adding a new expense.
 * @param {Function} onAdd - Callback to pass the new expense data to the parent component.
 */
const ExpenseForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    date: "",
  });

  /** 
   * Updates form field values when user types or selects input.
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Submits the form and sends data to parent component.
   * Validates required fields before submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Skip if any field is empty
    if (!formData.category || !formData.amount || !formData.date) return;

    onAdd(formData); // Pass new expense to parent
    setFormData({ category: "", amount: "", date: "" }); // Reset form
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-6">

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Category input */}
        <div>
          <label className="text-sm text-gray-700 mb-2 block">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Enter category"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Amount input */}
        <div>
          <label className="text-sm text-gray-700 mb-2 block">Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Date input */}
        <div>
          <label className="text-sm text-gray-700 mb-2 block">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 rounded-md transition"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;

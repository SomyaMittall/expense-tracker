import React, { useState } from "react";

/**
 * Handles user input for adding income details (source, amount, date)
 * and sends the data to the parent component via `onAdd` callback.
 *
 * @param {Object} props - Component properties
 * @param {Function} props.onAdd - Function to handle adding new income
 */
const IncomeForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    source: "",
    amount: "",
    date: "",
  });

  // Update form data when input fields change
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submission and reset inputs
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.source || !formData.amount || !formData.date) return;
    onAdd(formData);
    setFormData({ source: "", amount: "", date: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Source Field */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">Source</label>
          <input
            type="text"
            name="source"
            placeholder="Enter income source"
            value={formData.source}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-violet-500"
          />
        </div>

        {/* Amount Field */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-violet-500"
          />
        </div>

        {/* Date Field */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-violet-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-5 py-2 rounded-md w-full sm:w-auto transition"
          >
            Add Income
          </button>
        </div>
      </form>
    </div>
  );
};

export default IncomeForm;

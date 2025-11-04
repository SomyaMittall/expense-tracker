import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import IncomeForm from "../../components/income/IncomeForm";
import IncomeList from "../../components/income/IncomeList";
import { addIncome, getIncomes, deleteIncome } from "../../services/incomeService";

/**
 * @component Income
 * @description Income management page for adding, filtering, and viewing records.
 */
const Income = () => {
  const [incomes, setIncomes] = useState([]);
  const [filter, setFilter] = useState({
    category: "",
    month: "",
    year: "",
    date: "",
  });

  // Load saved incomes when component mounts
  useEffect(() => {
    const data = getIncomes();
    setIncomes(data);
  }, []);

  /**
   * @function handleAdd
   * @description Adds new income data and updates the list
   * @param {Object} data - Income form input data
   */
  const handleAdd = (data) => {
    const updated = addIncome(data);
    setIncomes(updated);
  };

  /**
   * @function handleDelete
   * @description Removes an income record by ID
   * @param {string} id - Unique ID of the income record
   */
  const handleDelete = (id) => {
    const updated = deleteIncome(id);
    setIncomes(updated);
  };

  // Filter incomes based on category, month, year, or date
  const filteredIncomes = incomes.filter((income) => {
    const dateObj = new Date(income.date);
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    return (
      (!filter.category || income.category === filter.category) &&
      (!filter.month || month === Number(filter.month)) &&
      (!filter.year || year === Number(filter.year)) &&
      (!filter.date || income.date === filter.date)
    );
  });

  return (
    <DashboardLayout activeMenu="Income">
      <div className="w-full min-h-screen bg-gray-50 px-6 md:px-10 py-6 overflow-y-auto space-y-10">

        {/* Income Entry Form */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Add Income</h2>
          <IncomeForm onAdd={handleAdd} />
        </div>

        {/* Income List and Filter Section */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 md:mb-0">Income Records</h2>

            {/* Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <input
                type="text"
                placeholder="Source"
                value={filter.category}
                onChange={(e) => setFilter({ ...filter, category: e.target.value })}
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-violet-400 outline-none"
              />
              <input
                type="number"
                placeholder="Month (1-12)"
                value={filter.month}
                onChange={(e) => setFilter({ ...filter, month: e.target.value })}
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-violet-400 outline-none"
              />
              <input
                type="number"
                placeholder="Year (e.g. 2025)"
                value={filter.year}
                onChange={(e) => setFilter({ ...filter, year: e.target.value })}
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-violet-400 outline-none"
              />
              <input
                type="date"
                value={filter.date}
                onChange={(e) => setFilter({ ...filter, date: e.target.value })}
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-violet-400 outline-none"
              />
            </div>
          </div>

          {/* Income Table */}
          <IncomeList incomes={filteredIncomes} onDelete={handleDelete} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Income;

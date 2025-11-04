import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import IncomeForm from "../../components/income/IncomeForm";
import IncomeList from "../../components/income/IncomeList";
import {
  addIncome,
  getIncomes,
  deleteIncome,
} from "../../services/incomeService";

/**
 * @component Income
 * @description Displays the Income Management page. 
 * Allows users to add, view, filter, and delete income records.
 */
const Income = () => {
  const [incomes, setIncomes] = useState([]);
  const [filter, setFilter] = useState({
    category: "",
    month: "",
    year: "",
    date: "",
  });

  /** Load all stored incomes from localStorage on initial render */
  useEffect(() => {
    setIncomes(getIncomes());
  }, []);

  /**
   * @function handleAdd
   * @description Adds a new income entry and updates the UI
   * @param {Object} data - The income data entered in the form
   */
  const handleAdd = (data) => {
    const updatedList = addIncome(data);
    setIncomes(updatedList);
  };

  /**
   * @function handleDelete
   * @description Deletes an income record and updates the UI
   * @param {string} id - The unique ID of the income entry
   */
  const handleDelete = (id) => {
    const updatedList = deleteIncome(id);
    setIncomes(updatedList);
  };

  /** Apply filters for category, month, year, or specific date */
  const filteredIncomes = incomes.filter((income) => {
    const incomeDate = new Date(income.date);
    const month = incomeDate.getMonth() + 1;
    const year = incomeDate.getFullYear();

    return (
      (!filter.category || income.category === filter.category) &&
      (!filter.month || month === parseInt(filter.month)) &&
      (!filter.year || year === parseInt(filter.year)) &&
      (!filter.date || income.date === filter.date)
    );
  });

  return (
    <DashboardLayout activeMenu="Income">
      <div className="w-full min-h-screen bg-slate-50 px-6 md:px-10 py-6 overflow-y-auto space-y-10">

        {/* Income Form Section */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Income</h2>
          <IncomeForm onAdd={handleAdd} />
        </div>

        {/* Income List & Filters */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 md:mb-0">
              Income List
            </h2>

            {/* Filters for category, month, year, date */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <input
                type="text"
                placeholder="Source"
                value={filter.category}
                onChange={(e) =>
                  setFilter({ ...filter, category: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
              />
              <input
                type="number"
                placeholder="Month (1-12)"
                value={filter.month}
                onChange={(e) =>
                  setFilter({ ...filter, month: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
              />
              <input
                type="number"
                placeholder="Year (e.g. 2025)"
                value={filter.year}
                onChange={(e) =>
                  setFilter({ ...filter, year: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
              />
              <input
                type="date"
                value={filter.date}
                onChange={(e) =>
                  setFilter({ ...filter, date: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
              />
            </div>
          </div>

          {/* Income List Table */}
          <IncomeList incomes={filteredIncomes} onDelete={handleDelete} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Income;

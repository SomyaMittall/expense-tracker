import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import IncomeForm from "../../components/income/IncomeForm";
import IncomeList from "../../components/income/IncomeList";
import {
  addIncome,
  getIncomes,
  deleteIncome,
} from "../../services/incomeService";

const Income = () => {
  const [incomes, setIncomes] = useState([]);
  const [filter, setFilter] = useState({
    category: "",
    month: "",
    year: "",
    date: "",
  });

  useEffect(() => {
    setIncomes(getIncomes());
  }, []);

  const handleAdd = (data) => {
    const updated = addIncome(data);
    setIncomes(updated);
  };

  const handleDelete = (id) => {
    const updated = deleteIncome(id);
    setIncomes(updated);
  };

  // 🔹 Apply Filters
  const filteredIncomes = incomes.filter((income) => {
    const incomeDate = new Date(income.date);
    const incomeMonth = incomeDate.getMonth() + 1;
    const incomeYear = incomeDate.getFullYear();

    return (
      (!filter.category || income.category === filter.category) &&
      (!filter.month || incomeMonth === parseInt(filter.month)) &&
      (!filter.year || incomeYear === parseInt(filter.year)) &&
      (!filter.date || income.date === filter.date)
    );
  });

  return (
    <DashboardLayout activeMenu="Income">
      <div className="w-full min-h-screen bg-slate-50 px-6 md:px-10 py-6 overflow-y-auto space-y-10">
        
        {/* 🔹 Add Income Form */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Income</h2>
          <IncomeForm onAdd={handleAdd} />
        </div>

        {/* 🔹 Income List with Filters */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 md:mb-0">Income List</h2>

            {/* Filter Inputs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <input
                type="text"
                placeholder="Source"
                value={filter.category}
                onChange={(e) => setFilter({ ...filter, category: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
              />
              <input
                type="number"
                placeholder="Month (1-12)"
                value={filter.month}
                onChange={(e) => setFilter({ ...filter, month: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
              />
              <input
                type="number"
                placeholder="Year (e.g. 2025)"
                value={filter.year}
                onChange={(e) => setFilter({ ...filter, year: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
              />
              <input
                type="date"
                value={filter.date}
                onChange={(e) => setFilter({ ...filter, date: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
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

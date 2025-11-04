import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import ExpenseForm from "../../components/expense/ExpenseForm";
import ExpenseList from "../../components/expense/ExpenseList";
import ExpenseSummary from "../../components/expense/ExpenseSummary";
import ChartComponent from "../../components/expense/ChartComponent";
import {
  addExpense,
  getExpenses,
  deleteExpense,
} from "../../services/expenseService";

/**
 * Handles expense management, including adding, viewing, filtering, and deleting expenses.
 */
const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState({
    category: "",
    month: "",
    year: "",
    date: "",
  });

  // Load expenses from storage on first render
  useEffect(() => {
    const data = getExpenses();
    setExpenses(data);
  }, []);

  /**
   * Adds a new expense entry and updates the list
   * @param {Object} data - Expense details submitted from the form
   */
  const handleAdd = (data) => {
    const updatedExpenses = addExpense(data);
    setExpenses(updatedExpenses);
  };

  /**
   * Deletes an expense by its ID
   * @param {string} id - Unique identifier of the expense
   */
  const handleDelete = (id) => {
    const updatedExpenses = deleteExpense(id);
    setExpenses(updatedExpenses);
  };

  // Filter expenses based on category, month, year, and date
  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    const month = expenseDate.getMonth() + 1;
    const year = expenseDate.getFullYear();

    return (
      (!filter.category || expense.category === filter.category) &&
      (!filter.month || month === parseInt(filter.month)) &&
      (!filter.year || year === parseInt(filter.year)) &&
      (!filter.date || expense.date === filter.date)
    );
  });

  return (
    <DashboardLayout activeMenu="Expense">
      <div className="w-full min-h-screen bg-slate-50 px-6 md:px-10 py-4 space-y-8 overflow-y-auto">
        
        {/* Expense Form and Chart Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Expense Form */}
          <div className="bg-white p-5 rounded-xl shadow border border-gray-200 flex flex-col justify-between">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Add Expense</h2>
            <ExpenseForm onAdd={handleAdd} />
          </div>

          {/* Expense Chart */}
          <div className="bg-white p-5 rounded-xl shadow border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Expense Chart</h2>
            <ChartComponent expenses={filteredExpenses} />
          </div>
        </div>

        {/* Expense Summary Section */}
        <div className="bg-white p-5 rounded-xl shadow border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Summary by Category</h2>
          <ExpenseSummary expenses={filteredExpenses} />
        </div>

        {/* Expense List with Filters */}
        <div className="bg-white p-5 rounded-xl shadow border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 md:mb-0">Expense List</h2>

            {/* Filter Controls */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <input
                type="text"
                placeholder="Category"
                value={filter.category}
                onChange={(e) => setFilter({ ...filter, category: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-violet-500"
              />
              <input
                type="number"
                placeholder="Month (1–12)"
                value={filter.month}
                onChange={(e) => setFilter({ ...filter, month: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-violet-500"
              />
              <input
                type="number"
                placeholder="Year (e.g. 2025)"
                value={filter.year}
                onChange={(e) => setFilter({ ...filter, year: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-violet-500"
              />
              <input
                type="date"
                value={filter.date}
                onChange={(e) => setFilter({ ...filter, date: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-violet-500"
              />
            </div>
          </div>

          {/* Expense Table */}
          <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Expense;

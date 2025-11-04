// import React, { useEffect, useState } from "react";
// import DashboardLayout from "../../components/layouts/DashboardLayout";
// import ExpenseForm from "../../components/expense/ExpenseForm";
// import ExpenseList from "../../components/expense/ExpenseList";
// import ExpenseSummary from "../../components/expense/ExpenseSummary";
// import ChartComponent from "../../components/expense/ChartComponent";
// import {
//   addExpense,
//   getExpenses,
//   deleteExpense,
// } from "../../services/expenseService";

// const Expense = () => {
//   const [expenses, setExpenses] = useState([]);

//   useEffect(() => {
//     setExpenses(getExpenses());
//   }, []);

//   const handleAdd = (data) => {
//     const updated = addExpense(data);
//     setExpenses(updated);
//   };

//   const handleDelete = (id) => {
//     const updated = deleteExpense(id);
//     setExpenses(updated);
//   };

//   return (
//     <DashboardLayout activeMenu="Expense">
//       <div className="w-full min-h-screen bg-slate-50 px-6 md:px-10 py-2 overflow-y-auto space-y-10">

//         {/* 🔹 Form + Chart Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
//           {/* Form Card */}
//           <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex flex-col justify-between">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Expense</h2>
//             <div className="flex-1 flex flex-col justify-center">
//               <ExpenseForm onAdd={handleAdd} />
//             </div>
//           </div>

//           {/* Chart Card */}
//           <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
//             <h2 className="text-xl font-semibold text-gray-800 mb-15">Expense Chart</h2>
//             <ChartComponent expenses={expenses} />
//           </div>
//         </div>

//         {/* 🔹 Summary Section */}
//         <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Summary</h2>
//           <ExpenseSummary expenses={expenses} />
//         </div>

//         {/* 🔹 Expense List */}
//         <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 mb-10">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Expense List</h2>
//           <ExpenseList expenses={expenses} onDelete={handleDelete} />
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Expense;
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

const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState({
    category: "",
    month: "",
    year: "",
    date: "",
  });

  useEffect(() => {
    setExpenses(getExpenses());
  }, []);

  const handleAdd = (data) => {
    const updated = addExpense(data);
    setExpenses(updated);
  };

  const handleDelete = (id) => {
    const updated = deleteExpense(id);
    setExpenses(updated);
  };

  // 🔹 Apply Filters
  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    const expenseMonth = expenseDate.getMonth() + 1;
    const expenseYear = expenseDate.getFullYear();

    return (
      (!filter.category || expense.category === filter.category) &&
      (!filter.month || expenseMonth === parseInt(filter.month)) &&
      (!filter.year || expenseYear === parseInt(filter.year)) &&
      (!filter.date || expense.date === filter.date)
    );
  });

  return (
    <DashboardLayout activeMenu="Expense">
      <div className="w-full min-h-screen bg-slate-50 px-6 md:px-10 py-2 overflow-y-auto space-y-10">

        {/* 🔹 Form + Chart Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Form Card */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Expense</h2>
            <div className="flex-1 flex flex-col justify-center">
              <ExpenseForm onAdd={handleAdd} />
            </div>
          </div>

          {/* Chart Card */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-15">Expense Chart</h2>
            <ChartComponent expenses={filteredExpenses} />
          </div>
        </div>

        {/* 🔹 Summary Section */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Summary by Category</h2>
          <ExpenseSummary expenses={filteredExpenses} />
        </div>

        {/* 🔹 Expense List with Filters */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 md:mb-0">Expense List</h2>

            {/* Filter Inputs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <input
                type="text"
                placeholder="Category"
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

          {/* Expense Table */}
          <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Expense;

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Color scheme for different financial categories
const COLORS = ["blue", "green", "red"];

/**
 * Displays a pie chart showing financial overview
 * @param {Object} props - Component props
 * @param {Object} props.data - Financial data to display
 * @param {number} props.data.totalBalance - Total account balance
 * @param {number} props.data.totalIncome - Total income
 * @param {number} props.data.totalExpense - Total expenses
 * @returns {React.Component} A pie chart component showing financial distribution
 */
const FinancialOverview = ({ data }) => {
  // Transform data for chart display
  const chartData = [
    { name: "Balance", value: data.totalBalance },
    { name: "Income", value: data.totalIncome },
    { name: "Expenses", value: data.totalExpense },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      

      <div className="h-[300px] flex justify-center items-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid lightgray",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Color indicators */}
      <div className="flex justify-around mt-4 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span> Balance
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span> Income
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span> Expenses
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;

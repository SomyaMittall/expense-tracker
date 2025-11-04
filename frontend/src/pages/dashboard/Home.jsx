import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import InfoCard from "../../components/dashboard-widgets/InfoCard";
import FinancialOverview from "../../components/dashboard-widgets/FinancialOverview";
import { DollarSign, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { addThousandsSeparator } from "../../utils/helper";
import { getIncomes } from "../../services/incomeService";
import { getExpenses } from "../../services/expenseService";
import RecentTransactions from "../../components/dashboard-widgets/RecentTransactions";

/**
 * Dashboard home page component showing financial overview
 * @returns {React.Component} Home dashboard with financial statistics and charts
 */
const Home = () => {
  // State for overall financial metrics
  const [dashboardData, setDashboardData] = useState({
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
  });

  // State for combined list of recent transactions
  const [transactions, setTransactions] = useState([]);

  /**
   * Fetches and calculates financial data on component mount
   */
  useEffect(() => {
    // Fetch raw data from storage
    const incomes = getIncomes();
    const expenses = getExpenses();

    // Calculate totals
    const totalIncome = incomes.reduce((sum, i) => sum + Number(i.amount || 0), 0);
    const totalExpense = expenses.reduce((sum, e) => sum + Number(e.amount || 0), 0);
    const totalBalance = totalIncome - totalExpense;

    setDashboardData({ totalBalance, totalIncome, totalExpense });

    // Combine and sort transactions by date
    const combined = [
      ...incomes.map((i) => ({ ...i, type: "Income" })),
      ...expenses.map((e) => ({ ...e, type: "Expense" })),
    ].sort((a, b) => new Date(b.date) - new Date(a.date));

    setTransactions(combined);
  }, []);

  const infoCards = [
    {
      label: "Total Balance",
      value: `$${addThousandsSeparator(dashboardData.totalBalance.toFixed(2))}`,
      icon: <DollarSign className="text-blue-600" />,
      color: "bg-blue-50",
    },
    {
      label: "Total Income",
      value: `$${addThousandsSeparator(dashboardData.totalIncome.toFixed(2))}`,
      icon: <ArrowUpCircle className="text-green-600" />,
      color: "bg-green-50",
    },
    {
      label: "Total Expenses",
      value: `$${addThousandsSeparator(dashboardData.totalExpense.toFixed(2))}`,
      icon: <ArrowDownCircle className="text-red-600" />,
      color: "bg-red-50",
    },
  ];

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="w-full min-h-screen bg-gray-50 px-6 py-6">
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              label={card.label}
              value={card.value}
              color={card.color}
            />
          ))}
        </div>

        {/* Financial Overview + Recent Transactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Financial Overview
            </h2>
            <FinancialOverview data={dashboardData} />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Recent Transactions
            </h2>
            <RecentTransactions transactions={transactions.slice(0, 5)} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;

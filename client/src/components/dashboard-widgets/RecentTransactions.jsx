import React from "react";

/**
 * Displays a simple list of recent income and expense records.
 * If there are no transactions, it shows a fallback message.
 *
 * @param {Object} props
 * @param {Array} props.transactions - List of transaction objects
 * @param {string} props.transactions[].type - Transaction type 
 * @param {string} props.transactions[].category - Category or source name
 * @param {string} props.transactions[].date - Date of the transaction
 * @param {number} props.transactions[].amount - Transaction amount
 * @returns {JSX.Element} A styled transaction card component
 */
const RecentTransactions = ({ transactions = [] }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 flex flex-col justify-between min-h-[380px]">
      

      {/* Transaction List */}
      {/* When there are no transactions */}
      {transactions.length === 0 ? (
        <p className="text-gray-500 flex-1 flex items-center justify-center">
          No recent transactions yet. 
        </p>
      ) : (
        <ul className="divide-y divide-gray-200 overflow-y-auto pr-2 flex-1 custom-scrollbar">
          {transactions.map((tx, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-3"
            >
              <div>
                <p className="font-medium text-gray-800">
                  {tx.category || tx.source || "Unnamed"}
                </p>
                <p className="text-sm text-gray-500">
                  {tx.type} • {tx.date}
                </p>
              </div>
              <span
                className={`font-semibold ${
                  tx.type === "Income" ? "text-green-600" : "text-red-600"
                }`}
              >
                {tx.type === "Income" ? "+" : "-"}${tx.amount}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentTransactions;

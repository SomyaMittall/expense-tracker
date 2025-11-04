/**
 * Expense service for managing expense data in local storage
 */

const STORAGE_KEY = "expenses";

/**
 * Retrieves all expenses from local storage
 * @returns {Array} Array of expense objects
 */
export const getExpenses = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

/**
 * Adds a new expense to storage
 * @param {Object} expense - The expense object to add
 * @param {string} expense.category - The category of the expense
 * @param {number} expense.amount - The amount of the expense
 * @param {string} expense.date - The date of the expense
 * @returns {Array} Updated array of all expenses
 */
export const addExpense = (expense) => {
  const current = getExpenses();
  current.push({ id: Date.now(), ...expense }); // Add unique ID to expense
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  return current;
};

/**
 * Deletes an expense from storage
 * @param {number} id - The ID of the expense to delete
 * @returns {Array} Updated array of all expenses
 */
export const deleteExpense = (id) => {
  const current = getExpenses().filter((e) => e.id !== id); // Remove expense with matching ID
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  return current;
};

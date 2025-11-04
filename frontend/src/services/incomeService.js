export const getIncomes = () => {
  const stored = localStorage.getItem("incomes");
  return stored ? JSON.parse(stored) : [];
};

export const addIncome = (income) => {
  const incomes = getIncomes();
  const newIncome = { ...income, id: Date.now().toString() };
  const updated = [...incomes, newIncome];
  localStorage.setItem("incomes", JSON.stringify(updated));
  return updated;
};

export const deleteIncome = (id) => {
  const incomes = getIncomes().filter((income) => income.id !== id);
  localStorage.setItem("incomes", JSON.stringify(incomes));
  return incomes;
};

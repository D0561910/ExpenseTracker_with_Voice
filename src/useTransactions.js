import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import {
  incomeCategories,
  expenseCategories,
  oweCategories,
  resetCategories,
} from "./constants/categories";

const useTransactions = (title) => {
  resetCategories();
  // const { transactions, getBalance } = useContext(ExpenseTrackerContext);
  const { transactions } = useContext(ExpenseTrackerContext);
  const rightTransactions = transactions.filter((t) => t.data.type === title);
  const total = rightTransactions.reduce(
    (acc, currVal) => (acc += parseFloat(currVal.data.price)),
    0
  );
  const categories =
    title === "Income"
      ? incomeCategories
      : title === "Expense"
      ? expenseCategories
      : oweCategories;

  // getBalance();

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.data.category);

    if (category) category.amount += parseFloat(t.data.price);
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  return { filteredCategories, total, chartData };
};

export default useTransactions;

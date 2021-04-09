const incomeColors = [
  "#123123",
  "#154731",
  "#165f40",
  "#16784f",
  "#14915f",
  "#10ac6e",
  "#0bc77e",
  "#04e38d",
  "#00ff9d",
];
const expenseColors = [
  "#b50d12",
  "#bf2f1f",
  "#c9452c",
  "#d3583a",
  "#dc6a48",
  "#e57c58",
  "#ee8d68",
  "#f79d79",
  "#ffae8a",
  "#cc474b",
  "#f55b5f",
];
const oweColors = [
  "#e3f2fd",
  "#bbdefb",
  "#90caf9",
  "#64b5f6",
  "#42a5f5",
  "#2196f3",
  "#1e88e5",
  "#1976d2",
  "#1565c0",
  "#59bfff",
  "#26abff",
];

export const incomeCategories = [
  { type: "Business", amount: 0, color: incomeColors[0] },
  { type: "Investments", amount: 0, color: incomeColors[1] },
  { type: "Extra income", amount: 0, color: incomeColors[2] },
  { type: "Deposits", amount: 0, color: incomeColors[3] },
  { type: "Lottery", amount: 0, color: incomeColors[4] },
  { type: "Gifts", amount: 0, color: incomeColors[5] },
  { type: "Salary", amount: 0, color: incomeColors[6] },
  { type: "Savings", amount: 0, color: incomeColors[7] },
  { type: "Rental income", amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: "Bills", amount: 0, color: expenseColors[0] },
  { type: "Car", amount: 0, color: expenseColors[1] },
  { type: "Clothes", amount: 0, color: expenseColors[2] },
  { type: "Travel", amount: 0, color: expenseColors[3] },
  { type: "Food", amount: 0, color: expenseColors[4] },
  { type: "Shopping", amount: 0, color: expenseColors[5] },
  { type: "House", amount: 0, color: expenseColors[6] },
  { type: "Entertainment", amount: 0, color: expenseColors[7] },
  { type: "Phone", amount: 0, color: expenseColors[8] },
  { type: "Pets", amount: 0, color: expenseColors[9] },
  { type: "Other", amount: 0, color: expenseColors[10] },
];

export const oweCategories = [
  { type: "Bills", amount: 0, color: oweColors[0] },
  { type: "Car", amount: 0, color: oweColors[1] },
  { type: "Clothes", amount: 0, color: oweColors[2] },
  { type: "Travel", amount: 0, color: oweColors[3] },
  { type: "Food", amount: 0, color: oweColors[4] },
  { type: "Shopping", amount: 0, color: oweColors[5] },
  { type: "House", amount: 0, color: oweColors[6] },
  { type: "Entertainment", amount: 0, color: oweColors[7] },
  { type: "Phone", amount: 0, color: oweColors[8] },
  { type: "Pets", amount: 0, color: oweColors[9] },
  { type: "Other", amount: 0, color: oweColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
  oweCategories.forEach((c) => (c.amount = 0));
};

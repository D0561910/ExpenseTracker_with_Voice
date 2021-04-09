import { ADD_TRANSACTION, DELETE_TRANSACTION, GET_TRANSACTION } from "./types";

const contextReducer = (state, action) => {
  const { type, payload } = action;
  let transactions;

  switch (type) {
    case ADD_TRANSACTION:
      transactions = [...state, payload];

      return transactions;
    case DELETE_TRANSACTION:
      transactions = state.filter((transaction) => transaction.id !== payload);

      // localStorage.setItem("transactions", JSON.stringify(transactions));

      return transactions;
    case GET_TRANSACTION:
      transactions = payload;

      return transactions;
    default:
      return state;
  }
};

export default contextReducer;

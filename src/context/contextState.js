import React, { useReducer, useCallback } from "react";
import axios from "axios";

import { ExpenseTrackerContext } from "./context";
import contextReducer from "./contextReducer";
import { ADD_TRANSACTION, DELETE_TRANSACTION, GET_TRANSACTION } from "./types";
import { COLLECTION, API_URL } from "../constants/config";
import formatToday from "../utils/formatToday";

const Provider = ({ children }) => {
  let initialState = [];

  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // New way but need to test.
  const getTransaction = useCallback((start, end) => {
    const fetchingData = async (start, end) => {
      const response = await axios.post(API_URL, {
        collection: COLLECTION,
        start: `${start}`,
        end: `${end}`,
      });
      const { expenseData } = response.data;
      dispatch({ type: GET_TRANSACTION, payload: expenseData });
    };
    fetchingData(start, end);
  }, []);

  const deleteTransaction = (id) => {
    axios
      .post(`${API_URL}/delete`, { collection: COLLECTION, id })
      .then((response) => {
        dispatch({ type: DELETE_TRANSACTION, payload: response.data.msg });
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  const addTransaction = (transaction) => {
    let whoPaid = transaction.type === "Owe" ? "Chris" : "Charles";
    axios
      .post(`${API_URL}/create`, {
        collection: COLLECTION,
        data: {
          date: transaction.date,
          item: transaction.title,
          pay: whoPaid,
          price: transaction.amount,
          category: transaction.category,
          type: transaction.type,
        },
      })
      .then((response) => {
        let newTransaction = {
          id: response.data.msg,
          data: {
            date: transaction.date,
            item: transaction.title,
            price: transaction.amount,
            category: transaction.category,
            type: transaction.type,
          },
        };
        dispatch({ type: ADD_TRANSACTION, payload: newTransaction });
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const getBalance = () => {
    const fetchData = async () => {
      const response = await axios.post(API_URL, {
        collection: COLLECTION,
        start: "2021-1-1",
        end: "2021-3-1",
      });
      const { expenseData } = response.data;
      let data = [];
      expenseData.forEach((jsonObj) => {
        let obj = {};
        obj.id = jsonObj.id;
        obj.data = jsonObj.data;
        data.push(obj);
      });
    };
    fetchData();
  };

  const balance = transactions.reduce(
    (acc, currVal) =>
      currVal.data.type === "Expense"
        ? acc - parseFloat(currVal.data.price)
        : acc + parseFloat(currVal.data.price),
    0
  );

  const dailySpend = transactions.reduce(
    (acc, currVal) =>
      currVal.data.date === formatToday(new Date()) &&
      currVal.data.type === "Expense"
        ? acc + parseFloat(currVal.data.price)
        : acc + 0,
    0
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{
        transactions,
        balance,
        dailySpend,
        addTransaction,
        deleteTransaction,
        getTransaction,
        getBalance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default Provider;

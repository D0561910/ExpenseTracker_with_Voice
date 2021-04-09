import React, { useContext, useEffect } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

import { ExpenseTrackerContext } from "../../../context/context";
import useStyles from "./styles";
import startMonth from "../../../utils/startMonth";
import formatDate from "../../../utils/formatDate";
import formatToday from "../../../utils/formatToday";

const List = ({ type }) => {
  const classes = useStyles();
  const { transactions, deleteTransaction, getTransaction } = useContext(
    ExpenseTrackerContext
  );
  const todayTransaction = transactions.filter((transaction) => {
    return transaction.data.date === formatToday(new Date());
  });
  const showTransaction = type === "daily" ? todayTransaction : transactions;
  const showDelete = type === "daily" ? true : false;

  useEffect(() => {
    getTransaction(startMonth(), formatDate(new Date()));
  }, [getTransaction]);

  return (
    <MUIList
      dense={false}
      className={type === "daily" ? classes.list : classes.monthlyList}
    >
      {showTransaction.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.data.type === "Income"
                    ? classes.avatarIncome
                    : transaction.data.type === "Expense"
                    ? classes.avatarExpense
                    : classes.avatarOwe
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`Category: ${transaction.data.category} ~ ${transaction.data.item}`}
              secondary={`$${transaction.data.price} - ${transaction.data.date}`}
            />
            {showDelete && (
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            )}
            {transaction.data.type === "Owe" && (
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            )}
            {showDelete && <ListItemSecondaryAction></ListItemSecondaryAction>}
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;

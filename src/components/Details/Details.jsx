import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";
import useTransactions from "../../useTransactions";
import List from "../Main/List/List";

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  if (title === "Monthly") {
    return (
      <Card className={classes.monthlyList}>
        <CardHeader title={title} subheader={subheader} />
        <CardContent>
          <List type="monthly" />
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card
        className={
          title === "Income"
            ? classes.income
            : title === "Expense"
            ? classes.expense
            : classes.owe
        }
      >
        <CardHeader title={title} subheader={subheader} />
        <CardContent>
          <Typography variant="h5">${total}</Typography>
          <Doughnut data={chartData} />
        </CardContent>
      </Card>
    );
  }
};

export default DetailsCard;

import React, { useRef } from "react";
import { Grid } from "@material-ui/core";

import { Details, Main } from "../index";

import useStyles from "./styles";

const Expense = () => {
  const classes = useStyles();
  const main = useRef(null);
  
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid ref={main} item xs={12} sm={5} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={5} className={classes.main}>
          <Details title="Monthly" subheader="All" />
        </Grid>

        <Grid item xs={12} sm={3} className={classes.desktop}>
          <Details title="Income" subheader="Charles" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Details title="Income" subheader="Charles" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.desktop}>
          <Details title="Expense" subheader="Charles" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Details title="Expense" subheader="Charles" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.desktop}>
          <Details title="Owe" subheader="Chris" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Details title="Owe" subheader="Chris" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Expense;

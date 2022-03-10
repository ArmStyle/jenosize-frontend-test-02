import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    textAlign: "center",
    height: 50,
    borderTop: "#eee 2px solid",
  },
  footer: {
    marginTop: "12px !important",
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.footer}>Footer</div>
    </Paper>
  );
}

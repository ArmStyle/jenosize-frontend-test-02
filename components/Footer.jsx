import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    textAlign: "center",
  },
});

export default function Footer() {
  const classes = useStyles();

  return <div className={classes.root}>ok</div>;
}

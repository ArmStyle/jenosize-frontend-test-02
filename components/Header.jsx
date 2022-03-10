import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    position: "fixed",
  },
  paper: {
    display: "flex",
    padding: 16,
    height: 150,
    justifyContent: "space-between",
  },
  row: { display: "flex" },
  logo: { padding: 32 },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignContent: "center",
    display: "grid",
    fontSize: "1.75rem",
    fontWeight: "bold",
  },
  search: {
    flexGrow: 1,
    alignContent: "end",
    display: "grid",
  },
}));

export default function Header({ search, setSearch, onSearch }) {
  const classes = useStyles();
  // api key
  // key 1 AIzaSyBZoqIv96rTKL8sVkk1qKTXrEk7IOm_aJg
  // key 2 AIzaSyCMnhZAr6MZ6L0sCGG2G01oGdIeQVD78Tg

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.row}>
          <img
            src="https://i.pinimg.com/originals/f5/35/77/f535774ddf57aa98193b3008c3bc81da.png"
            className={classes.logo}
          />
          <span className={classes.title}>Frontend Test 2</span>
        </div>
        <div className={classes.row}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onSearch()}
          />
        </div>
      </Paper>
    </div>
  );
}

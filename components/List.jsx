import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    textAlign: "center",
  },
  paper: {
    display: "flex",
    padding: 16,
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: ".875rem",
    marginBottom: 4,
  },
  description: {
    fontSize: ".725rem",
  },
});

export default function List({ item, photo }) {
  const classes = useStyles();
  return (
    <Paper square className={classes.paper} elevation={0}>
      <img
        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photo_reference=${photo}&key=AIzaSyBZoqIv96rTKL8sVkk1qKTXrEk7IOm_aJg`}
        width="200px"
        height="200px"
        style={{ minWidth: 200 }}
      />
      <div className={classes.container}>
        <div className={classes.title}>{item.name}</div>
        <div className={classes.subtitle}>{item.formatted_address}</div>
        <div className={classes.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </Paper>
  );
}

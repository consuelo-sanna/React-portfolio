import React from "react";
import "./MyButton.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import MyButton from "./MyButton";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(3, 0, 2),
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "none",
  },
}));

export default function ButtonContainer(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={5}>
        <MyButton href={props.left.link}>{props.left.title}</MyButton>
      </Grid>
      <Grid item xs={5}>
        <MyButton href={props.right.link}>{props.right.title}</MyButton>
      </Grid>
    </Grid>
  );
}

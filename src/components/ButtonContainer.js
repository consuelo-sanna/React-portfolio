import React from "react";
import "./MyButton.css";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import MyButton from "./MyButton";

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(3, 0, 2),
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "none"
  },
  button: {
    background: "black",
    color: purple[700],
    fontSize: "1.5em",
    fontWeight: 700,

    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    "&:hover": {
      background: "#e81bf3",
      boxShadow: "0 0 25px #e81bf3,0 0 50px #e81bf3,0 0 200px #e81bf3",
      color: "black",
      transition: "0.5s"
    }
  }
}));

export default function ButtonContainer() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={5}>
        <MyButton>Portfolio</MyButton>
      </Grid>
      <Grid item xs={5}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.button}
        >
          Profile
        </Button>
      </Grid>
    </Grid>
  );
}

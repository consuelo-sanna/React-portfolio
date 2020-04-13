import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
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
      transition: "0.5s",
    },
  },
}));

export default function MyButton(props) {
  const classes = useStyles();
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      className={classes.button}
      {...props}
    />
  );
}

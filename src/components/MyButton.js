import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "black",
    color: purple[700],
    fontSize: "1.3em",
    fontWeight: 700,

    boxShadow: "0 3px 5px 2px rgba(212, 180, 61, .3)",
    "&:hover": {
      background: "#D4B43D",

      transition: "0.5s",
    },
  },
}));

/** on hover: boxShadow: "0 0 25px #e81bf3,0 0 50px #e81bf3,0 0 200px #e81bf3",color: "black", */

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

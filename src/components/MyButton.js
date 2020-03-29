import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";

/** 
const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(3, 0, 2),
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "none"
  },
  button: {
    background: "transparent"
  }
}));
*/

export default function MyButton() {
  // const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={6}>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign In
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          href="https://material-ui.com/"
        >
          Sign In
        </Button>
      </Grid>
    </Grid>
  );
}

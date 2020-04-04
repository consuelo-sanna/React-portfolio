import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(3, 0, 2),
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "none"
  },
  button: {
    background: "transparent",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
}));

export default function Social() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={2}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          href="https://www.linkedin.com/in/consuelo-sanna-85542683/"
          target="_blank"
          className={classes.button}
        >
          <LinkedInIcon fontSize="large" />
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          href="https://github.com/consuelo-sanna"
          target="_blank"
          className={classes.button}
        >
          <GitHubIcon fontSize="large" />
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          type="submit"
          fullWidth
          key="Email"
          component="a"
          variant="contained"
          href="mailto:consu.sanna@gmail.com"
          target="_blank"
          className={classes.button}
        >
          <EmailIcon fontSize="large" />
        </Button>
      </Grid>
    </Grid>
  );
}

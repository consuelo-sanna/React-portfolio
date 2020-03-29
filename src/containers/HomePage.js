import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "left"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function Social() {
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
      <Grid item xs={4}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          href="https://material-ui.com/"
        >
          <LinkedInIcon fontSize="large" />
        </Button>
      </Grid>
    </Grid>
  );
}

function HomePage() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Consuelo Sanna, <br /> Software Engineer
        </Typography>
        <Typography component="h2" variant="h5">
          Hi. I'm a full-stack web developer.
        </Typography>
      </div>
      <Box mt={8}>{Social()}</Box>
    </Container>
  );
}

export default HomePage;

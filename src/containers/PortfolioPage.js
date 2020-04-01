import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Social from "../components/Social";
import ButtonContainer from "../components/ButtonContainer";

const useStyles = makeStyles(theme => ({
  root: { marginLeft: 0, marginTop: "20%" },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

function PortfolioPage() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Portfolio Page
        </Typography>
        <Typography component="h2" variant="h5">
          blabla bla bla portfolio qui
        </Typography>
      </div>
      <Box mt={2}>{ButtonContainer()}</Box>
      <Box mt={2}>{Social()}</Box>
    </Container>
  );
}

export default PortfolioPage;

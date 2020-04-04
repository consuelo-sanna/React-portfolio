import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "black",
    color: "white",

    opacity: 0.8,
    borderRadius: "1em",
  },
  card: { display: "flex", padding: "1em", border: "2px" },
  container: {
    margin: theme.spacing(3, 0, 2),
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "none",
  },
  textColorPurple: {
    color: purple[700],
  },
}));

function SkillsPage() {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container className={classes.container}>
        <Grid item xs={3}>
          <Paper elevation={3} className={classes.paper}>
            <Card className={classes.card}>
              <Typography
                component="h3"
                variant="h5"
                className={classes.textColorPurple}
              >
                <Box fontWeight="fontWeightBold">Languages</Box>
              </Typography>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className={classes.paper}>
            <Card className={classes.card}>
              <Typography
                component="h3"
                variant="h5"
                className={classes.textColorPurple}
              >
                <Box fontWeight="fontWeightBold">Methods & Tools</Box>
              </Typography>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} className={classes.paper}>
            <Card className={classes.card}>
              <Typography
                component="h3"
                variant="h5"
                className={classes.textColorPurple}
              >
                <Box fontWeight="fontWeightBold">Frameworks & Libs</Box>
              </Typography>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SkillsPage;

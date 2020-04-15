import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import { Box, Card, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    flexDirection: "column",
    alignItems: "center",
    background: "black",
    color: "white",
    padding: "0.5em",
    opacity: 0.8,
    borderRadius: "1em",
  },
  card: {
    display: "flex",
    padding: "1em",
    border: "2px",
    justifyContent: "center",
    transition: theme.transitions.create(["border-color", "scale", "opacity"], {
      duration: theme.transitions.duration.complex,
    }),
    "&:hover": {
      background: "black",
      transform: "translate(-10%, -10%) scale(1.5)",
      color: "white",
      opacity: 1,
    },
  },
  textColorPurple: {
    color: purple[700],
  },
}));

/** Titolo, Lista */

export default function MyCard(props) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paper}>
      <Card className={classes.card}>
        <Typography
          component="h3"
          variant="h5"
          className={classes.textColorPurple}
        >
          <Box fontWeight="fontWeightBold">{props.title}</Box>
          <Box>{props.lista}</Box>
        </Typography>
      </Card>
    </Paper>
  );
}

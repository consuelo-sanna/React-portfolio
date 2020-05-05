import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Social from "../components/Social";
import ButtonContainer from "../components/ButtonContainer";

const useStyles = makeStyles((theme) => ({
  root: { marginTop: "5%", maxWidth: 470 },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function HomePage() {
  const classes = useStyles();
  const baseUrl = process.env.PUBLIC_URL; //could have been done better, it is only necessary for github
  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <div className={classes.paper}>
        <Typography variant="h3">
          <Box>
            <br /> Software Engineer <br />
          </Box>
        </Typography>

        <Typography component="h5" variant="h5">
          <Box>React / Node.js / JavaScript</Box>
        </Typography>
      </div>
      <Box mt={2}>
        <ButtonContainer
          left={{ link: baseUrl + "/portfolio", title: "Portfolio" }}
          right={{ link: baseUrl + "/profile", title: "Profile" }}
        />
      </Box>
      <br />
      <Box mt={2}>{Social()}</Box>
    </Container>
  );
}

export default HomePage;

/** TODO: vedi se creare una card per non mostrare lo sfondo
 *    decidi se cambiare lo sfondo, magari a dx metti un immagine fatta con le particelle.. sarebbe una bomba
 *    tasto per fermare le particelle del tutto
 *    sistema i bottoni vari
 */

import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Social from "../components/Social";
import ButtonContainer from "../components/ButtonContainer";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: { marginLeft: 0, marginTop: "2%", maxWidth: "fit-content" },

  paper: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    background: "black",
    color: "white",
    border: "2px",
    padding: "2em",
    opacity: 0.8,
    borderRadius: "3em",
    boxShadow: "0 3px 5px 2px rgba(212, 180, 61, .3)",
  },
  textColorPurple: {
    color: purple[700],
  },
  customFont: { fontFamily: "D3 Euronism" },
}));

function ProfilePage() {
  const classes = useStyles();
  const baseUrl = process.env.PUBLIC_URL; //could have been done better, it is only necessary for github
  return (
    <Container component="main" maxWidth="md" className={classes.root}>
      <div className={classes.paper}>
        <Typography
          component="h2"
          variant="h5"
          className={classes.textColorPurple}
        >
          <Box className={classes.customFont}>
            About <br />
          </Box>
        </Typography>
        <Typography component="h6" variant="h6">
          <Box>
            Dynamic and self-driven Software Engineer with an advanced technical
            mindset,
            <br />
            strong business acumen and a Bachelor of Science (BS) in Electrical
            Engineering.
            <br />
            In-depth knowledge of Software Engineering and programming
            principles <br />
            across multiple platforms.
            <br />
            Experienced in functional programming, developing, testing and
            debugging code.
            <br />
          </Box>
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          className={classes.textColorPurple}
        >
          <Box className={classes.customFont}>
            <br />
            Experience
          </Box>
        </Typography>
        <Typography component="h6" variant="h6">
          <Box>
            Spindox / Full-Stack Developer / January 2020 - Present
            <br />
            Freelance / Web Developer / January 2019 - June 2019
            <br />
            Gruppo MutuiOnline / Internship Developer / July 2018 - October 2018
            <br />
          </Box>
        </Typography>
      </div>
      <Box mt={2}>
        <ButtonContainer
          left={{ link: baseUrl + "/", title: "Home" }}
          right={{ link: baseUrl + "/skills", title: "Skills" }}
        />
      </Box>
      {/** qui metterai home e skills come bottoni */}
      <Box mt={2}>{Social()}</Box> {/** soliti social se vuoi */}
    </Container>
  );
}

export default ProfilePage;

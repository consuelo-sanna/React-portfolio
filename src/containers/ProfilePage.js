/** TODO: vedi se creare una card per non mostrare lo sfondo
 *    decidi se cambiare lo sfondo, magari a dx metti un immagine fatta con le particelle.. sarebbe una bomba
 *    tasto per fermare le particelle del tutto
 *    sistema i bottoni vari
 */

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Social from "../components/Social";
import ButtonContainer from "../components/ButtonContainer";

const useStyles = makeStyles(theme => ({
  root: { marginLeft: 0, marginTop: "0%" },
  paper: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "column"
  }
}));

function ProfilePage() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          <Box fontWeight="fontWeightBold">
            Hello, <br />
          </Box>
        </Typography>
        <Typography component="h2" variant="h5">
          <Box fontWeight="fontWeightBold">
            is it me you're looking for? <br />
          </Box>
        </Typography>
        <Typography component="p" variant="h6">
          <Box>
            <br />
            I'm a Cagliari based Italian developer currently working at Spindox.{" "}
            <br />
            I've also knowledge of Electric and Electronical Engineering..{" "}
            <br />
            New experiences and challenges are my thing.
            <br />
            If you have any cool projects or opportunities, get in touch!
            <br />
          </Box>
        </Typography>
        <Typography component="h2" variant="h5">
          <Box fontWeight="fontWeightBold">
            <br />
            Experiences
          </Box>
        </Typography>
        <Typography component="p" variant="h6">
          <Box>
            Spindox / Full-Stack Developer / GEN 2020 - NOW
            <br />
            Freelance / Web Developer / GEN 2019 - JUN 2019
            <br />
            Gruppo MutuiOnline / Internship Developer / JUL 2018 - OCT 2018
            <br />
          </Box>
        </Typography>
      </div>
      <Box mt={2}>{ButtonContainer()}</Box>
      {/** qui metterai home e skills come bottoni */}
      <Box mt={2}>{Social()}</Box> {/** soliti social se vuoi */}
    </Container>
  );
}

export default ProfilePage;

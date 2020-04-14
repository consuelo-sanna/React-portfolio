/** SkillsPage TODO: inserisci i button verso Home e Portfolio */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import ButtonContainer from "../components/ButtonContainer";

import MyCard from "../components/MyCard";
import {
  LanguageList,
  MethodsToolsList,
  FrameworksLibrariesList,
} from "../components/SkillsLists";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "none",
  },
  textColorPurple: {
    color: "#6f63ad",
  },
}));

function SkillsPage() {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.root}>
      <Typography
        component="h4"
        variant="h4"
        className={classes.textColorPurple}
      >
        <Box
          fontWeight="fontWeightBold" /* display="flex" justifyContent="center"*/
        >
          Skills
        </Box>
      </Typography>
      <Grid container className={classes.container} spacing={1}>
        <Grid item lg={3} sm={6} xs={12}>
          <MyCard title={"Languages"} lista={LanguageList} />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <MyCard title={"Methods & Tools"} lista={MethodsToolsList} />
        </Grid>
        <Grid item lg={3} sm={12} xs={12}>
          <MyCard title={"Frameworks & Libs"} lista={FrameworksLibrariesList} />
        </Grid>
      </Grid>
      <Box mt={2} width={3 / 9}>
        <ButtonContainer
          left={{ link: "/", title: "Home" }}
          right={{ link: "/portfolio", title: "Portfolio" }}
        />
      </Box>
    </Container>
  );
}

export default SkillsPage;

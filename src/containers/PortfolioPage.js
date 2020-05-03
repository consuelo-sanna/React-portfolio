import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ButtonContainer from "../components/ButtonContainer";
import SliderPortfolio from "../components/SliderPortfolio";

import "swiper/css/swiper.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2%",
  },
  buttonSize: {
    maxWidth: "400px",
  },
  customFont: { fontFamily: "D3 Euronism" },
}));

function PortfolioPage() {
  const classes = useStyles();
  const baseUrl = process.env.PUBLIC_URL; //could have been done better, it is only necessary for github
  return (
    <Container component="main" className={classes.root}>
      <Typography component="h4" variant="h4">
        <Box
          className={
            classes.customFont
          } /* display="flex" justifyContent="center"*/
        >
          Recent Projects
        </Box>
      </Typography>
      <SliderPortfolio />
      <Box mt={2} className={classes.buttonSize}>
        <ButtonContainer
          left={{ link: baseUrl + "/", title: "Home" }}
          right={{ link: baseUrl + "/profile", title: "Profile" }}
        />
      </Box>
    </Container>
  );
}

export default PortfolioPage;

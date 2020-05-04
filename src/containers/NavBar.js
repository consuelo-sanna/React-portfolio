import React, { useState, Fragment } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Burger from "react-css-burger";
import Menu from "@material-ui/core/Menu";
import { menuList } from "../components/menuList";
import Hidden from "@material-ui/core/Hidden";
import imgLogoLong from "../static/images/Orocredo.png";
import imgLogoShort from "../static/images/imgLogoMinore.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "0",
    color: "primary",
  },
  logo: {
    display: "flex",
    alignSelf: "flex-end",
    margin: "auto",
    marginLeft: 0,
    marginBottom: 0,
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3b43d",
    background: "transparent",
  },
})((props) => (
  <Menu
    elevation={10}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

function NavBar() {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setIsActive(!isActive);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setIsActive(!isActive);
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Container
        component="main"
        className={classes.container}
        maxWidth={false}
      >
        <Hidden xsDown>
          <div className={classes.logo}>
            <img src={imgLogoLong} alt="Consuelo Sanna" />
          </div>
        </Hidden>
        <Hidden smUp>
          <div className={classes.logo}>
            <img src={imgLogoShort} alt="Consuelo Sanna" />
          </div>
        </Hidden>

        <Burger
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClick={isActive ? handleClose : handleClick}
          active={isActive}
          burger="spring"
          color="#7e37ac"
          hoverOpacity={0.8}
          scale={1.2}
        />
        <StyledMenu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menuList}
        </StyledMenu>
      </Container>
    </Fragment>
  );
}

export default NavBar;

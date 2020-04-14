import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Burger from "react-css-burger";
import Menu from "@material-ui/core/Menu";
import { menuList } from "../components/menuList";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "0",
    color: "primary",
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
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
    <Container component="main" className={classes.container}>
      <Burger
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClick={isActive ? handleClose : handleClick}
        active={isActive}
        burger="spring"
        color="#6f63ad"
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
  );
}

export default NavBar;

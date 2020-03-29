import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import InfoIcon from "@material-ui/icons/Info";
import CodeIcon from "@material-ui/icons/Code";
import { ListItemIcon } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.common.white,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    },
    "&:hover": {
      backgroundColor: "white",
      opacity: 0.8
    },
    paddingLeft: 0,
    paddingRight: 0,
    display: "flex"
  }
}))(MenuItem);

export const menuList = (
  <div>
    <Link href="/">
      <StyledMenuItem>
        <ListItemIcon style={{ justifyContent: "center" }}>
          <HomeIcon style={{ color: purple[700] }} />
        </ListItemIcon>
      </StyledMenuItem>
    </Link>
    <Link href="/portfolio">
      <StyledMenuItem>
        <ListItemIcon style={{ justifyContent: "center" }}>
          <BusinessCenterIcon style={{ color: purple[700] }} />
        </ListItemIcon>
      </StyledMenuItem>
    </Link>
    <Link href="/profile">
      <StyledMenuItem>
        <ListItemIcon style={{ justifyContent: "center" }}>
          <InfoIcon style={{ color: purple[700] }} />
        </ListItemIcon>
      </StyledMenuItem>
    </Link>
    <Link href="/skills">
      <StyledMenuItem>
        <ListItemIcon style={{ justifyContent: "center" }}>
          <CodeIcon style={{ color: purple[700] }} />
        </ListItemIcon>
      </StyledMenuItem>
    </Link>
    <Link href="/contact">
      <StyledMenuItem>
        <ListItemIcon style={{ justifyContent: "center" }}>
          <EmailIcon style={{ color: purple[700] }} />
        </ListItemIcon>
      </StyledMenuItem>
    </Link>
  </div>
);

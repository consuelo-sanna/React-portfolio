import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import InfoIcon from "@material-ui/icons/Info";
import CodeIcon from "@material-ui/icons/Code";
import { ListItemIcon } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.common.white,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
    "&:hover": {
      backgroundColor: "white",
      opacity: 0.8,
    },
    paddingLeft: 0,
    paddingRight: 0,
    display: "flex",
  },
}))(MenuItem);

const WhiteOnPurpleTooltip = withStyles({
  tooltip: {
    color: "white",
    fontSize: "1.8em",
    backgroundColor: "purple",
    fontFamily: "D3 Euronism",
  },
})(Tooltip);

export const menuList = (
  <div>
    <Link href={process.env.PUBLIC_URL + "/"}>
      <WhiteOnPurpleTooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 500 }}
        title="Home"
        placement="left"
      >
        <StyledMenuItem>
          <ListItemIcon style={{ justifyContent: "center" }}>
            <HomeIcon style={{ color: purple[700] }} fontSize="large" />
          </ListItemIcon>
        </StyledMenuItem>
      </WhiteOnPurpleTooltip>
    </Link>
    <Link href={process.env.PUBLIC_URL + "/portfolio"}>
      <WhiteOnPurpleTooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 500 }}
        title="Portfolio"
        placement="left"
      >
        <StyledMenuItem>
          <ListItemIcon style={{ justifyContent: "center" }}>
            <BusinessCenterIcon
              style={{ color: purple[700] }}
              fontSize="large"
            />
          </ListItemIcon>
        </StyledMenuItem>
      </WhiteOnPurpleTooltip>
    </Link>
    <Link href={process.env.PUBLIC_URL + "/profile"}>
      <WhiteOnPurpleTooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 500 }}
        title="Profile"
        placement="left"
      >
        <StyledMenuItem>
          <ListItemIcon style={{ justifyContent: "center" }}>
            <InfoIcon style={{ color: purple[700] }} fontSize="large" />
          </ListItemIcon>
        </StyledMenuItem>
      </WhiteOnPurpleTooltip>
    </Link>
    <Link href={process.env.PUBLIC_URL + "/skills"}>
      <WhiteOnPurpleTooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 500 }}
        title="Skills"
        placement="left"
      >
        <StyledMenuItem>
          <ListItemIcon style={{ justifyContent: "center" }}>
            <CodeIcon style={{ color: purple[700] }} fontSize="large" />
          </ListItemIcon>
        </StyledMenuItem>
      </WhiteOnPurpleTooltip>
    </Link>
    <Link href="mailto:consu.sanna@gmail.com" target="_blank">
      <WhiteOnPurpleTooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 500 }}
        title="Contact"
        placement="left"
      >
        <StyledMenuItem>
          <ListItemIcon style={{ justifyContent: "center" }}>
            <EmailIcon style={{ color: purple[700] }} fontSize="large" />
          </ListItemIcon>
        </StyledMenuItem>
      </WhiteOnPurpleTooltip>
    </Link>
  </div>
);

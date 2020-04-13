import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { purple } from "@material-ui/core/colors";
import { InlineIcon } from "@iconify/react";
import jqueryIcon from "@iconify/icons-cib/jquery";
import wordpressIcon from "@iconify/icons-cib/wordpress";
import javascriptIcon from "@iconify/icons-logos/javascript";
import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
import javaIcon from "@iconify/icons-logos/java";
import pythonIcon from "@iconify/icons-logos/python";
import cIcon from "@iconify/icons-logos/c";
import css3 from "@iconify/icons-logos/css-3";
import html5 from "@iconify/icons-logos/html-5";
import cSharp from "@iconify/icons-logos/c-sharp";
import cPlusplus from "@iconify/icons-logos/c-plusplus";
import webpackIcon from "@iconify/icons-logos/webpack";
import dockerIcon from "@iconify/icons-logos/docker-icon";
import mongodbIcon from "@iconify/icons-cib/mongodb";
import npmIcon from "@iconify/icons-cib/npm";
import mysqlIcon from "@iconify/icons-logos/mysql";
import reactIcon from "@iconify/icons-logos/react";
import reduxIcon from "@iconify/icons-logos/redux";
import djangoIcon from "@iconify/icons-logos/django";
import materialUi from "@iconify/icons-logos/material-ui";

export function LanguageList() {
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={javascriptIcon} />
        </ListItemIcon>
        <ListItemText primary="JavaScript" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={nodejsIcon} />
        </ListItemIcon>
        <ListItemText primary="Node.js" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={javaIcon} />
        </ListItemIcon>
        <ListItemText primary="Java" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={pythonIcon} />
        </ListItemIcon>
        <ListItemText primary="Python" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={cIcon} />
        </ListItemIcon>
        <ListItemText primary="C" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={cSharp} />
        </ListItemIcon>
        <ListItemText primary="C#" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={cPlusplus} />
        </ListItemIcon>
        <ListItemText primary="C++" />
      </ListItem>
    </List>
  );
}

export function MethodsToolsList() {
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={webpackIcon} />
        </ListItemIcon>
        <ListItemText primary="Webpack" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={npmIcon} style={{ color: "red" }} />
        </ListItemIcon>
        <ListItemText primary="NPM scripts" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={dockerIcon} />
        </ListItemIcon>
        <ListItemText primary="Docker" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={mongodbIcon} style={{ color: "green" }} />
        </ListItemIcon>
        <ListItemText primary="MongoDB" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={mysqlIcon} />
        </ListItemIcon>
        <ListItemText primary="MySQL" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={css3} />
        </ListItemIcon>
        <ListItemText primary="CSS3" />
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={html5} />
        </ListItemIcon>
        <ListItemText primary="HTML5" />
      </ListItem>
    </List>
  );
}

export function FrameworksLibrariesList() {
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={reactIcon} />
        </ListItemIcon>
        <ListItemText primary="React" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={reduxIcon} />
        </ListItemIcon>
        <ListItemText primary="Redux" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={nodejsIcon} />
        </ListItemIcon>
        <ListItemText primary="Express" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={djangoIcon} style={{ color: purple[700] }} />
        </ListItemIcon>
        <ListItemText primary="Django" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={materialUi} />
        </ListItemIcon>
        <ListItemText primary="Material UI" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={jqueryIcon} style={{ color: "navy" }} />
        </ListItemIcon>
        <ListItemText primary="jQuery" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InlineIcon icon={wordpressIcon} style={{ color: "blue" }} />
        </ListItemIcon>
        <ListItemText primary="Wordpress" />
      </ListItem>
    </List>
  );
}

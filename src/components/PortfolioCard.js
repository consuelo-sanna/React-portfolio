import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LaunchIcon from "@material-ui/icons/Launch";
import CodeIcon from "@material-ui/icons/Code";
import { purple } from "@material-ui/core/colors";

/** TODO: Card Portfolio
Titolo
(Sottotitolo) - Tecnologie 
Video - Immagine
Link Pagina
Source Code 


<CardMedia title={props.title} className={classes.media}>
          <video width="400" controls>
            <source src={props.mediaContent} type="video/mp4" />
          </video>
        </CardMedia>
        
        */

const useStyles = makeStyles((theme) => ({
  root: { padding: "0.5em", border: "2px" },
  media: {
    display: "flex",
    justifyContent: "center",
  },
  colorPurple: {
    color: "#6f63ad",
  },
  paper: {
    marginTop: theme.spacing(2),
    flexDirection: "column",
    alignItems: "center",
    background: "black",
    color: "white",
    padding: "0.5em",
    opacity: 0.9,
    borderRadius: "1em",
  },
}));

export default function PortfolioCard(props) {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <Card className={classes.root}>
        <Typography component="h4" variant="h4" className={classes.colorPurple}>
          <Box
            fontWeight="fontWeightBold" /* display="flex" justifyContent="center"*/
          >
            {props.title}
          </Box>
        </Typography>
        <Typography component="h4" variant="h6">
          <Box>{props.subtitle}</Box>
        </Typography>
        <CardMedia
          title={props.title}
          className={classes.media}
          component="img"
          alt={props.title}
          image={props.mediaContent}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.textContent}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="go to site"
            target="_blank"
            href={props.linkSite}
          >
            <LaunchIcon className={classes.colorPurple} />
          </IconButton>
          <IconButton
            aria-label="source code"
            target="_blank"
            href={props.linkCode}
          >
            <CodeIcon className={classes.colorPurple} />
          </IconButton>
        </CardActions>
      </Card>
    </Paper>
  );
}

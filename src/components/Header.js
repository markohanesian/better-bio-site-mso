import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  image: {
    height: "96px",
    width: "96px",
    borderRadius: "50%",
    display: 'flex',
    alignSelf: 'center',
  },
  heading: {
    fontSize: "20px",
    fontWeight: "300",
    marginTop: '1rem'
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: "14px",
    fontWeight: "400",
    maxWidth: '22rem'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
    textAlign: 'center',
    marginBottom: "2rem"
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.image} src="mark-headshot.jpg" alt="mark"></img>
      <Typography
        className={classes.heading}
        gutterBottom
        variant="h1"
        component="h2"
      >
        Hello, I'm Mark
      </Typography>
      <Typography
        className={classes.subtitle}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        Enthusiastic and self-motivated full stack web developer and designer with 5+ years of web experience. Skillful communicator with experience planning, leading, and executing multiple projects with clarity and efficiency.
      </Typography>
    </div>
  );
}

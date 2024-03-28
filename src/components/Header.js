import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SocialBar from "./SocialBar";

const useStyles = makeStyles({
  image: {
    height: "144px",
    width: "144px",
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
        Hello, I'm John Doe
      </Typography>
      <Typography
        className={classes.subtitle}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        With a flair for creativity and over a decade of experience, John Doe is a dynamic designer known for delivering innovative solutions. Combining technical expertise with artistic vision, he consistently surpasses client expectations. Explore John Doe's portfolio to witness a fusion of skillful craftsmanship and visionary thinking.
      </Typography>
      <SocialBar />
    </div>
  );
}

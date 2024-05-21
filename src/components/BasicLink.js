// BasicLink.js

import React from "react";
import { Button, Avatar, makeStyles } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "50px", // Rounded edges
    padding: theme.spacing(2), // Adjust padding as needed
    display: "flex",
    justifyContent: "left",
    alignItems: "center", // Center the avatar and text
    width: "90vw",
    maxWidth: "666px",
    marginBottom: theme.spacing(2)
  },
  avatar: {
    marginRight: theme.spacing(1), // Space between avatar and text
  },
}));

const BasicLink = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      style={{ background: theme.palette.text.secondary }}
      className={classes.button}
      href="https://your-link-here.com"
      target="_blank"
    >
      <Avatar
        alt="Your Avatar"
        src="/path/to/your/avatar-image.jpg" 
        className={classes.avatar}
        style={{ color: theme.palette.text.primary }}
      />
      Visit My Link
    </Button>
  );
};

export default BasicLink;

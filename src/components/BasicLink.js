// BasicLink.js

import React from "react";
import { Button, Avatar, makeStyles } from "@material-ui/core";

// Define your custom styles using makeStyles
const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "50px", // Rounded edges
    padding: theme.spacing(2), // Adjust padding as needed
    display: "flex",
    justifyContent: "left",
    alignItems: "center", // Center the avatar and text
    width: "100%",
    maxWidth: "666px",
  },
  avatar: {
    marginRight: theme.spacing(1), // Space between avatar and text
  },
}));

const BasicLink = () => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      href="https://your-link-here.com"
      target="_blank"
    >
      <Avatar
        alt="Your Avatar"
        src="/path/to/your/avatar-image.jpg" // Replace with your actual image URL
        className={classes.avatar}
      />
      Visit My Link
    </Button>
  );
};

export default BasicLink;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { Facebook, Twitter, Instagram, LinkedIn } from '@material-ui/icons';

const socialMediaIcons = [
  { icon: <Facebook />, link: 'https://facebook.com' },
  { icon: <Twitter />, link: 'https://twitter.com' },
  { icon: <Instagram />, link: 'https://instagram.com' },
  { icon: <LinkedIn />, link: 'https://linkedin.com' },
  // Add more social media icons as needed
];

const useStyles = makeStyles((theme) => ({
  iconButton: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));

const SocialMediaBar = () => {
  const classes = useStyles();

  return (
    <div>
      {socialMediaIcons.map((item, index) => (
        <IconButton
          key={index}
          className={classes.iconButton}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </IconButton>
      ))}
    </div>
  );
};

export default SocialMediaBar;
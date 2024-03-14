import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CameraAlt from '@material-ui/icons/CameraAlt';
import { useHistory } from 'react-router-dom';
import { Camera } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    maxWidth: 'fit-content',
    alignSelf: 'center'
  },
  NavButtons: {
    margin: '.5rem'
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    const handleChange = (event, newValue) => {
      history.push(`/${newValue}`);
      setValue(newValue);
    };
    
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange} 
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.NavButtons} value="home"  label="Links" icon={<HomeIcon />} />
      <BottomNavigationAction className={classes.NavButtons} value="photos"  label="Photos" icon={<CameraAlt />} />
      <BottomNavigationAction className={classes.NavButtons} value="shop" label="Shop" icon={<ShoppingCartIcon />} />
    </BottomNavigation>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom:10,

    padding:0
  },
  menu: {
    color: "#d8d8d8",
  },
  listItem: {
    padding:10,
    height:"32px",
    margin:0,
    height: "100%"
  },
  text:{
    fontFamily:"Muli",
    fontWeight:600,
    fontSize:14,
    color:theme.textColor
  },
  hint:{
    fontFamily:"Muli",
    fontSize:11,
    color:"#a4a4a4"
  },
  list:{
    width:200,
    padding:0,
    backgroundColor: "#F4F5F4",
    height:"30px",
    margin:0
  }
}));


export default function OntologySelectedMenu(props) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickListItem = (event, index) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, index) => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
    <Typography className={classes.hint}>
      {props.hintText}
    </Typography>
      <List component="nav" aria-label="Device settings" className={classes.list}>
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
          className={classes.listItem}
        >
          <ListItemText>
          <div className={classes.textContainer}>
          <Typography className={classes.text}>
          {props.options[selectedIndex]}
          </Typography>
          </div>
          </ListItemText>
          <ExpandMoreIcon />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        boxShadow={1}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        {props.options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

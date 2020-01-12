import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
  faBars
} from '@fortawesome/free-solid-svg-icons'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  button: {
    color: theme.primary,
    flex: 1,
    margin: theme.spacing(1),
    textPrimary: true
  },
  buttonText: {
    fontFamily: "Muli",
    fontWeight: 700,
    fontSize: 16,
    color: "#fff"
  },
}));

export default function OntologyAppBar(props) {
  const classes = useStyles();

  return (
    <Button
       variant="contained"
       style={{backgroundColor:props.color}}
       className={classes.button}
        >
       <Typography className={classes.buttonText}>{props.buttonText}</Typography>
     </Button>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  appBar:{
    background:theme.secondary,
  },
  socialItem:{
    fontFamily:"Muli",
    fontWeight:600,
    fontSize:14,
    color:"#ffffff"
  },
  menuItem:{
    fontFamily:"Muli",
    fontWeight:600,
    fontSize:14,
    color:theme.secondary
  },
  menuButton: {
    borderRadius:4,
    marginRight: theme.spacing(1),
  },
  socialButton:{
    borderRadius:4,
    backgroundColor:"#55ACEE",
    marginRight: theme.spacing(1),
    '&:hover': {
            backgroundColor: '#657786',
        }
  },
  title: {
    flexGrow: 1,
    fontFamily:"Lato",
    fontWeight:700,
    fontSize:24,
    color:theme.textColor
  },
}));

export default function OntologyAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar  className={classes.appBar} position="static">
        <Toolbar>
          <Typography color="textPrimary" className={classes.title}>
            ONTOLOGY
          </Typography>
          <Button
             variant="contained"
             color="default"
             className={classes.socialButton}
             startIcon={<FontAwesomeIcon color="#ffffff" icon={faTwitter} />}
           >
             <Typography color="textSecondary" className={classes.socialItem}>Follow</Typography>
           </Button>
          <Button className={classes.menuButton}><Typography color="textSecondary" className={classes.menuItem}>Feedback</Typography></Button>
          <Button className={classes.menuButton}><Typography color="textSecondary" className={classes.menuItem}>About</Typography></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

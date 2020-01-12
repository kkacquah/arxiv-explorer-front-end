import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Input } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import OntologyButton from '../../components/OntologyButton'

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily:"Muli",
    fontWeight:700,
    fontSize:36,
  },
  subtitle: {
    fontFamily:"Muli",
    fontSize:18,
    color:"#737B7D"
  },
  textField:{
    display: "flex",
    padding:5,
    borderWidth:0,
    backgroundColor:'#ffffff',
    flex:4
  },
  queryInputContainer:{
    marginTop:theme.spacing(3),
    display: "flex",
    flexDirection: 'row'
  },
  searchButton:{
    color:theme.primary,
    flex: 1,
    marginLeft: theme.spacing(1),
    textPrimary: true
  },
  searchButtonText:{
    fontFamily:"Muli",
    fontWeight:700,
    fontSize:16,
    color:"#fff"
  },
  input:{
    color: '#373F41'
  },
  root:{
    width: 500
  },
}));

export default function LandingPageQueryField() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Typography color="textSecondary" className={classes.title}>
      Explore new discoveries happening  around the world.
    </Typography>
    <Typography className={classes.subtitle}>
      Generate interactive visualizations of the trending topics in scientific research.
    </Typography>
    <div className={classes.queryInputContainer}>
    <TextField className={classes.textField} InputProps={{className: classes.input,color:"textSecondary",disableUnderline: true}}/>
    <OntologyButton
       buttonText={"Search"}
       color={"#3C64B1"}
        />
    </div>
    </div>
  );
}

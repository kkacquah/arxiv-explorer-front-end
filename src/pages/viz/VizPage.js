import React from 'react';
import OntologyAppBar from '../home/OntologyAppBar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height:"100vh",
    minWidth: 1200,
    backgroundColor: "#ffffff"
  },
}));


export default function VizPage() {
  const classes = useStyles();

  return (
          <div className={classes.root}>
          <OntologyAppBar menu={true}/>
          </div>
      );
    }

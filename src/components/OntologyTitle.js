import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    fontFamily:"Lato",
    fontWeight:700,
    fontSize:24,
    color:"#3C64B1",
    marginBottom:10
  },
}));

export default function OntologyTitle(props) {
  const classes = useStyles();

  return (
    <Typography color="textPrimary" className={classes.title}>
    ONTOLOGY
    </Typography>
  );
}

import React, {
  useState
} from 'react';
import OntologyAppBar from '../../components/OntologyAppBar'
import VizOptionsView from './VizOptionsView'
import {
  Drawer
} from '@material-ui/core';
import {
  makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 1200,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  drawer: {
    color: "#ffffff"
  },
  body: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: 1200
  },
  paper: {
    background: 'white',
  }
}));


export default function VizPage() {
  const classes = useStyles();
  const [drawerState, toggleDrawerState] = useState(false);

  return (
    <div className={classes.root}>

          <OntologyAppBar menu={true} onMenuPress={() => toggleDrawerState(true)}/>
          <div className={classes.body}>
          </div>
          <Drawer classes={{ paper: classes.paper }} anchor="left" open={drawerState} className={classes.drawer} onClose={() => toggleDrawerState(false)}>
          <VizOptionsView/>
      </Drawer>
      </div>
  );
}
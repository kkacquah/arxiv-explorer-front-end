import React from 'react';
import OntologyAppBar from '../../components/OntologyAppBar'
import HomeVisualizerPreview from './HomeVisualizerPreview'
import LandingPageQueryField from './LandingPageQueryField'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height:"100vh",
    minWidth: 1200
  },
  body:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    width: 1200
  },
  homeVisualizerPreviewContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    flex: 1,
  },
}));


export default function HomePage() {
  const classes = useStyles();

  return (
          <div className={classes.root}>
          <OntologyAppBar/>
          <div className={classes.body}>
          <div className={classes.mainContainer}>
          <div className={classes.homeVisualizerPreviewContainer}>
          <HomeVisualizerPreview />
          </div>
          <div className={classes.homeVisualizerPreviewContainer}>
<LandingPageQueryField />
          </div>
          </div>
          </div>
          </div>
      );
    }

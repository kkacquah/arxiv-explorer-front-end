import React from 'react';
import BarLoader from "react-spinners/BarLoader";
import {
  makeStyles
} from '@material-ui/core/styles';

var options = {
    lines: 13,
    length: 20,
    width: 10,
    radius: 30,
    scale: 1.00,
    corners: 1,
    color: '#3C64B1',
    opacity: 0.25,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    top: '50%',
    left: '50%',
    shadow: false,
    hwaccel: false,
};

const useStyles = makeStyles(theme => ({
  plotContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "500px",
    height: "70vh",
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#ffffff"
  }
}));

export default function OntologyLoader() {
  const classes = useStyles();

  return (
    <div
    className={classes.plotContainer}
    >
    <BarLoader
     loaded={false}
     height={10}
     width={200}
      //size={"150px"} this also works
      color={"#3C64B1"}
     loading={true}
     className="bar" />
     </div>
  );
}

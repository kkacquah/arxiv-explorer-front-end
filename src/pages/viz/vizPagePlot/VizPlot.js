import React from 'react';
import { Line } from 'react-chartjs-2';
import  plotOptions  from './options'
import  landingPageData  from './data'
import { makeStyles } from '@material-ui/core/styles';
import  { convertQueryResponseToDataset}  from '../../../utils/timeSeries'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 50,
    display: "flex",
    height: "70vh",
    backgroundColor: "#ffffff"
  },
}));


const data = {
  datasets: convertQueryResponseToDataset(landingPageData)
};


export default function VisualizerPlot() {
  const classes = useStyles();

  return (
      <div className={classes.root}>

          <Line data={data} options={plotOptions} />
          </div>
      );
    }

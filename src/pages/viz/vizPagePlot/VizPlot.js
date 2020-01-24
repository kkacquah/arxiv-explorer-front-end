    import React from 'react';
    import {
      Line
    } from 'react-chartjs-2';
    import Typography from '@material-ui/core/Typography';
    import VisualizerLegend from './Legend'
    import landingPageData from './data'
    import {
      convertResponseMapToDataset
    } from '../../../utils/timeSeries'
    import {
      getDatapoints
    } from '../../../services/datapoints'
    import {
      makeStyles
    } from '@material-ui/core/styles';
    import {
      defaults
    } from 'react-chartjs-2';
    import {
      getColor
    } from '../../../utils/lists'
    import
    plotOptions
    from '../../../utils/plotOptions'
    import {
      useCookies
    } from 'react-cookie';

    defaults.global.defaultFontFamily = "Muli";


    const useStyles = makeStyles(theme => ({
      plotContainer: {
        padding: 50,
        display: "flex",
        flexDirection: "column",
        minHeight: "500px",
        height: "70vh",
        backgroundColor: "#ffffff"
      },
      title: {
        flexGrow: 1,
        fontFamily: "Muli",
        fontWeight: 700,
        fontSize: 32,
        color: theme.textColor
      },
      plotHeader: {
        marginLeft: 36
      },
      plotLegend: {
        display: "flex",
        flexWrap: "wrap"
      }
    }));
    export default function VisualizerPlot(props) {
      const classes = useStyles();
      const [cookies] = useCookies(['categoryIndex', 'rangeIndex', 'stackedIndex']);
      const data = {
        datasets: convertResponseMapToDataset(props.labels)
      };


      return (
        <div className={classes.plotContainer}>
          <div className={classes.plotHeader}>
          <Typography color="textSecondary" className={classes.title}>
            Interest Over Time
          </Typography>
          <VisualizerLegend

             onRemoveLabel = {props.onRemoveLabel}
             onAddLabel = {props.onAddLabel}
              labels={props.labels}/>
          </div>
              <Line data={data} options={plotOptions.getPlotOptions(props.type)} />
              </div>
      );
    }
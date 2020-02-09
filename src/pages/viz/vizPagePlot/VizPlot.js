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
    import OntologyLoader from '../../../components/OntologyLoader'

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
      prompt: {
        flexGrow: 1,
        fontFamily: "Muli",
        fontWeight: 600,
        fontSize: 40,
        textAlign: "center",
        color: "#a4a4a4"
      },
      promptContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
      console.log(![...props.labels.keys()].length);

      function GetPlot() {
        return ([...props.labels.keys()].length === 0 ?
          <div className={classes.promptContainer}>
          <Typography color="textSecondary" className={classes.prompt}>
          Add a topic to explore its interest.
        </Typography>
      </div> :
          <Line data={data} options={plotOptions.getPlotOptions(props.type)} />);
      }

      return (
        <div className={classes.plotContainer} >
          <div className={classes.plotHeader}>
          <Typography color="textSecondary" className={classes.title}>
            Interest Over Time
          </Typography>
          <VisualizerLegend

             onRemoveLabel = {props.onRemoveLabel}
             onAddLabel = {props.onAddLabel}
              labels={props.labels}/>
          </div>
          { props.isLoading?

             /* Show loading animation if get datapoints call
            is loading
            */
             //[...props.labels.keys()].length === 0 ?
            <OntologyLoader/>
            :
          <GetPlot/>
      }

              </div>
      );
    }
import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  Input
} from '@material-ui/core';
import {
  TextField
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import OntologyButton from '../../components/OntologyButton'
import {
  getDatapoints
} from '../../services/datapoints'
import {
  getColor
} from '../../utils/lists'
import {
  useHistory
} from "react-router-dom";
import plotOptions from '../../utils/plotOptions'
import {
  useCookies
} from 'react-cookie';

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Muli",
    fontWeight: 700,
    fontSize: 36,
  },
  subtitle: {
    fontFamily: "Muli",
    fontSize: 18,
    color: "#737B7D"
  },
  textField: {
    display: "flex",
    padding: 5,
    borderWidth: 0,
    backgroundColor: '#ffffff',
    flex: 4,
    zIndex: 0
  },
  queryInputContainer: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: 'row'
  },
  searchButton: {
    color: theme.primary,
    flex: 1,
    marginLeft: theme.spacing(1),
    textPrimary: true
  },
  searchButtonText: {
    fontFamily: "Muli",
    fontWeight: 700,
    fontSize: 16,
    color: "#fff"
  },
  input: {
    color: '#373F41'
  },
  root: {
    width: 500,

  },
}));

export default function LandingPageQueryField(props) {
  const classes = useStyles();
  const history = useHistory();

  const [phrase, setPhrase] = React.useState("");
  const [plotStateIndicies, ] = React.useState({
    typeIndex: 0,
    rangeIndex: 0,
    categoryIndex: 0
  });
  const setInputValue = (event) => {
    setPhrase(event.target.value);
  }
  const onPressSearch = () => {
    const onSuccess = response => {
      //push navigation to viz with response
      const newState = {
        labels: new Map()
      };
      newState.labels.set(phrase, {
        color: getColor(phrase),
        pointArray: response.data.pointArray[phrase]
      });
      history.push(`/viz?rangeIndex=0&typeIndex=0&categoryIndex=0&labelKeys=${phrase}`);
    };
    const plotStateValues = plotOptions.getPlotStateValues(plotStateIndicies)
    //set initialization flag
    getDatapoints(phrase, plotStateValues, onSuccess, props.onError);

  }

  return (
    <div className={classes.root}>
    <Typography className={classes.title}>
      Explore new discoveries happening  around the world.
    </Typography>
    <Typography className={classes.subtitle}>
      Generate interactive visualizations of the trending topics in scientific research.
    </Typography>
    <div className={classes.queryInputContainer}>
    <TextField onChange={setInputValue} className={classes.textField} InputProps={{className: classes.input,disableUnderline: true}}/>
    <OntologyButton
       buttonText={"Search"}
       color={"#3C64B1"}
       onPress={onPressSearch}
       marginLeft={8}
        />
    </div>
    </div>
  );
}
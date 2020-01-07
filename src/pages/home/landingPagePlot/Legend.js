import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  plotLegend:{
    display: "flex",
    flexWrap: "wrap"
  },
  legendItem:{
    marginRight: 4,
    marginTop: 2,
    marginBottom: 2
  },
  legendText:{
    fontFamily:"Muli",
    fontWeight:600,
    fontSize:10,
    color:"#ffffff"
  }
}));

function LegendItems(props) {
  const classes = useStyles();
  const legendItems = props.labels.map((label) =>
  (<Button
     variant="contained"
     className={classes.legendItem}
     size= 'small'
     style={{backgroundColor:label.color }}
   >
     <Typography color="textSecondary" className={classes.legendText}>{label.name}</Typography>
   </Button>)
  );
  return legendItems;
}

export default function VisualizerLegend(props) {
  const classes = useStyles();

  return (
      <div className={classes.plotLegend}>
      <LegendItems labels={props.labels} />
      </div>
      );
    }

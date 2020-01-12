import React, {
  useState
} from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import OntologyTitle from '../../components/OntologyTitle'
import OntologySelectedMenu from '../../components/OntologySelectedMenu'
import OntologyButton from '../../components/OntologyButton'

const useStyles = makeStyles(theme => ({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height:"100%",
    padding: 25,
    width: 250
  },
  header:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttons:{
    display: "flex",
    width: "100%",
    flexDirection: "column"
  },
  title: {
    flexGrow: 1,
    fontFamily:"Lato",
    fontWeight:700,
    fontSize:24,
    marginBottom:10,
    color:"#3C64B1"
  },

}));


const rangeOptions = [
  'Past 3 Months',
  'Past Year',
  'Past Five Years',
  'Past 10 Years',
  '1994 - present'
]

const typeOptions = [
  'Line Chart',
  'Stacked Chart'
]

const categoryOptions = [
  'Physics',
  'Mathematics',
  'Computer Science',
  'Quantitative Biology',
  'Quantitative Finance',
  'Statistics',
]

export default function VizOptionsView() {
  const classes = useStyles();
  const [drawerState, toggleDrawerState] = useState(false);

  return (
    <div className={classes.body}>
    <div className={classes.header}>
    <OntologyTitle/>
    <OntologySelectedMenu hintText={"Range"} options={rangeOptions}/>
      <OntologySelectedMenu hintText={"Type"} options={typeOptions}/>
        <OntologySelectedMenu hintText={"Category"} options={categoryOptions}/>
        </div>
        <div className={classes.buttons}>
        <OntologyButton color={"#3C64B1"} buttonText={"Share Link"}/>
        <OntologyButton color={"#373F41"} buttonText={"Save Image"}/>
        </div>
      </div>
  );
}

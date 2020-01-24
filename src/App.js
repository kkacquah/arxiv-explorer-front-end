import React from 'react';
import HomePage from './pages/home/HomePage';
import VizPage from './pages/viz/VizPage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

export default function App() {

  return (
    <Router>
    <Switch>
    //TODO: Create generic ontology page component for handling errors
    <Route path="/viz" render={() => <VizPage/>} />
    <Route path="/" render={() => <HomePage/>}/>
    </Switch>
  </Router>);
}
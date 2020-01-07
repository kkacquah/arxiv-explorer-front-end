import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import HomePage from './pages/home/HomePage';
import theme from './theme';
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Router>
    <Route path="/" component={HomePage}/>
  </Router>
  </ThemeProvider>,
  document.querySelector('#root'),
);

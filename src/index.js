import ReactDOM from 'react-dom';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import App from './App';
import {
  Route,
  Switch,
  useLocation
} from 'react-router-dom'

//configure environment variables
require('dotenv').config();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App/>

  </ThemeProvider>,
  document.querySelector('#root'),
);

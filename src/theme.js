import {
  red
} from '@material-ui/core/colors';
import {
  createMuiTheme
} from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    default: {
      main:'#3C64B1',
    },
    primary: {
      main:'#e1e7f3',
    },
    secondary: {
      main: '#3C64B1',
    },
    text: {
      primary: "#3C64B1",
      secondary: "#373F41"
    },
    button: {
      primary: "#3C64B1",
      secondary: "#373F41"
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#e1e7f3'
    },
  },

  typography: {
    button: {
      textTransform: "none"
    },
    fontFamily: [
      'Lato',
      'Muli'
    ].join(','),
  },
  shadows: ["none"],
  background: {
    default: '#fff',
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
      },
      MuiInput:{
        color: "#373F41"
      }
    }
  }
});

export default theme;

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily:'"Comic Neue", cursive',
  },
  palette: {
    primary: {
      main: '#000000',
      light:'#e2e5e6',
      contrastText:'#00000'
    },
    secondary: {
      main: '#000000',
      light:'#b9d9cc'
    },
    error: {
      main: red.A400,
    },
    background:{
      default:'#eeeeee'
    }
  },
  components: {
    MuiSvgIcon: {
      styleOverrides:{
        root:{
          color:"primary.light"
        }
      }
    },
    MuiButton:{
      styleOverrides:{
        root:{
          textTransform:"none"
        }
      }
    },
    MuiTab:{
      styleOverrides:{
        root:{
          textTransform:"none",
          fontWeight:'bold'
        }
      }
    }
  },

});

export default theme;
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({


  cssVariables: true,
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
  palette: {
    primary: {
      main: '#3d3f3c',
      light:'#22755b',
      contrastText:'#152625'
    },
    secondary: {
      main: '#0baed4',
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
  },

});

export default theme;
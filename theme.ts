import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({


  cssVariables: true,
  typography: {
    fontFamily: " 'Playfair Display', 'Roboto', 'Arial', sans-serif",
  },
  palette: {
    primary: {
      main: '#1E4854',
      light:'#22755b',
      contrastText:'#152625'
    },
    secondary: {
      main: '#757575',
      light:'#b9d9cc'
    },
    error: {
      main: red.A400,
    },
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
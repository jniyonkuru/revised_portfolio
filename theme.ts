import { createTheme } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';



const generateTheme=(darkTheme:boolean=true)=>{

  const theme = createTheme({

    cssVariables: true,
    typography: {
      fontFamily:'"Comic Neue", cursive',
    },
    palette: {
      mode:darkTheme ?"dark":'light',
      primary: {
        main: darkTheme?"#333446":'#fce8b5',
        light:'#e2e5e6',
        contrastText:'#09122C'
      },
      secondary: {
        main:"#EAEFEF",
        light: darkTheme?'#7F8CAA':"#FBF3D5"
      },
      error: {
        main: red.A400,
      },
      text:{
        primary:darkTheme?"#F9F6F3":'#000000',
        
      
      },
      background:{
        default: darkTheme?'#0B192C':'#F2EFE7'
      }
    },
    components: {
      MuiSvgIcon: {
        styleOverrides:{
          root:{
            color:darkTheme?grey[500]:'black'
          }
        }
      },
      MuiButton:{
        styleOverrides:{
          root:{
            textTransform:"none",
            borderColor:darkTheme?grey[500]:'black'

          }
        }
      },
      MuiTabs:{
        styleOverrides:{
          indicator:{
            backgroundColor: darkTheme? grey[500]:'black'
          }
        }
      },
      MuiTab:{
        styleOverrides:{
          root:{
            textTransform:"none",
            fontWeight:'bold',
            '&.Mui-selected':{
              color: darkTheme?grey[500]:'black'}
          }
        }
      }
    },
  
  });

   return theme;

}








export default generateTheme;
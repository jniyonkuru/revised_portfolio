import { createTheme } from "@mui/material/styles";
import { grey, red } from "@mui/material/colors";

const generateTheme = (darkTheme: boolean = true) => {
  const theme = createTheme({
    cssVariables: true,
    typography: {
      fontFamily: '"Comic Neue", cursive',
      fontSize:12
    },
      shadows: [
    "none",
    "0px 1px 2px rgba(0,0,0,0.1)", // elevation 1
    "0px 2px 4px rgba(0,0,0,0.1)", // elevation 2
    "none", "none", "none", "none", "none", "none", "none", "none", "none", "none",
    "none", "none", "none", "none", "none", "none", "none", "none", "none", "none",
    "none", "none",
  ] as const
    ,
    palette: {
      mode: darkTheme ? "dark" : "light",
      primary: {
        main: darkTheme ? "#333446" : "#ece6d2",
        light: darkTheme ? "#646573" : "#dddedf",
        contrastText: "#09122C",
      },
      secondary: {
        main: "#EAEFEF",
        light: darkTheme ? "#7F8CAA" : "#FBF3D5",
        contrastText: darkTheme ? "#F9F6F3" : "#000000",
      },
      error: {
        main: red.A400,
      },
      text: {
        primary: darkTheme ? "#F9F6F3" : "#000000",
      },
      background: {
        default: darkTheme ? "#0B192C" : "#F2EFE7",
      },
    },
    shape: {
      borderRadius:3
    },
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: darkTheme ? grey[500] : "black",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderColor: darkTheme ? grey[500] : "black",
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: darkTheme ? grey[500] : "black",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: "bold",
            "&.Mui-selected": {
              color: darkTheme ? grey[500] : "black",
            },
          },
        },
      },
    },
  });

  return theme;
};

export default generateTheme;

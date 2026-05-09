import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const generateTheme = (darkTheme: boolean = true) => {
  const theme = createTheme({
    cssVariables: true,
    spacing: 8,
    typography: {
      fontFamily: '"Comic Neue", cursive',
      fontSize: 12,
    },
    shadows: [
      "none",
      "0px 1px 2px rgba(0,0,0,0.1)", // elevation 1
      "0px 2px 4px rgba(0,0,0,0.1)", // elevation 2
      "none", "none", "none",
      "0px 4px 10px rgba(0,0,0,0.25)", // elevation 6 — floating action button (rest)
      "none", "none", "none", "none", "none",
      "0px 6px 16px rgba(0,0,0,0.3)", // elevation 12 — floating action button (hover)
      "none", "none", "none", "none", "none", "none",
      "none", "none", "none", "none", "none", "none",
    ] as const,
    palette: {
      mode: darkTheme ? "dark" : "light",
      primary: {
        // kept as-is for both themes
        main: darkTheme ? "#333446" : "#ece6d2",
        light: darkTheme ? "#4a4b63" : "#f5f1e3",
        dark: darkTheme ? "#232433" : "#d8d0b8",
        // primary.main is dark in dark mode and light in light mode, so the
        // contrast text must flip accordingly (the old value was dark in both).
        contrastText: darkTheme ? "#f9f6f3" : "#09122c",
      },
      secondary: {
        // muted slate-blue accent that reads well over both primaries
        main: "#7f8caa",
        light: "#9aa6c0",
        dark: "#5e6a86",
        // NOTE: several components use secondary.contrastText as a hairline
        // border color, so it must contrast the page background (light line in
        // dark mode, dark line in light mode) rather than the accent itself.
        contrastText: darkTheme ? "#f9f6f3" : "#1a1a1a",
      },
      error: {
        main: red.A400,
        contrastText: "#ffffff",
      },
      warning: {
        main: darkTheme ? "#ffa726" : "#ed6c02",
        contrastText: darkTheme ? "#1a1a1a" : "#ffffff",
      },
      info: {
        main: darkTheme ? "#4fc3f7" : "#0288d1",
        contrastText: darkTheme ? "#0b1410" : "#ffffff",
      },
      success: {
        main: darkTheme ? "#66bb6a" : "#2e7d32",
        contrastText: darkTheme ? "#0b1410" : "#ffffff",
      },
      text: {
        primary: darkTheme ? "#f9f6f3" : "#1a1a1a",
        secondary: darkTheme ? "#a7aaba" : "#585b66",
        disabled: darkTheme ? "#6a6d7c" : "#9a9ca3",
      },
      background: {
        default: darkTheme ? "#1b1c28" : "#f2efe7",
        paper: darkTheme ? "#2a2b3a" : "#fbf9f3",
      },
      divider: darkTheme ? "rgba(249,246,243,0.12)" : "rgba(9,18,44,0.12)",
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            // Inherit the surrounding color so icons follow their context
            // (button/Fab/text) instead of being forced to a single grey.
            color: "inherit",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: darkTheme ? "#7f8caa" : "#333446",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: "bold",
            "&.Mui-selected": {
              color: darkTheme ? "#f9f6f3" : "#333446",
            },
          },
        },
      },
    },
  });

  return theme;
};

export default generateTheme;

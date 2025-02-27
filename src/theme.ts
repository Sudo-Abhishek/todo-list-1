import type { Theme } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";


export const defaultTheme: Theme = createTheme({
  typography: {
    fontFamily: `"Roboto", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    mode: "light",
    divider: "rgba(0, 0, 0, 0.08)", // Adjust contrast for light background
    primary: {
      main: "#ffffff", // dark black for primary
      light: "rgb(216, 230, 236)",
      dark : "#f0f3f5"
    },
    secondary: {
      main: "#c7cfd2", //"#e5eef2", // Lighter version of secondary
      light: "rgb(216,230,236,0.4)", // data table header
    },
    error: {
      main: "#dc3545", // Adjust for better contrast on light background
      light: "#ee6666",
      contrastText: "#ee9ca4",
    },
    success: {
      main: "#39ac73", // Use Material Design's green
      light: "#BEE2C4", // workorder wiget header
      dark: "#009999",
    },
    warning: {
      main: "#ffc61a", // Use Material Design's yellow
    },
    info: {
      main: "#3973ac", // Use Material Design's blue
      light: "#0000ff", // use in link color
      dark: "#230cf0",
    },
   
    background: {
      default: "#f0f3f5",
      paper: "#ffffff",
    },

    grey: {
      100: "#dee2e6", // using this color to give border of dataTable and other places.
      400: "rgba(255, 255, 255, 0.8)",
      600: "#000", //tiles usage color
    },
    common: {
      black: "#000", // Black for text in light theme
      white: "#fff",
    },
    text: {
      primary: "#000", // Dark text for better contrast
      secondary: "#666666", // Less dark text for secondary
      disabled: "rgba(0, 0, 0, 0.5)",
    },
    action: {
      hover: "rgba(0, 0, 0, 0.08)",
      selected: "#e0e8ef",
      // active:"#74b9ff",
      focus: "#1e88e5",
    },
 
  },
});

export const darkTheme: Theme = createTheme({
  typography: {
    fontFamily: `"Roboto",sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    mode: "dark",
    divider: "rgba(218, 224, 231, 0.08)",
    primary: {
      main: "#1d2832",
      light: "rgb(216, 230, 236)",
      dark : "#1d2832"
    },
    secondary: {
      main: "#3b4d5e",
      light: "#1d2832", // header of the datatable
    },
    error: {
      main: "#dc3545", // Adjust for better contrast on light background
      light: "#ee6666",
      contrastText: "#ee9ca4",
    },
    success: {
      main: "#39ac73", // Use Material Design's green
      light: "#05817e",
      dark: "#009999",
    },
    warning: {
      main: "#ffc61a", // Use Material Design's yellow
    },
    info: {
      main: "#3973ac", // Use Material Design's blue
      light: "#0e7cf4",
      dark: "#230cf0",
    },
   
    background: {
      default: "#1d2832",
      paper: "#24323e",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    grey: {
      100: "#334657",
      400: "rgba(13, 18, 32, 0.8)",
      500: "rgba(33, 33, 33, 1)",
      600: "#9E9FA5",
    },
    text: {
      primary: "#ced9e2",
      secondary: "rgba(206, 217, 226, 0.42)", //TODO need to be investigate why this color is automatically applying on dropdown Label
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    action: {
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "#24323e",
      // active:"#74b9ff",  //TODO need to be investigate why this color is automatically applying on dropdown svg
      focus: "#74b9ff",
    },
  },
});

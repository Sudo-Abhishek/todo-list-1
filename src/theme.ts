import type { Theme } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tile: {
      first: string;
      second: string;
      third: string;
      overView: string;
      fadeText: string;
    };
    header: {
      main: string;
      default: string;
    };
    border: {
      main: string;
      light: string;
      default: string;
    };
    sideBar: {
      main: string;
      light: string;
      background: string;
    };
    filterbg: {
      main: string;
    };
    link: {
      main: string;
      light: string;
    };
    chartLine: {
      main: string;
      light: string;
      sizeX: number;
      sizeY: number;
      sizeXL: number;
      sizeYL: number;
    };
    datagrid: {
      main: string;
      light: string;
      odd: string;
      even: string;
    };
    iconColor: {
      main: string;
      light: string;
    };
    successLight: {
      light: string;
    };
    successLightHeader: {
      main: string;
      light: string;
    };
    shadow: {
      dark: string;
    };
    whightGlow: {
      main: string;
    };
    customSuccess: {
      one: string;
    };
    notAvailable: {
      main: string;
    };
    select: {
      main: string;
    };
    placeholder: {
      main: string;
      opacity: number;
    };
    cancelBtn: {
      background: string;
      text: string;
    };
    stepper: {
      line: string;
    };
    fontFamily: {
      main: string;
    };
    boxShadow: {
      main: string;
    };
    clockInBtn: {
      background: string;
      text: string;
      disableText: string;
    };
    clockOutBtn: {
      background: string;
      text: string;
      disableText: string;
    };
    scrapPichartColors: {
      red: string;
      green: string;
      yellow: string;
    };
    fontSizes: {
      fontSize28: string;
      fontSize25: string;
      fontSize20: string;
      fontSize18: string;
      fontSize14: string;
      fontSize15: string;
      fontSize13: string;
    };
    lineHeights: {
      lineHeight25: string;
    };
    heights: {
      height65: string;
    };
    colors:{
      red:string;
      blue:string;
      green:string;
      yellow:string;
      orange:string;
    }
  }

  interface PaletteOptions {
    tile: {
      first: string;
      second: string;
      third: string;
      overView: string;
      fadeText: string;
    };
    header: {
      main: string;
      default: string;
    };
    border: {
      main: string;
      light: string;
      default: string;
    };
    sideBar: {
      main: string;
      light: string;
      background: string;
    };
    filterbg: {
      main: string;
    };
    link: {
      main: string;
      light: string;
    };
    chartLine: {
      main: string;
      light: string;
      sizeX: number;
      sizeY: number;
      sizeXL: number;
      sizeYL: number;
    };
    datagrid: {
      main: string;
      light: string;
      odd: string;
      even: string;
    };
    iconColor: {
      main: string;
      light: string;
    };
    successLight: {
      light: string;
    };
    successLightHeader: {
      main: string;
      light: string;
    };
    shadow: {
      dark: string;
    };
    whightGlow: {
      main: string;
    };
    customSuccess: {
      one: string;
    };
    notAvailable: {
      main: string;
    };
    select: {
      main: string;
    };
    placeholder: {
      main: string;
      opacity: number;
    };
    cancelBtn: {
      background: string;
      text: string;
    };
    stepper: {
      line: string;
    };
    fontFamily: {
      main: string;
    };
    boxShadow: {
      main: string;
    };
    clockInBtn: {
      background: string;
      text: string;
      disableText: string;
    };
    clockOutBtn: {
      background: string;
      text: string;
      disableText: string;
    };
    scrapPichartColors: {
      red: string;
      green: string;
      yellow: string;
    };
    fontSizes: {
      fontSize28: string;
      fontSize25: string;
      fontSize20: string;
      fontSize18: string;
      fontSize14: string;
      fontSize15: string;
      fontSize13: string;
    };
    lineHeights: {
      lineHeight25: string;
    };
    heights: {
      height65: string;
    };
    colors:{
      red:string;
      blue:string;
      green:string;
      yellow:string;
      orange:string;
    }
  }
}

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
      main: "#0000ff", // dark black for primary
      light: "#000",
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
    tile: {
      first: "#D8E6EC",
      second: "#a0cca8",
      third: "#d7d3ed",
      overView: "#93bcd2",
      fadeText: "#666666", // :-using it on overview titles wiget label
    },
    header: {
      main: "#f0f3f5", // main top header
      default: "#ffffff",
    },
    background: {
      default: "#f0f3f5",
      paper: "#ffffff",
    },
    border: {
      main: "#d8e6ec", // using this color to give border of dataTable and other places.
      // light: "#f0f3f5",
      light: "#eaeaea",
      default: "#c7cfd2", //"#e5eef2",
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
    sideBar: {
      main: "#c7cfd2", //"#d8e6ec", //sidebar active background
      light: "#000", //sidebar active color
      background: "#fff", //sidebar background color
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
    filterbg: {
      main: "#ffffff",
    },
    link: {
      main: "#0000ff",
      light: "",
    },
    chartLine: {
      main: "#d7d3ed", //'#7FA1C3', //"#d8e6ec",
      light: "",
      sizeX: 0, // x line width
      sizeY: 1, // y line width
      sizeXL: 1, //width of x line graph
      sizeYL: 1, //width of y line graph
    },
    datagrid: {
      main: "#eff5f7",
      light: "",
      odd: "#ffffff",
      even: "#f7f9fb",
    },
    iconColor: {
      main: "#5491ac",
      light: "",
    },
    shadow: {
      dark: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    },
    successLightHeader: {
      main: "#c7cfd2",
      light: "#e5eef2",
    },
    successLight: {
      light: "#e5eef2",
    },
    whightGlow: {
      main: "rgb(216, 230, 236)",
    },
    customSuccess: {
      one: "rgba(39,161,87,1)",
    },
    notAvailable: {
      main: "#BDBDBD",
    },
    select: {
      main: "#666",
    },
    placeholder: {
      main: "#000",
      opacity: 1,
    },
    cancelBtn: {
      background: "#000",
      text: "#fff",
    },
    stepper: {
      line: "#00000014",
    },
    fontFamily: {
      main: '"Roboto",sans-serif',
    },
    boxShadow: {
      main: "0px 0px 3px #000000",
    },
    clockInBtn: {
      background: "#ffc61a",
      text: "#000",
      disableText: "rgba(0, 0, 0, 0.26)",
    },
    clockOutBtn: {
      background: "#1e88e5",
      text: "#fff",
      disableText: "rgba(0, 0, 0, 0.26)",
    },
    scrapPichartColors: {
      red: "#b55153",
      green: "#659b86",
      yellow: "#ffc61a",
    },
    fontSizes: {
      fontSize28: "28px",
      fontSize25: "25px",
      fontSize20: "20px",
      fontSize18: "18px",
      fontSize14: "14px",
      fontSize15: "15px",
      fontSize13: "13px",
    },
    lineHeights: {
      lineHeight25: "25px"
    },
    heights: {
      height65: "65px"
    },
    colors:{
      red: "#b55153",
      blue:'#156082',
      green:'#659b86',
      yellow:'#ffc61a',
      orange:'#e97132'
    }
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
      main: "#74b9ff",
      light: "#000",
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
    header: {
      main: "#1d2832",
      default: "#1d2832",
    },
    background: {
      default: "#1d2832",
      paper: "#24323e",
    },
    border: {
      main: "#334657", // using this color to give border of dataTable and other places.
      light: "#2f4151",
      default: "#e5eef2",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    tile: {
      first: "#008698",
      second: "#083c5a",
      third: "#3e6b89",
      overView: "#396c87",
      fadeText: "#9e9fa5",
    },
    grey: {
      100: "#334657",
      400: "rgba(13, 18, 32, 0.8)",
      500: "rgba(33, 33, 33, 1)",
      600: "#9E9FA5",
    },
    sideBar: {
      main: "#24323e",
      light: "#ffffff",
      background: "#1d2832",
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
    filterbg: {
      main: "#1d2832",
    },
    link: {
      main: "#0000ff",
      light: "",
    },
    chartLine: {
      main: "rgba(128, 128, 128, 0.5)",
      light: "",
      sizeX: 0,
      sizeY: 1,
      sizeXL: 1,
      sizeYL: 1,
    },
    datagrid: {
      main: "#1d2832",
      light: "",
      odd: "",
      even: "",
    },
    iconColor: {
      main: "rgb(206, 217, 226)",
      light: "",
    },
    shadow: {
      dark: "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
    },
    successLight: {
      light: "#335050",
    },
    successLightHeader: {
      main: "#335050",
      light: "rgb(216, 230, 236)",
    },
    whightGlow: {
      main: "rgb(216, 230, 236)",
    },
    customSuccess: {
      one: "rgba(39,161,87,1)",
    },
    notAvailable: {
      main: "#ffffff",
    },
    select: {
      main: "rgba(206, 217, 226, 0.42)",
    },
    placeholder: {
      main: "#fff",
      opacity: 1,
    },
    cancelBtn: {
      background: "#1e88e5",
      text: "#fff",
    },
    stepper: {
      line: "#9E9FA5",
    },
    fontFamily: {
      main: '"Roboto",sans-serif',
    },
    boxShadow: {
      main: "0px 0px 3px #ced9e2",
    },
    clockInBtn: {
      background: "#ffc61a",
      text: "#000",
      disableText: "rgba(255, 255, 255, 0.6)",
    },
    clockOutBtn: {
      background: "#1e88e5",
      text: "#fff",
      disableText: "rgba(255, 255, 255, 0.6)",
    },
    scrapPichartColors: {
      red: "#b55153",
      green: "#659b86",
      yellow: "#ffc61a",
    },
    fontSizes: {
      fontSize28: "28px",
      fontSize25: "25px",
      fontSize20: "20px",
      fontSize18: "18px",
      fontSize14: "14px",
      fontSize15: "15px",
      fontSize13: "13px",
    },
    lineHeights: {
      lineHeight25: "25px"
    },
    heights: {
      height65: "65px"
    },
    colors:{
      red: "#b55153",
      blue:'#156082',
      green:'#659b86',
      yellow:'#ffc61a',
      orange:'#e97132'
    }
  },
});

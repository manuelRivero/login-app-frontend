import { createTheme } from "@mui/material";
import Merriweather from './../assets/fonts/merriweather/Merriweather-Regular.ttf';
import OpenSans from './../assets/fonts/open-sans/OpenSans.ttf';


const theme = createTheme({
  palette: {
    primary: {
      dark: "#0F7BD3",
      main: "#29A6E5",
      light: "#69C1ED",
      contrastText: "#fff"
    },
    secondary: {
      main: "#E89B26",
      light: "#FFD1AD",
      dark:"#FFA35A",
      contrastText: "#fff"
    },
    background: {
      default: "#e7eff1",
    },
    text: {
      primary: "#2F4858",
    },
  },
  typography: {
    h1: { fontFamily: "Merriweather", fontSize: "3rem" },
    h2: { fontFamily: "Merriweather", fontSize: "2rem" },
    h3: { fontFamily: "Merriweather", fontSize: "1.5rem" },
    h4: { fontFamily: "Merriweather", fontSize: "1.3rem" },
    h5: { fontFamily: "Merriweather", fontSize:"1rem" },
    h6: { fontFamily: "Merriweather" },
    body1: { fontFamily: "OpenSans" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Merriweather';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Merriweather'), local('Merriweather-Regular'), url(${Merriweather}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        };
        @font-face {
            font-family: 'OpenSans';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('OpenSans'), local('OpenSans'), url(${OpenSans}) format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
      `,
    },
  },
});

export { theme };

declare module "@mui/material/styles" {
  interface Theme {
  
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
   
  }
}

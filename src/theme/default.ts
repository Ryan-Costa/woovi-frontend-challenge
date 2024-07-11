import { createTheme } from "@mui/material";

export const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: "#03D69D",
      light: "#E5E5E5",
    },
    secondary: {
      main: "#133A6F",
      light: "rgba(19, 58, 111, 0.8)",
    },
    text: {
      primary: "#4D4D4D",
      secondary: "#AFAFAF",
      disabled: "#03D69D",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F4FBF9",
    },
  },
  typography: {
    fontFamily: ["Nunito", "Arial", "sans-serif"].join(","),
    h1: {
      fontWeight: 800,
      fontSize: "2.4rem",
      lineHeight: "normal",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.8rem",
      lineHeight: "normal",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.6rem",
      lineHeight: "normal",
    },
    h4: {
      fontWeight: 400,
      fontSize: "1.4rem",
      lineHeight: "normal",
    },
    h5: {
      fontWeight: 300,
      fontSize: "1.2rem",
      lineHeight: "normal",
    },
    h6: {
      fontWeight: 300,
      fontSize: "1rem",
      lineHeight: "normal",
    },
  },
});

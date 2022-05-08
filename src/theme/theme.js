import { createTheme } from "@mui/material";
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    // primary and secondary will appear when component use color prop
    primary: {
      main: '#51b4ec',
      secondary: '#ffffff'
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: '#f04461',
    },
    warning:{
      main: '#ff9800',
    },
    info: {
      main: '#f2f2f2'
    },
    success:{
      main: '#4caf50'
    },
    background: {
        default: "#f2f2f2",
        paper: "#f2f2f2",
    },
  },
  typography: {
    fontSize: 30,
    h1: {
      fontSize: 40,
    },
    h2:  {
      fontSize: 30,
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: 15,
        },
      },
    },
  },
});


import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";
import DarkModeToggle from "react-dark-mode-toggle";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import "./App.css";
// components
import NavBar from "./components/NavBar";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
// Link types
import DesignItem from "./components/DesignItem";
import BasicLink from "./components/BasicLink";
import AppBar from "./components/AppBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    app: {
      // height: "100vh",
      display: "flex",
      flexDirection: "column",
      // padding: "1rem",
    },
    topBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    heading2: {
      display: "flex",
      flexDirection: "row",
      alignSelf: "center",
      fontSize: "1.3rem",
      fontWeight: "300",
      paddingBottom: "0",
    },
    subtitle: {
      fontSize: "0.8rem",
      fontWeight: "400",
    },
    bottomNav: {
      Backgroundcolor: "green",
    },
    gridContainer: {
      flexGrow: 1,
      marginTop: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    gridColumn: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem",
    },
    LinkContainer: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2),
      alignItems: "center",
      justifyContent: "space-around",
    },
    SectionIcon: {
      margin: "2rem 0 0 0",
      fontSize: "3rem",
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Paper className={classes.app}>
          <AppBar
            toggleButton={
              <DarkModeToggle
                size={60}
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              ></DarkModeToggle>
            }
          />
          <Header />
          <div className={classes.LinkContainer} >
            <BasicLink />
            <BasicLink />
            <BasicLink />
          </div>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;

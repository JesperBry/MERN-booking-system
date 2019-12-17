import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import Appointment from "./components/Appointment";
import HeaderBar from "./components/HeaderBar";
import theme from "./components/utils/MultiTheme";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <HeaderBar />
          <Appointment />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;

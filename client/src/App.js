import React, { Component } from "react";
//import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";

//import store from "./store";
import Appointment from "./components/Appointment";
import HeaderBar from "./components/HeaderBar";
import theme from "./components/utils/MultiTheme";

import "./App.css";

class App extends Component {
  render() {
    return (
      // Provider: wraps the React application and makes the Redux state available to all container components in the application’s hierarchy
      //<Provider store={store}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <HeaderBar />
          <Appointment />
        </ThemeProvider>
      </div>
      //</Provider>
    );
  }
}

export default App;

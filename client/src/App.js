import React, { Component } from "react";
//import { Provider } from "react-redux";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

//import store from "./store";
import Appointment from "./components/Appointment";
import HeaderBar from "./components/HeaderBar";

import "./App.css";

class App extends Component {
  render() {
    return (
      // Provider: wraps the React application and makes the Redux state available to all container components in the application’s hierarchy
      //<Provider store={store}>
      <div className="App">
        <MuiThemeProvider>
          <HeaderBar />
          <Appointment />
        </MuiThemeProvider>
      </div>
      //</Provider>
    );
  }
}

export default App;

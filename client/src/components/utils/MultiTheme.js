import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#34495e"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;

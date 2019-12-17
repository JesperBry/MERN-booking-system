import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="AppBar">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5" color="inherit">
              BOOKING – SYSTEM
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default HeaderBar;

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

function NavBar() {
  return (
    <AppBar position="static" style={{ backgroundColor: "#ffbcbc" }}>
      <Toolbar className="ml-auto">
        <Button color="secondary">About</Button>
        <Button color="secondary">Charts</Button>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;

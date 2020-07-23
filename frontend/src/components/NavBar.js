import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

function NavBar(props) {
  function handleClick() {
    props.chartRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <AppBar position="static" style={{ background: "linear-gradient(93deg, rgba(217,80,69,1) 24%, rgba(217,147,69,1) 76%)" }}>
      <Toolbar className=" navbar ml-auto">
        <Button onClick={handleClick} style={{ color: "#ffffff" }}>
          Charts
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;

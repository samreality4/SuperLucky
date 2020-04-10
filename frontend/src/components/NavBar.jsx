import React, {useRef} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";


function NavBar(props) {


function handleClick () {
  console.log(props.chartRef)
props.chartRef.current.scrollIntoView({ behavior: 'smooth' });
}

  return (
    <AppBar position="static" style={{ backgroundColor: "#000103" }}>
      <Toolbar className=" navbar ml-auto">
       
          <Button onClick={handleClick} style={{ color: "#ffffff" }}>Charts</Button>
    
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;

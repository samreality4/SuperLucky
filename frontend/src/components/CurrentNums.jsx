import React from "react";
import { Paper } from "@material-ui/core";
import IndividualNum from "./RegularNum";
import MegaNum from "./MegaNum";

function CurrentNums() {
  const array = [1, 3, 4, 5, 6 ];

  return (
<div className="text-center mt-5">
    <h3>12/12/20 Winning Number</h3>
    <Paper className="container-fluid row m-1 p-0 col-8 mx-auto justify-content-center" elevation={5}>
     
      {array.map((num) => (
        <IndividualNum num={num} />
      ))}
    <MegaNum num="9"/>
    </Paper>
    </div>
  );
}

export default CurrentNums;

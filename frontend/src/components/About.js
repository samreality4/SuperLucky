import React from "react";
import { Paper } from "@material-ui/core";

function About() {
  return (
    <Paper className="mx-auto p-2" elevation={5}>
        <div className="row justify-content-center col-6 mx-auto mt-2 mb-2" style={{color: "#ffffff"}}>
      <h1>About Super Lucky</h1>
      <p>
        Super Lucky is a set of tools to find the luckiest number
        for the CA Super Lotto game. Currently there are charts showing the count of number
        by appearance during 2012-2019 time range and a line chart showing the winning amount per draw. Data are base
        from 2012 and on. More tools will be added in the coming
        future.
      </p>
      </div>
    </Paper>
  );
}

export default About;

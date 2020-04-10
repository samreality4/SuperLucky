import React from "react";
import { Paper } from "@material-ui/core";

function About() {
  return (
    <Paper className="container-fluid m-1 mt-5 p-2" elevation={2}>
        <div className="row justify-content-center col-6 mx-auto mt-2 mb-2" style={{color: "#ffffff"}}>
      <h1>About Super Lucky</h1>
      <p>
        Super Lucky is an analysis tool with charts to find the luckiest number
        for the CA super lotto game. Currently it has a chart showing the number
        by "rating" or appearance during 2012-2019 time range. Data are base
        from 2012 and on. Most tools and charts will be added in the coming
        future.
      </p>
      </div>
    </Paper>
  );
}

export default About;

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Paper } from "@material-ui/core";
import axios from "axios";
import RandomColorGen from "../../util/RandomColorGen";

function WinningChart() {
  const [chartState, setChartState] = useState({});

  useEffect(() => {
    function getData() {
      axios
        .get("/getwinningdata")
        .then((response) => {
          updateChartState(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateChartState(response) {
    setChartState({
      labels: response.data.map((item) => item["Date"]),
      datasets: [
        {
          label: "Winning Amount by Date",
          data: response.data.map((item) => item["winnings"]),
          backgroundColor: "rgba(0,0,255,0.3)",
        },
      ],
    });
  }

  return (
    <Paper
      className="mx-auto mb-5 p-5"
      style={{ height: "650px" }}
      elevation={5}
    >
      <Line
        data={chartState}
        width="400px"
        height="400px"
        options={{ maintainAspectRatio: false, responsive: true }}
      />
      <p className="text-center font-italic font-weight-light">
        *Base on 5/20/15 to 12/28/19 data. Please use this data at your
        discretion.
      </p>
    </Paper>
  );
}

export default WinningChart;

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Paper } from "@material-ui/core";
import axios from "axios";

function WinningChart() {
  useEffect(() => {
    function getData() {
      axios
        .get("/getwinningdata")
        .then((response) => {
          console.log(response);
          setChartState({
            labels: response.data.map((item) => item["Date"]),
            datasets: [
              {
                label: "Winning Amount by Date",
                data: response.data.map((item) => item["winnings"]),
                barPercentage: 0.3,
                backgroundColor: "rgba(0,0,255,0.3)",
              },
            ],
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [chartState, setChartState] = useState({});

  return (
  
      <Paper className="m-1 mb-5 p-3" elevation={5}>
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

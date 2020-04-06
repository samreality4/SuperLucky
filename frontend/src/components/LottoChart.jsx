import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Paper} from "@material-ui/core";


function LottoChart() {
  const [chartState, setChartState] = useState({
    labels: ["1", "2", ,"Yellow", "Green", "Purple", "Orange","Yellow", "Green", "Purple", "Orange","Yellow", "Green", "Purple", "Orange","Yellow", "Green", "Purple", "Orange","Yellow", "Green", "Purple", "Orange","Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Super Lotto Winning # by Count",
        data: [12, 19, 3, 5, 2, 3],
        barPercentage: 0.3,
        backgroundColor: "rgba(255, 0, 0, 0.2)"
      }
    ]
  });

  console.log(chartState);

  return (
    <Paper className="m-2" elevation={3}>
      <Bar
        data={chartState}
        width="400px"
        height="400px"
        options={{ maintainAspectRatio: false }}
      />
    </Paper>
  );
}

export default LottoChart;

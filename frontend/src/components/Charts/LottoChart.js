import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

function LottoChart(props) {
  const [chartState, setChartState] = useState({});

  useEffect(() => {
    function getData(link, title, backgroundColor) {
      axios
        .get(link)
        .then((response) => {
          updateChartState(response, title, backgroundColor);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getData(props.link, props.title, props.backgroundColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateChartState(response, title, backgroundColor) {
    setChartState({
      labels: response.data.map((item) => item["Numbers"]),
      datasets: [
        {
          label: title,
          data: response.data.map((item) => item["count"]),
          barPercentage: 0.3,
          backgroundColor: backgroundColor,
        },
      ],
    });
  }

  return (
    <div>
      <div className="p-5" style={{ height: "650px" }}>
        <Bar
          data={chartState}
          width="400px"
          height="400px"
          options={{ maintainAspectRatio: false, responsive: true }}
        />
        <p className="text-center font-italic font-weight-light">
          *Base on 1/4/12 to 12/28/19 data. Please use this data at your
          discretion.
        </p>
      </div>
    </div>
  );
}

export default LottoChart;

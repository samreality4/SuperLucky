import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import RandomColorGen from "../util/RandomColorGen";

function PieChart(props) {
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
          backgroundColor: RandomColorGen(response.data.map((item) => item["count"]).length),
        },
      ],
    });
  }

  return <Pie data={chartState} />;
}

export default PieChart;

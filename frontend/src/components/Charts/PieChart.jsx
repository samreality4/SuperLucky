import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

function PieChart (){
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

    return <Pie></Pie>
}

export default PieChart;
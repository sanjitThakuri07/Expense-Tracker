import React from "react";
import chart from "../chart/chart";

import Chart from "../chart/chart";

const expenseChart = (props) => {
  console.log(props);
  const chartDatapoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];

  for (const exp of props.expenses) {
    const expenseMonth = exp.date.getMonth();

    chartDatapoints[expenseMonth].value += exp.amount;
  }
  return <Chart dataPoints={chartDatapoints}></Chart>;
};

export default expenseChart;

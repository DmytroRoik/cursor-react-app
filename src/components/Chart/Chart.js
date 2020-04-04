import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const Chart = ({
  type,
  chartData,
  chartOptions,
  height,
}) => {
  let chart;
  switch (type) {
    case 'Line':
      chart = (
        <Line
          height={height}
          data={chartData}
          options={chartOptions}
        />
      );
      break;
    case 'Pie':
      chart = (
        <Pie
          height={height}
          data={chartData}
          options={chartOptions}
        />
      );
      break;
    case 'Bar':
      chart = (
        <Bar
          height={height}
          data={chartData}
          options={chartOptions}
        />
      );
      break;
    default:
      throw new Error('You must add a type of chart');
  }
  return chart;
};

export default Chart;

import React from 'react';
import Chart from '../../components/Chart';

const Home = () => {
  const summaryData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], //  X-axis
    datasets: [
      {
        label: 'Charges', // chart-name
        data: [12, 17, 34, 16, 45, 38, 20], // chart-data
        backgroundColor: 'rgba(255,255,255,0)', //  background - fro chart data
        borderColor: 'rgba(173,173,173,0.51)', //  border settings
        borderDash: [5, 5],
        borderWidth: 2,
      },
      {
        label: 'Incomes',
        data: [23, 24, 35, 60, 30, 40, 35, 75],
        backgroundColor: 'rgb(225, 235, 253)',
        borderColor: 'rgba(122,169,243,1)',
        borderWidth: 3,
      },
    ],
  };
  const incomeData = {
    labels: ['My mom', 'Sale book', 'Donations', 'Work'], //  Xaxis
    datasets: [
      {
        label: 'Income categories',
        data: [490, 480, 420, 390],
        backgroundColor: 'rgba(148, 195, 239, 1)',
        barPercentage: 0.5, //  bar width settings
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [{
        gridLines: {
          display: false, //  disable grid displaying
        },
        ticks: {
          beginAtZero: true, // enable chart starting at 0 point in Y-axis
        },
      }],
      xAxes: [{
        gridLines: {
          display: false,
        },
      }],
    },
    maintainAspectRatio: false, // enable chart size editing
  };
  return (
    <React.Fragment>
      <div className="chart-line">
        <Chart type="Line" chartName="Summary" chartData={summaryData} chartOptions={options} height={350} />
      </div>
      <div className="chart-bar">
        <Chart type="Bar" chartName="Asass" chartData={incomeData} chartOptions={options} height={300} />
      </div>
    </React.Fragment>
  );
};

export default Home;

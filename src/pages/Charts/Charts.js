import React from 'react';
import moment from 'moment';

import Chart from '../../components/Chart';
import ChartsData from './ChartsData';
import User from './User';
import './Charts.scss';

const createDate = (user) => {
  const Week = true;
  const dataChart = {
    dataLine: {
      labels: [],
      datasets: [
        {
          label: 'Charges',
          data: [],
          backgroundColor: 'rgb(122,169,243,0.2)',
          borderColor: 'rgba(122,169,243,1)',
          borderWidth: 3,
        },
      ],
    },
    dataCharges: {
      labels: [],
      datasets: [
        {
          backgroundColor: ['#008cd9', '#ff422f', '#ff9600', '#cfdd01'],
          data: [],
        },
      ],
    },
  };

  // dataLine
  const dateArr = [];

  user.charges.forEach((item) => {
    dateArr.push(item.date);
    dateArr.sort((a, b) => a - b);
  });

  for (let i = 0; i <= dateArr.length; i += 1) {
    user.charges.forEach((item) => {
      if (item.date === dateArr[i]) {
        if (dataChart.dataLine.labels[dataChart.dataLine.labels.length - 1] !== dateArr[i]) {
          dataChart.dataLine.datasets[0].data.push(item.price);
          dataChart.dataLine.labels.push(item.date);
        } else {
          const idx = dataChart.dataLine.datasets[0].data.length - 1;
          const prevItem = dataChart.dataLine.datasets[0].data[idx];
          dataChart.dataLine.datasets[0].data[idx] = prevItem + item.price;
          i += 1;
        }
      }
    });
  }

  dataChart.dataLine.labels = dataChart.dataLine.labels.map(item => moment.unix(item).utc().format('ddd'));

  if (Week) {
    dataChart.dataLine.labels = dataChart.dataLine.labels.slice(-7);
    dataChart.dataLine.datasets[0].data = dataChart.dataLine.datasets[0].data.slice(-7);
  }

  // dataCharges
  user.charges.forEach((item) => {
    if (!dataChart.dataCharges.labels.includes(item.category)) {
      dataChart.dataCharges.labels.push(item.category);
      dataChart.dataCharges.datasets[0].data.push(0);
    }
  });

  for (let i = 0; i <= dataChart.dataCharges.labels.length; i += 1) {
    user.charges.forEach((item) => {
      if (dataChart.dataCharges.labels[i] === item.category) {
        dataChart.dataCharges.datasets[0].data[i] += item.price;
      }
    });
  }

  console.log(dataChart)

  return dataChart;
};

const Charts = () => {
  createDate(User);
  return (
    <React.Fragment>
      <div className="charts__header">
        <h3 className="charts__title">Summary</h3>
        <div className="charts__btn-wrap">
          <button className="charts__btn ">Month</button>
          <button className="charts__btn active">Week</button>
        </div>
      </div>
      <div className="chart-line">
        <Chart
          type="Line"
          chartName="Summary"
          chartData={createDate(User).dataLine}
          chartOptions={ChartsData.optionsLine}
          height={250}
        />
      </div>
      <div className="charts__row">
        <div className="charts__chart charts__chart-bar">
          <div className="charts__chart-title">Income categories</div>
          <Chart
            type="Bar"
            chartName="Asass"
            height={300}
            chartData={ChartsData.incomeData}
            chartOptions={ChartsData.optionsBar}
          />
        </div>
        <div className="charts__chart charts__chart-pie">
          <div className="charts__chart-title">Charges categories</div>
          <Chart
            type="Doughnut"
            chartName="Circle"
            chartData={createDate(User).dataCharges}
            chartOptions={ChartsData.optionsPie}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Charts;

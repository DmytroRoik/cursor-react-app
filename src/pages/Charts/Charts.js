import React from 'react';

import Chart from '../../components/Chart';
import ChartsData from './ChartsData';
import './Charts.scss';

const Charts = () => (
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
        chartData={ChartsData.summaryData}
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
          chartData={ChartsData.chargesData}
          chartOptions={ChartsData.optionsPie}
        />
      </div>
    </div>
  </React.Fragment>
);

export default Charts;

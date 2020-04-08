import React, { useState } from 'react';
import Chart from '../../components/Chart';
import ChartsOptions from './ChartsOptions';
import User from './User';
import './Charts.scss';
import changeData from './ChangeData';


const Charts = () => {
  const [week, setWeek] = useState(true);
  const toggleWeek = () => setWeek(!week);
  return (
    <React.Fragment>
      <div className="charts__header">
        <h3 className="charts__title">Summary</h3>
        <div className="charts__btn-wrap">
          <button
            className={`charts__btn ${!week ? 'active' : ''}`}
            onClick={toggleWeek}
          >Month
          </button>
          <button
            className={`charts__btn ${week ? 'active' : ''}`}
            onClick={toggleWeek}
          >Week
          </button>
        </div>
      </div>
      <div className="chart-line">
        <Chart
          type="Line"
          chartName="Summary"
          chartData={changeData(User, week).dataLine}
          chartOptions={ChartsOptions.optionsLine}
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
            chartData={changeData(User, week).dataIncome}
            chartOptions={ChartsOptions.optionsBar}
          />
        </div>
        <div className="charts__chart charts__chart-pie">
          <div className="charts__chart-title">Charges categories</div>
          <Chart
            type="Doughnut"
            chartName="Circle"
            chartData={changeData(User, week).dataCharges}
            chartOptions={ChartsOptions.optionsPie}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Charts;

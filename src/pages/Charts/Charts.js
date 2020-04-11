import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectChartsData,
  selectChartsOptions,
} from '../../redux/selectors/charts.selectors';

import Chart from '../../components/Chart';
import changeData from './ChangeData';

import './Charts.scss';

const Charts = () => {
  const chartsData = useSelector(selectChartsData);
  const chartsOptions = useSelector(selectChartsOptions);
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
          chartData={changeData(chartsData, week).dataLine}
          chartOptions={chartsOptions.optionsLine}
          height={250}
        />
      </div>
      <div className="charts__row">
        <div className="charts__chart charts__chart-bar">
          <div className="charts__chart-title">Income categories</div>
          <Chart
            type="Bar"
            chartName="Bar"
            height={300}
            chartData={changeData(chartsData, week).dataIncome}
            chartOptions={chartsOptions.optionsBar}
          />
        </div>
        <div className="charts__chart charts__chart-pie">
          <div className="charts__chart-title">Charges categories</div>
          <Chart
            type="Doughnut"
            chartName="Circle"
            chartData={changeData(chartsData, week).dataCharges}
            chartOptions={chartsOptions.optionsPie}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Charts;

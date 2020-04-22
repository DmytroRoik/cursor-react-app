import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  selectChartsData,
  selectChartsOptions,
} from '../../redux/selectors/charts.selectors';

import Chart from '../../components/Chart';
import changeData from './ChangeData';
import getStats from '../../redux/actions/charts.actions';
import './Charts.scss';


const Charts = () => {
  const dispatch = useDispatch();
  const chartsData = useSelector(selectChartsData);
  const chartsOptions = useSelector(selectChartsOptions);
  const [week, setWeek] = useState(true);

  const dateWeekAgo = moment().startOf('day').subtract(1, 'w').valueOf();
  const dateMonthAgo = moment().startOf('day')
    .subtract(1, 'months').valueOf();

  useEffect(() => {
    if (week) {
      dispatch(getStats(Number(dateWeekAgo)));
    } else {
      dispatch(getStats(Number(dateMonthAgo)));
    }
  }, [dateWeekAgo, dateMonthAgo, dispatch, week]);

  const getMonth = () => {
    setWeek(false);
    dispatch(getStats(Number(dateMonthAgo)));
  };

  const getWeek = () => {
    setWeek(true);
    dispatch(getStats(Number(dateWeekAgo)));
  };

  return (
    <React.Fragment>
      <div className="charts__header">
        <h3 className="charts__title">Summary</h3>
        <div className="charts__btn-wrap">
          <button
            className={`charts__btn ${!week ? 'active' : ''}`}
            onClick={getMonth}
          >Month
          </button>
          <button
            className={`charts__btn ${week ? 'active' : ''}`}
            onClick={getWeek}
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

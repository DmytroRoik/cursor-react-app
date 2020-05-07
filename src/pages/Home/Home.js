import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getTotalBalanceThunk } from '../../redux/actions/root.actions';
import { selectBalance } from '../../redux/selectors/rootSelectors';
import BtnAddMore from '../../components/BtnAddMore';
import Balance from '../../components/Balance';
import TableCategoriesCharges from '../../components/TableCategoriesCharges';
import TableCategoriesIncomes from '../../components/TableCategoriesIncomes';
import { getChargesFromThunk } from '../../redux/actions/home.actions';
import './Home.scss';


const Home = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('charge');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const balance = useSelector(selectBalance);
  const [startDate, setStartDate] = useState('week');

  const handleWeek = (event) => {
    const { value: startDateValue } = event.target;
    setStartDate(startDateValue);
  };

  const dateWeekAgo = moment().startOf('day').subtract(1, 'w').valueOf();
  const dateMonthAgo = moment().startOf('day').subtract(1, 'months').valueOf();

  useEffect(() => {
    if (startDate === 'week') {
      dispatch(getChargesFromThunk(dateWeekAgo, value));
    } else {
      dispatch(getChargesFromThunk(dateMonthAgo, value));
    }
  }, [startDate, value]);

  useEffect(() => {
    dispatch(getTotalBalanceThunk());
  }, [balance]);

  return (
    <div className="home">
      <Balance total={balance} />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: '#3b92f5',
          },
        }}
      >
        <Tab value="charge" label="Charge" className="home__tabs-title" />
        <Tab value="income" label="Income" className="home__tabs-title" />
      </Tabs>

      <div
        className="home__select-row"
        value="charge"
        hidden={value !== 'charge'}
      >
        <div className="home__select__wrapp">
          <div className="home__select">
            <h3>My Charges</h3>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={startDate}
              onChange={handleWeek}
            >
              <MenuItem value="week" >this week</MenuItem>
              <MenuItem value="month" >this month</MenuItem>
            </Select>
          </div>

          <Link to="/new-charge" href="/new-charge">
            <BtnAddMore />
          </Link>
        </div>
        <TableCategoriesCharges />
      </div>

      <div
        className="home__select-row"
        value="income"
        hidden={value !== 'income'}
      >
        <div className="home__select__wrapp">
          <div className="home__select">
            <h3>My Income</h3>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={startDate}
              onChange={handleWeek}
            >
              <MenuItem value="week" >this week</MenuItem>
              <MenuItem value="month" >this month</MenuItem>
            </Select>
          </div>
          <Link to="/new-charge" href="/new-charge">
            <BtnAddMore />
          </Link>
        </div>
        <TableCategoriesIncomes />
      </div>
    </div>
  );
};

export default Home;

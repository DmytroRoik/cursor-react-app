import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { selectBalance } from '../../redux/selectors/rootSelectors';
import BtnAddMore from '../../components/BtnAddMore';
import Balance from '../../components/Balance';
import TableCategoriesCharges from '../../components/TableCategoriesCharges';
import TableCategoriesIncomes from '../../components/TableCategoriesIncomes';
import { getChargesFromThunk } from '../../redux/actions/home.actions';
import './Home.scss';


const Home = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('charges');
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const balance = useSelector(selectBalance);

  const [week, setWeek] = useState('week');

  const handleWeek = (event) => {
    setWeek(event.target.value);
  };

  // my code
  const dateWeekAgo = moment().startOf('day').subtract(1, 'w').valueOf();
  console.log(dateWeekAgo);
  const dateMonthAgo = moment().startOf('day').subtract(1, 'months').valueOf();
  // console.log(dateMonthAgo);

  useEffect(() => {
    if (week) {
      dispatch(getChargesFromThunk(dateWeekAgo, value));
    } else {
      dispatch(getChargesFromThunk(dateMonthAgo, value));
    }
  }, [dateWeekAgo, dateMonthAgo, dispatch, week]);

  const getMonth = () => {
    setWeek(false);
    dispatch(getChargesFromThunk(dateMonthAgo, value));
  };

  const getWeek = () => {
    setWeek(true);
    dispatch(getChargesFromThunk(dateWeekAgo, value));
  };


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
        <Tab value="charges" label="Charges" className="home__tabs-title" />
        <Tab value="income" label="Income" className="home__tabs-title" />
      </Tabs>

      <div
        className="home__select-row"
        value="charges"
        hidden={value !== 'charges'}
      >
        <div className="home__select__wrapp">
          <div className="home__select">
            <h3>My Charges</h3>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={week}
              onChange={handleWeek}
            >
              <option value="week" onClick={getWeek}>this week</option>
              <option value="month"onClick={getMonth}>this month</option>
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
              value={week}
              onChange={handleWeek}
            >
              <option value="week" onClick={getWeek}>this week</option>
              <option value="month" onClick={getMonth}>this month</option>
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

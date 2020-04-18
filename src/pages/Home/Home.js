import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Select from '@material-ui/core/Select';

import { selectBalance } from '../../redux/selectors/rootSelectors';
import BtnAddMore from '../../components/BtnAddMore';
import Balance from '../../components/Balance';
import TableCategoriesCharges from '../../components/TableCategoriesCharges';
import TableCategoriesIncomes from '../../components/TableCategoriesIncomes';

import './Home.scss';

const Home = () => {
  const [value, setValue] = useState('charges');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const balance = useSelector(selectBalance);

  const [week, setWeek] = React.useState('week');

  const handleWeek = (event) => {
    setWeek(event.target.value);
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
              <div value="week">this week</div>
              <div value="month">this month</div>
            </Select>
          </div>

          <BtnAddMore />
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
              <div value="week">this week</div>
              <div value="month">this month</div>
            </Select>
          </div>

          <BtnAddMore />
        </div>
        <TableCategoriesIncomes />
      </div>
    </div>
  );
};

export default Home;

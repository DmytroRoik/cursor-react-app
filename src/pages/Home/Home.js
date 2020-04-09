import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Select from '@material-ui/core/Select';
import BtnAddMore from '../../components/BtnAddMore';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../redux/selectors/rootSelectors';
import Balance from '../../components/Balance';

import './Home.scss';

const Home = () => {
  const [value, setValue] = useState('charges');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [week, setWeek] = React.useState('week');

  const handleWeek = (event) => {
    setWeek(event.target.value);
  };

  return (
    <div className="home">
      <Balance total={265279.07} />

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
        value={value}
        hidden={value !== 'income'}
      >
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
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Balance from '../../components/Balance';
import './Home.scss';

import '../../variables.scss';
import SelectTimeOptions from '../../components/SelectorTimeOptions/SelectorTimeOptions'

const Home = () => {
  const [value, setValue] = useState('charges');
  const handleChange = (event, newValue) => {
    setValue(newValue);
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


      <div value={value} hidden={value !== 'charges'}> 
        Item One  
          <div> My {value} < SelectTimeOptions/></div>
      </div>
      
      <div value={value} hidden={value !== 'income'}> 
        Item Two
        <div> My {value} <SelectTimeOptions/> </div>
      </div>
    
    </div>
  );
};

export default Home;

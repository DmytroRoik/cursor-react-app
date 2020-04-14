import React from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../redux/selectors/rootSelectors';

import Balance from '../../components/Balance';
import NewChargeForms from './NewChargeForms';
import Switch from './switch';

import './NewCharge.scss';

export default () => {
  const balance = useSelector(selectBalance);

  return (
    <div className="newCharges__wrapper">
      <div className="newCharges__container">
        <div className="switches__checkbox">
          <form className="form__checkbox">
            <Switch />
          </form>
        </div>
        <NewChargeForms />
        <div className="balance"><Balance total={balance} /></div>
      </div>
    </div>
  );
};

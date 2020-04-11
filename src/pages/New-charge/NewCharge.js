import React from 'react';

import Balance from '../../components/Balance';
import NewChargeForms from './NewChargeForms';
import Switch from './switch';

import './NewCharge.scss';

export default () => (
  <div className="newCharges__wrapper">
    <div className="newCharges__container">
      <div className="switches__checkbox">
        <form className="form__checkbox">
          <Switch />
        </form>
      </div>
      <NewChargeForms />
      <div className="balance"><Balance /></div>
    </div>
  </div>
);

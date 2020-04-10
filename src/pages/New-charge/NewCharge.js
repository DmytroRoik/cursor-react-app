import React from 'react';
import NewChargeForms from './NewChargeForms';
import Balance from '../../components/Balance';
import './NewCharge.scss';
import Switch from './switch';

export default () => (
  <div className="newCharges__wrapper">
    <div className="newCharges__container">
      <div className="switches__checkbox">
        <form className="form__checkbox">
          <Switch />
        </form>
      </div>
      <NewChargeForms />
      <div className="balance"><Balance total={272727.02} /></div>
    </div>
  </div>
);

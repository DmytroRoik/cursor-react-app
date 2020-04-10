import React from 'react';
import NewChargesForms from './NewChargesForms';
import Balance from '../../components/Balance';
import './NewCharges.scss';
import Switch from './switch';

export default () => (
  <div className="newCharges__wrapper">
    <div className="newCharges__container">
      <div className="switches__checkbox">
        <form className="form__checkbox">
          <Switch />
        </form>
      </div>
      <NewChargesForms />
      <div className="balance"><Balance total={272727.02} /></div>
    </div>
  </div>
);

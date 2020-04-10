import React, { useState } from 'react';
import './NewCharge.scss';


export default () => {
  const [checked, setChecked] = useState(true);

  const toggleChecked = () => {
    setChecked(!checked);
  };
  const colorIncome = '#8FBBE9';
  const colorCharge = '#D3D3D3';

  return (
    <>
      <h4 className="newCharges__heading">
        {checked ? 'New Income' : 'New Charge'}
      </h4>
      <div className="switch__container">
        <span className="switch__text">Charges</span>
        <input
          checked={checked}
          onChange={toggleChecked}
          className="switch-checkbox"
          id="switch"
          type="checkbox"
        />
        <label
          style={{ background: checked ? colorIncome : colorCharge }}
          className="switch-label"
          htmlFor="switch"
        >
          <span className="switch-button" />
        </label>
        <span className="switch__text">Income</span>
      </div>
    </>
  );
};

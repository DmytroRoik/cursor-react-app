import React, { useState } from 'react';
import './NewCharges.scss';


export default () => {
  const [checked, setChecked] = useState(true);

  const toggleChecked = () => {
    setChecked(!checked);
  };
  const colorChecked = '#8FBBE9';
  const colorNoChecked = '#D3D3D3';

  return (
    <>
      <span className="switch__text">Charges</span>
      <input
        checked={checked}
        onChange={toggleChecked}
        className="switch-checkbox"
        id="switch"
        type="checkbox"
      />
      <label
        style={{ background: checked ? colorChecked : colorNoChecked }}
        className="switch-label"
        htmlFor="switch"
      >
        <span className="switch-button" />
      </label>
      <span className="switch__text">Income</span>
    </>
  );
};

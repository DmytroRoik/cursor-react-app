import React from 'react';
import './NewCharge.scss';

export default () => (
  <form className="form">
    <p className="form__text">Total</p>
    <label>
      <input type="text" name="name" className="form__input" />
    </label>
    <p className="form__text description">Description</p>
    <label>
      <input type="text" name="description" className="form__input" />
    </label>
  </form>
);

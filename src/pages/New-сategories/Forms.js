import React from 'react';
import './NewCategories.scss';
import SimpleSelect from './select';

export default () => (
  <form className="form">
    <p className="form__text">Name</p>
    <label>
      <input type="text" name="name" className="form__input" />
    </label>
    <p className="form__text description">Description</p>
    <label>
      <input type="text" name="description" className="form__input" />
    </label>
    <SimpleSelect />
    <button className="form__button" type="submit">Add new category</button>
  </form>
);


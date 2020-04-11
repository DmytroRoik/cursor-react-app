import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';

import { selectCategories } from '../../redux/selectors/categories.selectors';
import AddBtn from './AddBtn';

import './NewCharge.scss';

export default () => {
  const categories = useSelector(selectCategories);
  const options = categories.map(category => (
    <option key={category.name} value={category.name}>
      {category.name}
    </option>
  ));

  return (
    <form className="form">
      <div className="form__item">
        <p className="form__text">Total</p>
        <label>
          <input type="text" name="name" className="form__input" placeholder="total..." />
        </label>
      </div>
      <div className="form__item">
        <p className="form__text description">Description</p>
        <label>
          <input type="text" name="description" className="form__input" placeholder="description..." />
        </label>
      </div>
      <div className="form__item">
        <InputLabel htmlFor="age-native-helper">Select category</InputLabel>
        <NativeSelect className="form__input">
          <option aria-label="None" value="" />
          {options}
        </NativeSelect>
      </div>
      <div className="form__item">
        <TextField
          id="date"
          label="Date"
          type="date"
          className="form__input"
          defaultValue="2020-04-11"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <Link to="/">
        <AddBtn />
      </Link>
    </form>
  );
};

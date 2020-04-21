import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';

import { selectCategories } from '../../redux/selectors/categories.selectors';
import { loadCategories } from '../../redux/actions/categories.actions';
import AddBtn from './AddBtn';
import {
  postTotalDescriptionChargeThunk,
  postTotalDescriptionIncomeThunk,
  setTotal,
  setDescription,
  setDate,
} from '../../redux/actions/charge.actions';

import './NewCharge.scss';

export default () => {
  const categories = useSelector(selectCategories);
  const options = categories.map(category => (
    <option key={category.name} value={category.name}>
      {category.name}
    </option>
  ));

  const dispatch = useDispatch();
  const history = useHistory();
  const totalValue = useSelector(state => state.chargeReducer.totalValue);
  const descriptionValue =
    useSelector(state => state.chargeReducer.descriptionValue);
  const dateValue = useSelector(state => state.chargeReducer.dateValue);
  const switchValue = useSelector(state => state.rootReducer.switchName);

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const changeInputTotal = (e) => {
    dispatch(setTotal(e.target.value));
  };

  const changeInputDescription = (e) => {
    dispatch(setDescription(e.target.value));
  };

  const changeDataPickerValue = (e) => {
    dispatch(setDate(new Date(e.target.value).valueOf()));
  };

  const onButtonClick = () => {
    if (switchValue === 'charge') {
      dispatch(postTotalDescriptionChargeThunk(
        totalValue,
        descriptionValue, dateValue, history,
      ));
    } else if (switchValue === 'income') {
      dispatch(postTotalDescriptionIncomeThunk(
        totalValue,
        descriptionValue, dateValue, history,
      ));
    }
  };


  return (
    <form className="form">
      <div className="form__item">
        <p className="form__text">Total</p>
        <label>
          <input
            type="text"
            name="name"
            className="form__input"
            placeholder="total..."
            onChange={changeInputTotal}
          />
        </label>
      </div>
      <div className="form__item">
        <p className="form__text description">Description</p>
        <label>
          <input
            type="text"
            name="description"
            className="form__input"
            placeholder="description..."
            onChange={changeInputDescription}
          />
        </label>
      </div>

      <div className="form__item">
        <InputLabel htmlFor="age-native-helper">Select category</InputLabel>
        <NativeSelect className="form__input">
          <option aria-label="None" value="Select category" disabled="true" />
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
          onChange={changeDataPickerValue}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <AddBtn onClick={onButtonClick} />
    </form>
  );
};

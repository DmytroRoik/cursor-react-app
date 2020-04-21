import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';

import { selectCategories } from '../../redux/selectors/categories.selectors';
import AddBtn from './AddBtn';
import {
  postTotalDescriptionChargeThunk,
  postTotalDescriptionIncomeThunk,
  setTotal,
  setDescription,
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
  const totalValue = useSelector(state => state.chargeReducer.totalValue);
  const descriptionValue = useSelector(state => state.chargeReducer.descriptionValue);
  const switchValue = useSelector(state => state.rootReducer.switchName);

  const changeInputTotal = (e) => {
    dispatch(setTotal(e.target.value));
  };

  const changeInputDescription = (e) => {
    dispatch(setDescription(e.target.value));
  };

  const onButtonClick = () => {
    console.log('clicked');
    console.log(totalValue, descriptionValue);
    if (switchValue === 'charge') {
      dispatch(postTotalDescriptionChargeThunk(totalValue, descriptionValue));
    } else if (switchValue === 'income') {
      dispatch(postTotalDescriptionIncomeThunk(totalValue, descriptionValue));
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
      {/* <Link to="/" href="/"> */}
      <AddBtn onClick={onButtonClick} />
      {/* </Link> */}
    </form>
  );
};

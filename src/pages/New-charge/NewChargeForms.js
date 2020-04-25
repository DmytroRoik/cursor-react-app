import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';

import { selectCategories } from '../../redux/selectors/categories.selectors';
import AddBtn from './AddBtn';
import {
  postTotalDescriptionChargeThunk,
  postTotalDescriptionIncomeThunk,
} from '../../redux/actions/home.actions';
import { loadCategories } from '../../redux/actions/categories.actions';

import './NewCharge.scss';

export default () => {
  const dispatch = useDispatch();
  const formData = useRef({
    total: '',
    description: '',
    date: new Date().valueOf(),
    category: 0,
  });

  const history = useHistory();
  const switchValue = useSelector(state => state.rootReducer.switchName);
  const [totalClass, setTotalClass] = useState('');
  const [descriptionClass, setDescriptionClass] = useState('');

  const checkTotalErr = () => {
    const reg = /^[0-9]{1,}$/;
    return !reg.test(formData.current.total);
  };

  const checkDescriptionErr = () => {
    const reg = /^[\D]{3,}/;
    return !reg.test(formData.current.description);
  };

  const checkValidation = () => {
    const { total, description } = formData.current;
    if (checkTotalErr() && total.length > 0) {
      setTotalClass('form__error');
    } else {
      setTotalClass('');
    }
    if (checkDescriptionErr() && description.length > 0) {
      setDescriptionClass('form__error');
    } else {
      setDescriptionClass('');
    }
  };

  const changeValue = (value, name) => {
    formData.current[name] = value;
    checkValidation();
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const categories = useSelector(selectCategories);
  const options = categories.map(category => (
    <option key={category.name} value={category.id}>
      {category.name}
    </option>
  ));

  const onButtonClick = () => {
    const {
      total, description, date, category,
    } = formData.current;
    if (!checkTotalErr() && !checkDescriptionErr() && category) {
      if (switchValue === 'charge') {
        dispatch(postTotalDescriptionChargeThunk(
          total,
          description, Date.parse(date), history, category,
        ));
      } else if (switchValue === 'income') {
        dispatch(postTotalDescriptionIncomeThunk(
          total,
          description, Date.parse(date), history, category,
        ));
      }
    } else {
      console.log('Вы ввели неправильные данные');
    }
  };
  return (
    <form className="form">
      <div className="form__item">
        <p className="form__text">Total</p>
        <label htmlFor="input1">
          <input
            id="input1"
            type="text"
            name="total"
            className={`form__inputTotal ${totalClass}`}
            placeholder="total..."
            onInput={e => changeValue(e.target.value, 'total')}
          />
        </label>
      </div>
      <div className="form__item">
        <p className="form__text description">Description</p>
        <label htmlFor="input2">
          <input
            id="input2"
            type="text"
            name="description"
            className={`form__inputDescription ${descriptionClass}`}
            placeholder="description..."
            onInput={e => changeValue(e.target.value, 'description')}
          />
        </label>
      </div>

      <div className="form__item">
        <InputLabel htmlFor="age-native-helper">Select category</InputLabel>
        <NativeSelect
          className="form__select"
          onChange={e => changeValue(
          e.target.value,
          'category',
          )}
        >
          <option aria-label="None" selected disabled>Select category </option>
          {options}
        </NativeSelect>
      </div>
      <div className="form__item">
        <TextField
          id="date"
          label="Date"
          type="date"
          className="form__select"
          defaultValue="2020-04-11"
          onChange={e => changeValue(e.target.value.valueOf(), 'date')}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <AddBtn onClick={onButtonClick} />
    </form>
  );
};

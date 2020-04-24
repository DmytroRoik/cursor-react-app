import React, { useEffect, useState } from 'react';
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
  const history = useHistory();
  const switchValue = useSelector(state => state.rootReducer.switchName);
  const [total, setTotal] = useState('');
  const [totalErr, setTotalErr] = useState(false);
  const [totalClass, setTotalClass] = useState();

  const [description, setDescription] = useState('');
  const [descriptionErr, setDescriptionErr] = useState(false);
  const [descriptionClass, setDescriptionClass] = useState();

  const [date, setDate] = useState('');

  // const [categorySelect, setCategory] = useState(34);

  const changeTotal = (e) => {
    setTotal(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const checkTotalErr = () => {
    const reg = /^\d+$/;
    if (reg.test(total) === false) {
      setTotalErr(true);
    } else if (reg.test(total) === true) {
      setTotalErr(false);
    }
  };

  const checkDescriptionErr = () => {
    const reg = /^[\D]{3,}/;
    if (reg.test(description) === false) {
      setDescriptionErr(true);
    } else if (reg.test(description) === true) {
      setDescriptionErr(false);
    }
  };

  useEffect(() => {
    checkTotalErr();
    if (totalErr === true && total.length > 0) {
      setTotalClass('form__inputTotal form__error');
    } else if (totalErr === false) {
      setTotalClass('form__inputTotal');
    }
    checkDescriptionErr();
    if (descriptionErr === true && description.length > 0) {
      setDescriptionClass('form__inputDescription form__error');
    } else if (descriptionErr === false) {
      setDescriptionClass('form__inputDescription');
    }
  });
  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const changeDataPickerValue = (e) => {
    setDate(new Date(e.target.value).valueOf());
  };

  const categories = useSelector(selectCategories);
  const options = categories.map(category => (
    <option key={category.name} value={category.name}>
      {category.name}
    </option>
  ));

  const changeCategory = (e) => {
    //setCategory(e.target.value);
  };


  const onButtonClick = () => {
    if (totalErr === false && descriptionErr === false) {
      if (switchValue === 'charge') {
        dispatch(postTotalDescriptionChargeThunk(
          total,
          description, date, history,
        ));
      } else if (switchValue === 'income') {
        dispatch(postTotalDescriptionIncomeThunk(
          total,
          description, date, history,
        ));
      }
      alert('ALL IS GOOOD');
      console.log(total, description, date);
    } else {
      alert('Вы ввели неправильные данные');
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
            // className="form__input"
            className={totalClass}
            placeholder="total..."
            onChange={changeTotal}

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
            // className="form__input"
            className={descriptionClass}
            placeholder="description..."
            onChange={changeDescription}
          />
        </label>
      </div>

      <div className="form__item">
        <InputLabel htmlFor="age-native-helper">Select category</InputLabel>
        <NativeSelect className="form__select" onChange={changeCategory}>
          <option aria-label="None" value="Select category" disabled />
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

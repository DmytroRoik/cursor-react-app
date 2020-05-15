import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import { selectBalance } from '../../redux/selectors/rootSelectors';
import { selectUserData } from '../../redux/selectors/profile.selectors';
import { selectCategories } from '../../redux/selectors/categories.selectors';
import AddBtn from './AddBtn';
import { postTotalDescriptionThunk } from '../../redux/actions/home.actions';
import { loadCategories } from '../../redux/actions/categories.actions';
import Notifier from '../../components/Notifier/Notifier';
import { getUserDataProfile } from '../../redux/actions/profile.actions';
import { getTotalBalanceThunk } from '../../redux/actions/root.actions';
import './NewCharge.scss';

export default () => {
  const dispatch = useDispatch();
  const formData = useRef({
    total: '',
    description: '',
    date: new Date(),
    category: 0,
  });
  const userData = useSelector(selectUserData);
  const currentBalance = useSelector(selectBalance);

  const history = useHistory();
  const switchValue = useSelector(state => state.rootReducer.switchName);
  const [totalClass, setTotalClass] = useState('');
  const [descriptionClass, setDescriptionClass] = useState('');
  const [isNotifyEnable, setIsNotifyEnable] = useState(false);
  const currentCharge = Number(formData.current.total);

  const checkTotalErr = () => {
    const reg = /^[0-9.]{1,}$/;
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
    dispatch(getUserDataProfile());
    dispatch(getTotalBalanceThunk());
  }, []);

  const categories = useSelector(selectCategories);
  const options = categories.map(category => (
    <option key={category.name} value={category.id}>
      {category.name}
    </option>
  ));

  const approvedDispatch = () => {
    const {
      total, description, date, category,
    } = formData.current;
    if (!checkTotalErr() && !checkDescriptionErr() && category) {
      dispatch(postTotalDescriptionThunk(
        total,
        description,
        Date.parse(date),
        history,
        category,
        switchValue,
      ));
    }
  };

  const onCancelModal = () => {
    setIsNotifyEnable(false);
  };

  const onButtonClick = () => {
    if (switchValue === 'income') {
      approvedDispatch();
      return;
    }
    if (userData.notify) {
      if (currentBalance - currentCharge < userData.criticalBudget) {
        setIsNotifyEnable(true);
      } else {
        setIsNotifyEnable(false);
      }
    } else {
      approvedDispatch();
    }
  };

  return (
    <>
      {!isNotifyEnable ? (
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
              defaultValue={formData.current.category}
              onChange={e => changeValue(e.target.value, 'category')}
            >
              <option aria-label="None" value={0} disabled>
                Select category{' '}
              </option>
              {options}
            </NativeSelect>
          </div>
          <div className="form__item">
            <TextField
              id="date"
              label="Date"
              type="date"
              className="form__select"
              defaultValue={moment(formData.current.date).format('YYYY-MM-DD')}
              onChange={e => changeValue(e.target.value.valueOf(), 'date')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <AddBtn onClick={onButtonClick} />
        </form>
      ) : (
        <Notifier
          open={isNotifyEnable}
          onSubmit={approvedDispatch}
          onCancel={onCancelModal}
        />
      )}
    </>
  );
};

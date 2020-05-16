import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './NewCategories.scss';
import SimpleSelect from './select';
import { addCategory } from '../../redux/actions/categories.actions';

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [buttonState, changeButtonState] = useState(true);
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  const [iconId, setIconId] = useState(1);

  const changeInputName = (e) => {
    changeName(e.target.value);
  };

  const changeInputDescription = (e) => {
    changeDescription(e.target.value);
  };

  const onButtonSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory(name, description, iconId, history));
  };

  useEffect(() => {
    changeButtonState(!(name !== '' && description !== ''))
  }, [name, description]);

  return (
    <form className="form" onSubmit={onButtonSubmit}>
      <p className="form__text">Name</p>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          className="form__input"
          onChange={changeInputName}
          id="name"
        />
      </label>
      <p className="form__text description">Description</p>
      <label htmlFor="description">
        <input
          type="text"
          name="description"
          className="form__input"
          onChange={changeInputDescription}
          id="description"
        />
      </label>
      <SimpleSelect id={iconId} onChange={setIconId} />
      <button
        className="form__button"
        type="submit"
        disabled={buttonState}
      >Add new category
      </button>
    </form>
  );
};


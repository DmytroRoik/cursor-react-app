import React from 'react';

import './NewCategories.scss';
import SimpleSelect from './select';
import { selectName, selectDescription, selectIconId } from '../../redux/selectors/categories.selectors';
import { useSelector, useDispatch } from "react-redux";
import { postCategory, setNameCategory, setDescriptionCategory } from '../../redux/actions/categories.actions';
import { useHistory } from 'react-router-dom';


export default () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const name = useSelector(selectName);
  const description = useSelector(selectDescription);
  const iconId = useSelector(selectIconId);
  
  const changeInputName = (e) => {
    dispatch(setNameCategory(e.target.value));
  };

  const changeInputDescription = (e) => {
    dispatch(setDescriptionCategory(e.target.value));
  };

  const onButtonClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    dispatch(postCategory(name, description, iconId, history));
    
  };

  return (
    <form className="form">
    <p className="form__text">Name</p>
    <label>
      <input type="text" name="name" className="form__input" onChange={changeInputName} />
    </label>
    <p className="form__text description">Description</p>
    <label>
      <input type="text" name="description" className="form__input" onChange={changeInputDescription}/>
    </label>
    <SimpleSelect />
    
    <button className="form__button" type="submit" onClick={onButtonClick}>Add new category</button>
    
  </form>
  )
};


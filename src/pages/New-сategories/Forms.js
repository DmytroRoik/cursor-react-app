import React, { useState } from 'react';
import './NewCategories.scss';
import SimpleSelect from './select';


const NewCategoryForm = () => {
  const [name, changeName] = useState();
  const [description, changeDescription] = useState();
  const onChangeName = (e) => {
    changeName(e.target.value);
  }
  const onChangeDescription = (e) => {
    changeDescription(e.target.value);
  }
  return (
    <form className="form">
        <p className="form__text">Name</p>
        <label>
          <input type="text" name="name" className="form__input" value={name} onChange={onChangeName} />
        </label>
        <p className="form__text description">Description</p>
        <label>
          <input type="text" name="description" className="form__input" value={description} onChange={onChangeDescription} />
        </label>
        <SimpleSelect/> 
        <button className="form__button" type="submit">Add new category</button>
      </form>
    );
};
export default NewCategoryForm;

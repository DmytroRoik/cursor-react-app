import React, { useState } from 'react';
import './NewCategories.scss';

const FormsInput = () => {
  const [name, changeName] = useState();
  function onChangeName(e) {
    changeName(e.target.value);
  }
  const [description, changeDescription] = useState();
  function onChangeDescription(e) {
    changeDescription(e.target.value);
  }
  return (
    <div className="main-forms">
      <form className="main-forms__item" onSubmit={onChangeName}>
        <label>
          <p className="form__text">Name</p>
          <input type="text" name="name" className="form__input" value={name} onChange={onChangeName} />
        </label>
      </form>
      <form className="main-forms__item" onSubmit={onChangeDescription}>
        <label>
          <p className="form__text">Description</p>
          <input type="text" name="description" className="form__input" value={description} onChange={onChangeDescription} />
        </label>
      </form>
    </div>
  );
};
export default FormsInput;
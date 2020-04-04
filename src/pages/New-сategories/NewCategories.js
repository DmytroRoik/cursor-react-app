import React from 'react';
import './NewCategories.scss';
import FormsInput from './Forms';

const NewCategories = () => {
  return (
    <div className="wrapper">
      <div className="main__conrainer">
        <div className="main__heading">New category</div>
        <FormsInput />
      </div>
    </div>
  );
};

export default NewCategories;

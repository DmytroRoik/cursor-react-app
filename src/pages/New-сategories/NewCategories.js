import React from 'react';
import './NewCategories.scss';
import NewCategoryForm from './Forms';
import Balance from "../../components/Balance";


const NewCategories = () => (
  <div className="wrapper">
    <div className="main__conrainer">
      <div className="main__heading">New category</div>
      <NewCategoryForm />
      <div className="balance"><Balance total={272727.02}/></div>
    </div>
  </div>
);

export default NewCategories;


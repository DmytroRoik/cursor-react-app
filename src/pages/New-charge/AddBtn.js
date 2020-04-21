import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import { selectSwitchName } from '../../redux/selectors/rootSelectors';

import './NewCharge.scss';

const AddBtn = ({ onClick }) => {
  const btnName = useSelector(selectSwitchName);
  return (
    <div className="add-btn">
      <Button variant="contained" color="primary" onClick={onClick}>Add new {btnName} </Button>
    </div>
  );
};

export default AddBtn;

import React from 'react';
import './Balance.scss';

const Balance = ({ total }) => (
  <div className="balance__box">
    <div className="emptyDiv" />
    <div className="balance__text">Balance
      <span className="balance__sum"> ${ total }</span>
    </div>
  </div>

);
export default Balance;

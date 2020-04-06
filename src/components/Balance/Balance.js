import React from 'react';


const Balance = ({ total }) => (
  <div className="balance">
    <div className="balance__box">
      <div className="balance__text">Balance</div>
      <div className="balance__sum">{ total }</div>
    </div>
  </div>
);
export default Balance;

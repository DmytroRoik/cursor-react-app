import React from 'react';


const Balance = ({ suma }) => (
  <div className="balance">
    <div className="balance__box">
      <div className="balance__text">Balance</div>
      <div className="balance__sum">{ suma }</div>
    </div>
  </div>
);
export default Balance;

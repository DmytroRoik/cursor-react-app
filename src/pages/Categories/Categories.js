import React from 'react';
import { connect } from 'react-redux';

import Balance from '../../components/Balance';
import BtnAddMore from '../../components/BtnAddMore';
import TableCategories from '../../components/TableCategories';

const Categories = props => (
  <div>
    <Balance total={props.balance} />
    <BtnAddMore />
    <TableCategories />
  </div>
);

const mapStateToProps = state => ({
  balance: state.rootReducer.balance,
});

export default connect(mapStateToProps, null)(Categories);

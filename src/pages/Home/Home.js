import React from 'react';
import { connect } from 'react-redux';

import Balance from '../../components/Balance';

const Home = props => <div><Balance total={props.balance} /></div>;

const mapStateToProps = state => ({
  balance: state.rootReducer.balance,
});

export default connect(mapStateToProps, null)(Home);

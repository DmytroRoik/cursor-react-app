import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';

import './Sidebar.scss';

const Sidebar = () => (
  <div className="sidebar">
    <div className="wraper">
      <img src={Logo} alt="logo" />
      <h2>MoneyTracker</h2>
    </div>
    <div className="list">
      <Link to="/" href="/">
        Home
      </Link>
      <Link to="/charts" href="/charts">
        Charts
      </Link>
      <Link to="/categories" href="/categories">
        Categories
      </Link>
    </div>
  </div>
);

export default Sidebar;

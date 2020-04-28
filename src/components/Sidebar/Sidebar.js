import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';

import './Sidebar.scss';

const Sidebar = () => (
  <div className="sidebar">
    <div className="wraper">
      <img src={Logo} alt="logo" />
      <h2>MoneyTracker</h2>
    </div>
    <div className="list">
      <NavLink exact to="/" href="/" activeClassName="activeLink">
        Home
      </NavLink>
      <NavLink exact to="/charts" href="/charts" activeClassName="activeLink">
        Charts
      </NavLink>
      <NavLink exact to="/categories" href="/categories" activeClassName="activeLink">
        Categories
      </NavLink>
      <NavLink exact to="/profile" href="/profile" activeClassName="activeLink">
        Profile
      </NavLink >
    </div>
  </div>
);

export default Sidebar;

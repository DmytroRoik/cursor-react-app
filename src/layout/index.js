import React from 'react';
import './style.scss';

const Layout = ({ sidebar, pages }) => (
  <div className="layout">
    <div className="layout__sidebar">{sidebar}</div>
    <div className="layout__pages">{pages}</div>
  </div>
);

export default Layout;

import React from 'react';
import NavLink from './NavLink';

module.exports = () => {
  return (
    <div className="header clearfix">
      <nav>
        <ul className="nav nav-pills pull-right">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/hazium">
            Hazium
          </NavLink>
          <NavLink to="/building">
            General building
          </NavLink>
          <NavLink to="/proximity">
            Proximity
          </NavLink>
        </ul>
      </nav>
      <h3 className="text-muted">VAST Mini Challenge 2</h3>
    </div>
  );
}

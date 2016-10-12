import React from 'react';
import { Link } from 'react-router';

const NavLink = (props, context) => {
  const isActive = context.router.isActive(props.to, true);
  const className = isActive ? 'active' : '';

  return (
    <li role="presentation" className={className}>
      <Link {...props} />
    </li>
  );
}

NavLink.contextTypes = {
  router: React.PropTypes.object,
};

module.exports = NavLink;

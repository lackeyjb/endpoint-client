import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export const Navbar = ({ isAuthenticated, onLogout }) => {
  const loggedInLinks = (
    <div>
      <Link to="protected">Protected</Link>
      <br />
      <Link to="/" onClick={onLogout}>Logout</Link>
    </div>
  );

  const notLoggedInLinks = <Link to="login">Login</Link>;

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      {isAuthenticated ? loggedInLinks : notLoggedInLinks}
    </div>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLogout: PropTypes.func,
};

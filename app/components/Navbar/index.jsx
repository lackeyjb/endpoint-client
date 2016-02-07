import React, { PropTypes } from 'react';
import MenuBlock from '../common/MenuBlock';
import styles from './Navbar.scss';

export const Navbar = ({ isAuthenticated, onLogout }) => {
  const loggedInLinks = (
    <div>
      <MenuBlock to="protected" icon="lock" text="Protected" />
      <MenuBlock to="/" icon="sign-out" text="Logout" onClick={onLogout} />
    </div>
  );

  const notLoggedInLinks = (
    <MenuBlock to="login" icon="sign-in" text="Login" />
  );

  return (
    <nav className={styles.menu}>
      <p className={`menu-heading ${styles.navHeader}`}>
        Endpoint
      </p>
      <MenuBlock to="/" icon="home" text="Home" />
      {isAuthenticated ? loggedInLinks : notLoggedInLinks}
    </nav>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLogout: PropTypes.func,
};

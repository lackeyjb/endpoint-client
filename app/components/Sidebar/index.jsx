import React, { PropTypes } from 'react';
import MenuBlock from '../common/MenuBlock';
import styles from './Sidebar.scss';

export const Sidebar = ({ isAuthenticated, onLogout }) => {
  const loggedInLinks = (
    <div>
      <MenuBlock to="protected" icon="lock" text="Protected" />
      <MenuBlock to="/" icon="sign-out" text="Logout" onClick={onLogout} />
    </div>
  );

  // TODO: change to real page link
  const sendToSignUpPage = () => shell.openExternal('https://google.com'); // eslint-disable-line

  const notLoggedInLinks = (
    <div>
      <MenuBlock to="login" icon="sign-in" text="Login" />
      <MenuBlock externalLink icon="user-plus" text="Signup" onClick={sendToSignUpPage} />
    </div>
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

Sidebar.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLogout: PropTypes.func,
};

import React, { PropTypes } from 'react';
import styles from './Footer.scss';

const Footer = ({ title }) => (
  <footer className={`${styles.toolbar} ${styles.toolbarFooter}`}>
    <h1 className={styles.toolbarTitle}>{title}</h1>
  </footer>
);

Footer.propTypes = {
  title: PropTypes.string,
};

export default Footer;

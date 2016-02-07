import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestLogout } from '../../actions';
import Footer from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import styles from './App.scss';

export const App = ({
  children,
  isAuthenticated,
  onLogout,
}) => (
  <div className={styles.window}>
    <div className={styles.windowContent}>
      <div className={styles.paneGroup}>
        <div className={`${styles.paneSm} ${styles.sidebar}`}>
          <Navbar
            isAuthenticated={isAuthenticated}
            onLogout={onLogout}
          />
        </div>
        <main className={styles.pane}>
          {children}
        </main>
      </div>
    </div>
    <Footer title="Endpoint" />
  </div>
);

App.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLogout: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(
  mapStateToProps,
  { onLogout: requestLogout }
)(App);

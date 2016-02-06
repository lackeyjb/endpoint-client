import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { requestLogout } from '../actions';

const Home = ({ isAuthenticated, onLogoutClick }) => (
  <div>
    <h1>Home</h1>
    {isAuthenticated
      ? <Link to="/" onClick={onLogoutClick}>Logout</Link>
      : <Link to="login">Login</Link>
    }
  </div>
);

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}

Home.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLogoutClick: PropTypes.func,
};

export default connect(
  mapStateToProps,
  { onLogoutClick: requestLogout }
)(Home);

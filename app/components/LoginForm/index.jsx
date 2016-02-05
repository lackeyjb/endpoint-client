import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import styles from './LoginForm.scss';

const LoginForm = ({ fields, onLoginUser, className }) => {
  const { username, password } = fields;

  function onSubmit() {
    const user = {
      username: username.value,
      password: password.value,
    };
    return onLoginUser(user);
  }

  return (
    <form className={className} onSubmit={onSubmit}>
      <h1 className="title">Login</h1>
      <p className="control is-withicon">
        <input
          className="input is-large"
          type="text"
          placeholder="Username"
          {...username}
        />
        <i className={`${styles.envelope} fa fa-envelope`}></i>
      </p>
      <p className="control is-withicon">
        <input
          className="input is-large"
          type="password"
          placeholder="Password"
          {...password}
        />
        <i className={`${styles.envelope} fa fa-envelope`}></i>
      </p>
      <p className="control">
        <button className="button is-success is-large" type="submit">
          Login
        </button>
      </p>
    </form>
  );
};

LoginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  onLoginUser: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default reduxForm({
  form: 'login',
  fields: ['username', 'password'],
})(LoginForm);

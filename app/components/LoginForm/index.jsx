import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import FormGroup from '../common/FormGroup';
import Button from '../common/Button';
import Title from '../common/Title';
import { FontAwesome } from '../common/Icon';
import styles from './LoginForm.scss';

const LoginForm = ({ fields, onLoginUser, className }) => {
  const { username, password } = fields;

  function onSubmit(event) {
    event.preventDefault();

    const user = {
      username: username.value,
      password: password.value,
    };

    return onLoginUser(user);
  }

  return (
    <form className={className} onSubmit={onSubmit}>
      <Title text="Login" />
      <FormGroup type="text" size="large" placeholder="Username" icon field={username}>
        <FontAwesome className={styles.envelope} icon="envelope" />
      </FormGroup>
      <FormGroup type="password" size="large" placeholder="Password" icon field={password}>
        <FontAwesome className={styles.lock} icon="lock" />
      </FormGroup>
      <FormGroup input={false}>
        <Button color="success" size="large" type="submit" text="Login" />
      </FormGroup>
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

import React, { PropTypes } from 'react';
import Input from './Input';
import classNames from 'classnames';

const FormGroup = ({ input = true, type, size, placeholder, icon, field, children }) => {
  const hasIcon = classNames({
    control: true,
    'is-withicon': icon,
  });
  function hasInput() {
    return input
      ? <Input type={type} size={size} placeholder={placeholder} {...field} />
      : '';
  }
  return (
    <p className={hasIcon}>
      {hasInput()}
      {children}
    </p>
  );
};

FormGroup.propTypes = {
  input: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.bool,
  field: PropTypes.object,
  children: PropTypes.element,
};

export default FormGroup;

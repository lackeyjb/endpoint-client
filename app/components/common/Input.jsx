import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Input = (props) => {
  const { className, size, type, label, ...other } = props;

  const inputClasses = classNames({
    input: true,
    [className]: className,
    [`is-${size}`]: size,
  });

  const input = <input className={inputClasses} {...other} />;

  if (label) {
    return (
      <label className={type}>
        {input}
      </label>
    );
  }

  return input;
};

Input.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.bool,
};

export default Input;

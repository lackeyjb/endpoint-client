import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Button = (props) => {
  const {
    className, color,
    size, text, outlined,
    loading, disabled, ...other,
  } = props;

  const btnClasses = classNames({
    button: true,
    [className]: className,
    [`is-${color}`]: color,
    [`is-${size}`]: size,
    'is-outlined': outlined,
    'is-loading': loading,
    'is-disabled': disabled,
  });

  return (
    <button className={btnClasses} {...other}>
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  outlined: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;

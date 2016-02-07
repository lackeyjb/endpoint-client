import React, { PropTypes } from 'react';
import classNames from 'classnames';

export const FontAwesome = ({ icon, className }) => <i className={`${className} fa fa-${icon}`} />;

FontAwesome.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export const Icon = ({ icon, size }) => {
  const iconClass = classNames({
    icon: true,
    [`is-${size}`]: size,
  });
  return (
    <span className={iconClass}>
      <FontAwesome icon={icon} />
    </span>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

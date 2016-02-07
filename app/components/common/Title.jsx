import React, { createElement, PropTypes } from 'react';
import classNames from 'classnames';

const Title = (props) => {
  const { className, subtitle, size, text } = props;

  const titleClasses = classNames({
    subtitle,
    title: !subtitle,
    [className]: className,
    [`is-${size}`]: size,
  });

  if (!size) {
    return <h1 className={titleClasses}>{text}</h1>;
  }
  return createElement(
    `h${size}`,
    { className: titleClasses },
    text
  );
};

Title.propTypes = {
  className: PropTypes.string,
  subtitle: PropTypes.bool,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  text: PropTypes.string.isRequired,
};

export default Title;

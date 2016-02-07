import React, { PropTypes } from 'react';
import classNames from 'classnames';

export const Columns = ({ children }) => <div className="columns">{children}</div>;

export const Column = ({ size, children }) => {
  const columnClasses = classNames({
    column: true,
    [`is-${size}`]: size,
  });
  return <div className={columnClasses}>{children}</div>;
};

const colNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const columnSizes = [
  'half',
  'third',
  'quarter',
  ...colNums,
];

Column.propTypes = {
  size: PropTypes.oneOf(columnSizes),
};

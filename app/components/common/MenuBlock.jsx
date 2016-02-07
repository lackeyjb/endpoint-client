import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FontAwesome } from './Icon';

function hasIcon(icon) {
  if (icon) {
    return (
      <span className="menu-icon">
        <FontAwesome icon={icon} />
      </span>
    );
  }
  return '';
}

const MenuBlock = ({ to, icon, text, onClick }) => (
  <Link className="menu-block" to={to} onClick={onClick}>
    {hasIcon(icon)}
    {text}
  </Link>
);

MenuBlock.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default MenuBlock;

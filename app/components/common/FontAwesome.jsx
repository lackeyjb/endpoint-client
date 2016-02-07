import React, { PropTypes } from 'react';

const FontAwesome = ({ icon }) => <i className={`fa fa-${icon}`} />;

FontAwesome.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default FontAwesome;

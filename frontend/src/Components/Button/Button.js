import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
   return <button className={props.className || 'add-button'} onClick={props.onClick}>{props.text}</button>;
} 

Button.propTypes = {
   className: PropTypes.string,
   onClick: PropTypes.func.isRequired,
   text: PropTypes.string.isRequired
};


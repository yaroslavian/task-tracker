import React from 'react';
import PropTypes from 'prop-types';

/** Button component */
export const Button = (props) => {
   return (
      <button
         className={props.className || 'button'}
         onClick={props.onClick}
      >
         {props.text}
      </button>
   );
};

Button.propTypes = {
   className: PropTypes.string,
   onClick: PropTypes.func.isRequired,
   text: PropTypes.string.isRequired
};


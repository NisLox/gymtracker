import React from 'react';

/* 
  Button Component
  @param {string} name
  @param {func} handleClick
  @returns button element
 */
const Button = ({ name, handleClick }) => {
  return (
<button type="button" class="btn btn-danger" onClick={handleClick}>{name}</button>  );
}

export default Button;
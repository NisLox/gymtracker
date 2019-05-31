import React from 'react';

/* 
  Button Component
  @param {string} name
  @param {func} handleClick
  @returns button element
 */
const Button = ({ name, handleClick }) => {
  return (
    <button class="btn btn-primary" type="button" onClick={handleClick}> {name}</button>
  );
}

export default Button;
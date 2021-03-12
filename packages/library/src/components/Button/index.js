import React from 'react';

import './index.css';

const Button = ({ text, disabled, onClick, className = '' }) => {
  return (
    <button
      className={`btn btn--primary ${className}`}
      disabled={disabled}
      onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;
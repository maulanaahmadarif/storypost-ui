import React from 'react'
import className from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Input.css'

const Input = (props) => {
  return (
    <div className="form-input-wrapper">
      <input
        type={props.type}
        value={props.value}
        className={className(
          'form-input',
          props.className,
          { 'form-input-with-icon': props.icon }
        )}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      { props.icon ? (
        <span className="form-input-icon">
          <FontAwesomeIcon icon={props.icon} />
        </span>
      ) : null }
    </div>
  )
}

export default Input
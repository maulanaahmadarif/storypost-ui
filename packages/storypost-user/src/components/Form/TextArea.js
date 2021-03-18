import React from 'react'
import className from 'classnames'

import './TextArea.css'

const TextArea = (props) => {
  return (
    <div className="form-input-wrapper">
      <textarea
        className={className(
          'form-input',
          props.className,
        )}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        id={props.id}
        placeholder={props.placeholder} />
    </div>
  )
}

export default TextArea
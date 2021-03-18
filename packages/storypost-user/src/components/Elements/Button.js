import React from 'react'
import className from 'classnames'

import './Button.css'

const Button = (props) => {
  return (
    <button className={className('btn', props.className)} onClick={props.onClick}>{props.text}</button>
  )
}

export default Button
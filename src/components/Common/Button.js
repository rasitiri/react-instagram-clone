import React from 'react'
import classes from './Button.module.scss'

const Button = props => (
  <button {...props} className={classes.btn}>
    {props.text}
  </button>
)

export default Button

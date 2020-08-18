import React from 'react'
import classes from './Input.module.scss'

const Input = props => (
  <div className={classes.formItem}>
    <input {...props} />
  </div>
)

export default Input

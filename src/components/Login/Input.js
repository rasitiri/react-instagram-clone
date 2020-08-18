import React from 'react'
import classes from './Form-Element.module.scss'

const Input = props => (
  <div className={classes.formItem}>
    <input
      {...props}
    />
  </div>
)

export default Input

import React from 'react'
import classes from './Divider.module.scss'

const Divider = ({ text }) => (
  <span className={classes.divider}>
    <h2>
      <span>{text}</span>
    </h2>
  </span>
)

export default Divider

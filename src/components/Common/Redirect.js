import React from 'react'
import classes from './Redirect.module.scss'
import { Link } from 'react-router-dom'

const Redirect = ({ text, page, to }) => (
  <div className={classes.redirectContainer}>
    <p>
      {text} <Link to={`/${to}`}>{page}</Link>
    </p>
  </div>
)

export default Redirect

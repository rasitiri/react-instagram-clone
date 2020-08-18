import React from 'react'
import classes from './SignUp.module.scss'
import { Link } from 'react-router-dom'

const SignUp = () => (
  <div className={classes.signUpLinkcontainer}>
    <p>
      Don't have an account? <Link to="/signup">Sign Up</Link>
    </p>
  </div>
)

export default SignUp

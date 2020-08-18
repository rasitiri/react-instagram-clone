import React from 'react'
import classes from './Form.module.scss'
import instagramTextPNG from './images/instagram.png'
import facebookPNG from './images/facebook.png'
import Input from './Input'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div className={classes.formContainer}>
      <img src={instagramTextPNG} alt="logo" />
      <form className={classes.form}>
        <Input
          type="email"
          required
          placeholder="Phone number, username, or email"
        />
        <Input type="password" required placeholder="Password" />
        <button>Log In</button>
      </form>
      <span className={classes.or}>
        <h2>
          <span>OR</span>
        </h2>
      </span>
      <div className={classes.facebook}>
        <img src={facebookPNG} alt="facebook"/>
        <a href="https://www.facebook.com">Log in with Facebook</a>
      </div>
      <div className={classes.forgotPassword}>
        <Link to="/reset-password">Forgot password?</Link>
      </div>
    </div>
  )
}

export default Form

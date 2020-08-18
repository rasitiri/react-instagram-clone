import React from 'react'
import classes from './Form.module.scss'
import instagramTextPNG from '../../assets/images/instagram.png'
import facebookPNG from '../../assets/images/facebook.png'
import Input from '../Common/Input'
import { Link } from 'react-router-dom'
import Button from '../Common/Button'
import Divider from '../Common/Divider'

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
        <Button text="Log In" />
      </form>
      <Divider text="OR" />
      <div className={classes.facebook}>
        <img src={facebookPNG} alt="facebook" />
        <a href="https://www.facebook.com">Log in with Facebook</a>
      </div>
      <div className={classes.forgotPassword}>
        <Link to="/reset-password">Forgot password?</Link>
      </div>
    </div>
  )
}

export default Form

import React from 'react'
import Input from '../Common/Input'
import Button from '../Common/Button'
import Divider from '../Common/Divider'
import instagramTextPNG from '../../assets/images/instagram.png'
import facebookPNG from '../../assets/images/facebook-white.png'
import classes from './Form.module.scss'

const Form = () => {
  return (
    <div className={classes.formContainer}>
      <img src={instagramTextPNG} alt="logo" />
      <p>Sign up to see photos and videos from your friends.</p>
      <button className={classes.facebookBtn}>
        {' '}
        <img src={facebookPNG} alt="" /> Log in with Facebook
      </button>
      <Divider text="OR" />
      <Input type="email" placeholder="Mobile Number or Email" />
      <Input type="text" placeholder="Full Name" />
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button text="Sign Up" />
      <p className={classes.policyText}>
        By signing up, you agree to our <a href="#terms">Terms</a> ,{' '}
        <a href="#policy">Data Policy</a> and{' '}
        <a href="#cookies">Cookies Policy </a>.
      </p>
    </div>
  )
}

export default Form

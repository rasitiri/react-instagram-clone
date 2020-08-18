import React, { useState } from 'react'
import Input from '../Common/Input'
import Button from '../Common/Button'
import Divider from '../Common/Divider'
import instagramTextPNG from '../../assets/images/instagram.png'
import facebookPNG from '../../assets/images/facebook-white.png'
import classes from './Form.module.scss'
import { useDispatch } from 'react-redux'
import { signUp } from '../../store/authentication/actions'

const Form = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onSignUp = e => {
    e.preventDefault()
    dispatch(signUp(email, name, password))
  }

  return (
    <form className={classes.formContainer} onSubmit={onSignUp}>
      <img src={instagramTextPNG} alt="logo" />
      <p>Sign up to see photos and videos from your friends.</p>
      <button className={classes.facebookBtn}>
        {' '}
        <img src={facebookPNG} alt="" /> Log in with Facebook
      </button>
      <Divider text="OR" />
      <Input
        type="email"
        placeholder="Mobile Number or Email"
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Full Name"
        onChange={e => setName(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <Button text="Sign Up" type="submit" />
      <p className={classes.policyText}>
        By signing up, you agree to our <a href="#terms">Terms</a> ,{' '}
        <a href="#policy">Data Policy</a> and{' '}
        <a href="#cookies">Cookies Policy </a>.
      </p>
    </form>
  )
}

export default Form

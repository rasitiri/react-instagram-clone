import React, { useState } from 'react'
import classes from './Form.module.scss'
import instagramTextPNG from '../../assets/images/instagram.png'
import facebookPNG from '../../assets/images/facebook.png'
import Input from '../Common/Input'
import { Link, useHistory } from 'react-router-dom'
import Button from '../Common/Button'
import Divider from '../Common/Divider'
import { useDispatch } from 'react-redux'
import {
  signInRequest,
  signInSuccess,
  signInFailure,
  setAuthStatus,
} from '../../store/authentication/actions'
import firebase from '../../firebase'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const onLogin = e => {
    e.preventDefault()
    dispatch(signInRequest)
    firebase
      .login(email, password)
      .then(() => {
        console.log('başarılı')
        dispatch(signInSuccess())
        dispatch(setAuthStatus(true))
        history.push('/')
      })
      .catch(err => {
        console.log('err:', err)
        setEmail('')
        setPassword('')
        dispatch(setAuthStatus(false))
        dispatch(signInFailure(err.message))
        setError(err.message)
      })
  }

  return (
    <div className={classes.formContainer}>
      <img src={instagramTextPNG} alt="logo" />
      <form className={classes.form} onSubmit={onLogin}>
        <Input
          type="email"
          required
          placeholder="Phone number, username, or email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button text="Log In" type="submit" />
        <p style={{ color: '#BD1110', fontSize: '14px', margin: '10px auto' }}>
          {error}
        </p>
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

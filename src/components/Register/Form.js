import React, { useState, useEffect } from 'react'
import Input from '../Common/Input'
import Button from '../Common/Button'
import Divider from '../Common/Divider'
import instagramTextPNG from '../../assets/images/instagram.png'
import facebookPNG from '../../assets/images/facebook-white.png'
import classes from './Form.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  resetState,
  signUpSuccess,
  signUpFailure,
} from '../../store/authentication/actions'
import { useHistory } from 'react-router-dom'
import firebase from '../../firebase'

const Form = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const error = useSelector(state => state.authReducer.error)
  const history = useHistory()

  const onSignUp = e => {
    e.preventDefault()
    firebase
      .register(email, name, password)
      .then(() => {
        dispatch(signUpSuccess())
        history.push('/login')
      })
      .catch(err => dispatch(signUpFailure(err.message)))
  }

  useEffect(() => {
    return () => history.listen((location, action) => dispatch(resetState()))
  })

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
        required
      />
      <Input
        type="text"
        placeholder="Full Name"
        onChange={e => setName(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        required
      />
      <Button text="Sign Up" type="submit" />
      <p className={classes.policyText}>
        By signing up, you agree to our <a href="#terms">Terms</a> ,{' '}
        <a href="#policy">Data Policy</a> and{' '}
        <a href="#cookies">Cookies Policy </a>.
      </p>
      <p style={{ color: '#BD1110', fontSize: '14px', margin: '10px auto' }}>
        {error}
      </p>
    </form>
  )
}

export default Form

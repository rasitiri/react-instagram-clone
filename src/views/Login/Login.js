import React from 'react'
import Form from '../../components/Login/Form'
import classes from './Login.module.scss'
import SignUp from '../../components/Login/SignUp'
import AppBanner from '../../components/Login/AppBanner'

const Login = () => {
  return (
    <div className={classes.loginContainer}>
      <Form></Form>
      <SignUp></SignUp>
      <AppBanner></AppBanner>
    </div>
  )
}

export default Login

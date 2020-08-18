import React, { useEffect } from 'react'
import Form from '../../components/Login/Form'
import classes from './Login.module.scss'
import AppBanner from '../../components/Common/AppBanner'
import Redirect from '../../components/Common/Redirect'

const Login = () => {
  useEffect(() => {
    document.title = 'Login - Reactgram'
  }, [])

  return (
    <div className={classes.loginContainer}>
      <Form></Form>
      <Redirect
        text="Don't have an account?"
        page="Sign up"
        to="signup"
      ></Redirect>
      <AppBanner></AppBanner>
    </div>
  )
}

export default Login

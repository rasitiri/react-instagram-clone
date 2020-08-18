import React, { useEffect } from 'react'
import classes from './Register.module.scss'
import Form from '../../components/Register/Form'
import Redirect from '../../components/Common/Redirect'
import AppBanner from '../../components/Common/AppBanner'

const Register = () => {
  useEffect(() => {
    document.title = 'Register - Reactgram'
  }, [])

  return (
    <div className={classes.registerContainer}>
      <Form></Form>
      <Redirect text="Have an account?" page="Log in" to="login"></Redirect>
      <AppBanner></AppBanner>
    </div>
  )
}

export default Register

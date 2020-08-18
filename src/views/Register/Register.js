import React, { useEffect } from 'react'
import classes from './Register.module.scss'
import Form from '../../components/Register/Form'

const Register = () => {
  useEffect(() => {
    document.title = 'Register - Reactgram'
  }, [])

  return (
    <div className={classes.registerContainer}>
      <Form></Form>
    </div>
  )
}

export default Register

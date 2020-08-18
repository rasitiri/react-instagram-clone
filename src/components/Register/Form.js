import React from 'react'
import Input from '../Common/Input'
import classes from './Form.module.scss'
import Button from '../Common/Button'

const Form = () => {
  return (
    <div className={classes.formContainer}>
      <Input type="email" placeholder="Mobile Number or Email" />
      <Input type="text" placeholder="Full Name" />
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button text="Sign Up"/>
    </div>
  )
}

export default Form

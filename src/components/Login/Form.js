import React from 'react'
import classes from './Form.module.scss'
import instagramTextPNG from './instagram.png'
import Input from './Input'

const Form = () => {
  return (
    <div className={classes.formContainer}>
      <img src={instagramTextPNG} alt="" />
      <form className={classes.form}>
        <Input
          type="email"
          required
          placeholder="Phone number, username, or email"
        />
        <Input type="password" required placeholder="Password" />
      </form>
    </div>
  )
}

export default Form

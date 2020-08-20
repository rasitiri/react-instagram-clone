import React from 'react'
import classes from './User.module.scss'

const User = ({ imgUrl, username }) => (
  <div className={classes.userItem}>
    <div className={classes.userImg}>
      <img src={imgUrl} alt="" />
    </div>
    <div className={classes.usernameAndName}>
      <p>{username}</p>
      <span>New to Instagram</span>
    </div>
    <div className={classes.followButton}>Follow</div>
  </div>
)

export default User

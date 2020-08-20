import React from 'react'
import classes from './Menu.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import firebase from '../../firebase'
import { useHistory } from 'react-router-dom'
import { setAuthStatus, setMenuOpen } from '../../store/authentication/actions'

const Menu = () => {
  const isOpen = useSelector(state => state.authReducer.isOpen)
  const history = useHistory()
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(setAuthStatus(false))
    dispatch(setMenuOpen())
    firebase.logout()
    history.push('/login')
  }

  return isOpen === true ? (
    <div className={classes.menuContainer}>
      <div className={classes.square}></div>
      <span>Profile ({firebase.getCurrentUserInfo()})</span>
      <span>Saved</span>
      <span>Settings</span>
      <span className={classes.logout} onClick={onLogout}>
        Log out
      </span>
    </div>
  ) : null
}

export default Menu

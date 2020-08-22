import React from 'react'
import classes from './Menu.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import firebase from '../../firebase'
import { useHistory, Link } from 'react-router-dom'
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
      <span>
        <Link
          to="/profile"
          style={{ textDecoration: 'none', color: 'rgb(38,38,38)' }}
        >
          <span>Profile ({firebase.getCurrentUserInfo()})</span>
        </Link>
      </span>
      <span>Saved</span>
      <span>Settings</span>
      <span className={classes.logout} onClick={onLogout}>
        Log out
      </span>
    </div>
  ) : null
}

export default Menu

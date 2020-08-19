import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import { useSelector, useDispatch } from 'react-redux'
import { setAuthStatus } from '../../store/authentication/actions'

const Home = () => {
  const [isAuth, setIsAuth] = useState(false)
  const auth = useSelector(state => state.authReducer.isLoggedIn)
  const dispatch = useDispatch()

  useEffect(() => {
    setIsAuth(firebase.isAuthenticated())
  }, [])

  const onLogout = () => {
    dispatch(setAuthStatus(false))
    firebase.logout()
  }

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Status: {isAuth ? 'Giriş yapılmış ' : 'Giriş yapılMAMIŞ'}</h2>
      <h3>User: {firebase.getCurrentUserInfo()}</h3>
      <h2>Status : {auth === true ? 'doğru' : 'yanlış'}</h2>
      <button onClick={onLogout}>Log out</button>
    </div>
  )
}

export default Home

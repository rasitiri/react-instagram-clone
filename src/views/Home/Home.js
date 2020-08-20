import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import { useSelector, useDispatch } from 'react-redux'
import { setAuthStatus } from '../../store/authentication/actions'
import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/Navbar/Menu'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const [isAuth, setIsAuth] = useState(false)
  const auth = useSelector(state => state.authReducer.isLoggedIn)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    setIsAuth(firebase.isAuthenticated())
  }, [])

  const onLogout = () => {
    dispatch(setAuthStatus(false))
    firebase.logout()
    history.push('/login')
  }

  return (
    <div>
      <Navbar></Navbar>
      <Menu></Menu>
      <h1>Home Page</h1>
      <h2>Status: {isAuth ? 'Giriş yapılmış ' : 'Giriş yapılMAMIŞ'}</h2>
      <h3>User: {firebase.getCurrentUserInfo()}</h3>
      <h2>Status : {auth === true ? 'doğru' : 'yanlış'}</h2>
      <button onClick={onLogout}>Log out</button>
    </div>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import { useSelector } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/Navbar/Menu'

const Home = () => {
  const [isAuth, setIsAuth] = useState(false)
  const auth = useSelector(state => state.authReducer.isLoggedIn)

  useEffect(() => {
    setIsAuth(firebase.isAuthenticated())
  }, [])


  return (
    <div>
      <Navbar></Navbar>
      <Menu></Menu>
      <h1>Home Page</h1>
      <h2>Status: {isAuth ? 'Giriş yapılmış ' : 'Giriş yapılMAMIŞ'}</h2>
      <h3>User: {firebase.getCurrentUserInfo()}</h3>
      <h2>Status : {auth === true ? 'doğru' : 'yanlış'}</h2>
    </div>
  )
}

export default Home

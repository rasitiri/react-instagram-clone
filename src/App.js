import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './views/Login/Login'
import Register from './views/Register/Register'
import ResetPassword from './views/ResetPassword/ResetPassword'
import Home from './views/Home/Home'
import firebase from './firebase'
import { useDispatch } from 'react-redux'
import { setAuthStatus } from './store/authentication/actions'
import ProtectedRoute from './ProtectedRoute'

const App = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    firebase.isInitialized().then(val => {
      dispatch(setAuthStatus(true))
      setFirebaseInitialized(val)
    })
  })

  return firebaseInitialized !== false ? (
    <div>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/reset-password" component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './views/Login/Login'
import Register from './views/Register/Register'
import ResetPassword from './views/ResetPassword/ResetPassword'
import Home from './views/Home/Home'
import firebase from './firebase'
import ProtectedRoute from './ProtectedRoute'
import Loading from './components/Loading/Loading'

const App = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })

  return firebaseInitialized !== false ? (
    <div>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/reset-password" component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  ) : (
    <Loading />
  )
}

export default App

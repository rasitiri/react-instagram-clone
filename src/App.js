import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './views/Login/Login'
import Register from './views/Register/Register'
import ResetPassword from './views/ResetPassword/ResetPassword'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/reset-password" component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

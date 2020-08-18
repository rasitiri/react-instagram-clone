import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './views/Login'
import Register from './views/Register'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

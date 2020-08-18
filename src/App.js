import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './views/Login/Login'
import Register from './views/Register/Register'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

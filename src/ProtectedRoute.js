import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector(state => state.authReducer.isLoggedIn)
  const state = useSelector(state => state)

  console.log('auth [protectedRoute.js]:', auth)

  console.log('state:', state)

  return (
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

export default ProtectedRoute

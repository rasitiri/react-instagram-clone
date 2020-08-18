import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from './actionTypes'
import firebase from '../../firebase'

export const signUpRequest = () => ({
  type: SIGN_UP_REQUEST,
})

export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS,
})

export const signUpFailure = error => ({
  type: SIGN_UP_FAILURE,
  payload: { error },
})

export const signUp = (email, name, password) => {
  return dispatch => {
    dispatch(signUpRequest())
    firebase
      .register(email, name, password)
      .then(() => dispatch(signUpSuccess))
      .catch(err => dispatch(signUpFailure(err.message)))
  }
}

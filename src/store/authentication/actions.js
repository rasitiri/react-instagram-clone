import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  RESET_STATE,
} from './actionTypes'

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

export const resetState = () => ({
  type: RESET_STATE,
})

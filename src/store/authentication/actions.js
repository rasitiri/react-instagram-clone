import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  RESET_STATE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SET_AUTH_STATUS,
  SET_MENU_OPEN,
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

export const signInRequest = () => ({
  type: SIGN_IN_REQUEST,
})

export const signInSuccess = () => ({
  type: SIGN_IN_SUCCESS,
})

export const signInFailure = error => ({
  type: SIGN_IN_FAILURE,
  payload: { error },
})

export const resetState = () => ({
  type: RESET_STATE,
})

export const setAuthStatus = status => ({
  type: SET_AUTH_STATUS,
  payload: { status },
})

export const setMenuOpen = () => ({
  type: SET_MENU_OPEN,
})

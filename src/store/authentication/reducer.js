import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  RESET_STATE,
} from './actionTypes'

const initialState = {
  isLoggedIn: false,
  isLoading: true,
  error: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
        error: null,
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
      }
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload.error,
      }
    case RESET_STATE:
      return {}
    default:
      return state
  }
}

export default authReducer

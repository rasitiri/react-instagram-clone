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

const initialState = {
  isLoggedIn: false,
  isLoading: true,
  error: null,
  isOpen: false,
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
        isLoggedIn: false,
      }
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload.error,
      }
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
        error: null,
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
      }
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload.error,
      }
    case SET_AUTH_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload.status,
      }
    case SET_MENU_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    case RESET_STATE:
      return {}
    default:
      return state
  }
}

export default authReducer

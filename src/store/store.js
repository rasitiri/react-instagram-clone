import { createStore, applyMiddleware, combineReducers } from 'redux'
import authReducer from './authentication/reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  authReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

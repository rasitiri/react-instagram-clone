import { createStore, applyMiddleware, combineReducers } from 'redux'
import authReducer from './authentication/reducer'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const rootReducer = combineReducers({
  authReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(rootReducer, applyMiddleware(thunk))
const store = createStore(reducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export { store, persistor }

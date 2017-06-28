import { routerReducer } from 'react-router-redux'
import { combineReducers, applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import mainReducer from './reducers/mainReducer'

export default createStore(
    combineReducers({
      routing: routerReducer,
      main: mainReducer
    }),
    {},
    applyMiddleware(logger, thunk)
)

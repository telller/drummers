import { combineReducers, applyMiddleware, createStore } from 'redux'
import { routerReducer } from 'react-router-redux'
import mainReducer from './reducers/mainReducer'
import blogReducer from './reducers/blogReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default createStore(
    combineReducers({
      routing: routerReducer,
      main: mainReducer,
      blog: blogReducer
    }),
    {},
    applyMiddleware(logger, thunk)
)

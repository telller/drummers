import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './app.jsx'
// import { Home } from '.component/home.jsx'
import React from 'react'
export default (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <IndexRoute component={App} />
  </Router>
)

import './styles/app.less'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { Router, Route, hashHistory } from 'react-router'
import routes from './routes'

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware)

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
), document.getElementById("wrapper"));

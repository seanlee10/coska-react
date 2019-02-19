import './styles/app.less'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './App'
import { BrowserRouter as Router, Route } from "react-router-dom";

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware)

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
), document.getElementById("wrapper"));

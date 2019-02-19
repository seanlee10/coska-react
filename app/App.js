import React from 'react'
import Welcome from './containers/Welcome'
import { Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Route exact path="/" component={Welcome} />
    )
  }
}

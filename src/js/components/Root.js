import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ClassificationList from './ClassificationList'


export default class Root extends Component {
  render() {
    return (
      <ClassificationList></ClassificationList>
    )
  }
}

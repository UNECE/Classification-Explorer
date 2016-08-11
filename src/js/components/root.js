import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configure-store'
import ClassificationList from './classication-list'

const store = configureStore() 

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ClassificationList />
      </Provider>
    )
  }
}

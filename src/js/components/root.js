
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configure-store'
import ClassificationExplorer from './classification-explorer'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ClassificationExplorer />
      </Provider>
    )
  }
}

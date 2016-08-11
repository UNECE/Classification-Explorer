import { combineReducers } from 'redux'
import appState from './app-state'
import classificationList from './classification-list'

export default combineReducers({
  appState,
  classificationList
})
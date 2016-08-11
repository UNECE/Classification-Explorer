import { combineReducers } from 'redux'
import appState from './app-state'
import classificationList from './classification-list'
import classificationItems from './classification-items'

export default combineReducers({
  appState,
  classificationList,
  classificationItems
})

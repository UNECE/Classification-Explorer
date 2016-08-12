import React from 'react'
import ClassificationList from './classification-list'
import ClassificationDetails from './classification-details'
import { connect } from 'react-redux'
import { VIEW_CLASSIFICATION_LIST, VIEW_CLASSIFICATION_ITEMS } from '../reducers/app-state'
function ClassificationExplorer({ view, classification }) {
  let explorer
  if (view === VIEW_CLASSIFICATION_LIST) {
    explorer = <ClassificationList />
  }

  if (view === VIEW_CLASSIFICATION_ITEMS) {
    explorer = <ClassificationDetails uri={classification} />
  }

  return explorer
}

const mapStateToProps = state => ({
  view: state.appState.view,
  classification: state.appState.classification
})
export default connect(mapStateToProps)(ClassificationExplorer)

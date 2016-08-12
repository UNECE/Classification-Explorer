import React from 'react'
import Classifications from './classifications'
import ClassificationDetails from './classification-details'
import { connect } from 'react-redux'
import { VIEW_CLASSIFICATIONS, VIEW_CLASSIFICATION_DETAILS } from '../reducers/app-state'

function ClassificationExplorer({ view, classification }) {
  let explorer
  if (view === VIEW_CLASSIFICATIONS) {
    explorer = <Classifications />
  }
  if (view === VIEW_CLASSIFICATION_DETAILS) {
    explorer = <ClassificationDetails uri={classification} />
  }
  return explorer
}

const mapStateToProps = state => ({
  view: state.appState.view,
  classification: state.appState.activeClassification
})
export default connect(mapStateToProps)(ClassificationExplorer)

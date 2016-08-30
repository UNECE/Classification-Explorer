import React from 'react'
import Classifications from './classifications'
import ClassificationDetails from './classification-details'
import { connect } from 'react-redux'
import { VIEW_CLASSIFICATIONS, VIEW_CLASSIFICATION_DETAILS } from '../reducers/app-state'

function ClassificationExplorer({ view, classification }) {
  let explorer
  explorer = <Classifications />
  return explorer
}

const mapStateToProps = (state, props) => ({
  classification: state.appState.activeClassification
})
export default connect(mapStateToProps)(ClassificationExplorer)

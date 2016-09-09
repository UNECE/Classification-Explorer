import React from 'react'
import Classifications from './classifications'
import ClassificationDetails from './classification-details'
import { connect } from 'react-redux'
import { VIEW_CLASSIFICATIONS, VIEW_CLASSIFICATION_DETAILS } from '../reducers/app-state'
import Loading from './loading'
import Menu from './menu'

function ClassificationExplorer({ view, classification, children }) {
  return (
    <div>
      <Menu />
      { children }
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  classification: state.appState.activeClassification
})
export default connect(mapStateToProps)(ClassificationExplorer)
 
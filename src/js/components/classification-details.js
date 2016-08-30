import React from 'react'
import Correspondences from './correspondences'
import Items from './items'
import Levels from './levels'
import ClassificationDetailsPane from './classification-details-pane'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'

function ClassificationDetails({ loaded, classification, code, label, issued }) {
  let details
  if (loaded !== LOADED) {
    details = <span>classification details are loading</span>
  }
  else {
    details = <ClassificationDetailsPane
                code={code}
                label={label}
                issued={issued} />
  }
  return (
    <div>
      { details }
      {/*<Correspondences classification={classification}/>*/}
      <Levels classification={classification}/>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  classification: decodeURIComponent(props.params.classification),
})

export default sparqlConnect.classificationDetails(mapStateToProps)(ClassificationDetails)

import React from 'react'
import Correspondences from './correspondences'
import Items from './items'
import Levels from './levels'
import ClassificationDetailsPane from './classification-details-pane'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { connect } from 'react-redux'
import Loading from './loading.js'

function ClassificationDetails({ loaded, classification, code, label, issued }) {
   //let details
 if (loaded !== LOADED) return <Loading from="Classification" plural={false}/>

  return (
     <div>
           <h1>{label}</h1>
   
      <ClassificationDetailsPane
                loaded={loaded}
                code={code}
                label={label}
                issued={issued} />
      <Correspondences classification={classification}/>
      <Levels classification={classification}/>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  classification: decodeURIComponent(props.params.classification),
})

export default connect(mapStateToProps)(sparqlConnect.classificationDetails(ClassificationDetails))


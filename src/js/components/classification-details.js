import React from 'react'
import Correspondences from './correspondences'
import Items from './items'
import Levels from './levels'
import ClassificationDetailsPane from './classification-details-pane'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from '../utils/sparql-connector/index'
import Loading from './loading.js'

function ClassificationDetails({ loaded, classification, code, label, issued }) {
   //let details
 if (loaded !== LOADED) {
    return(<Loading from="Classification" plural={false}/>)
    //details = <span>classification details are loading</span>
  }
  /*else {
    details = <ClassificationDetailsPane
                code={code}
                label={label}
                issued={issued} />
  }*/
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

export default sparqlConnect.classificationDetails()(ClassificationDetails)

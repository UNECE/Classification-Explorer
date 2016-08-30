import React from 'react'
import { sparqlConnect } from '../sparql//configure-sparql'
import { LOADING, LOADED, FAILED } from '../utils/sparql-connector/index'
import { toggleCorrespondenceDefinitions } from '../actions/app-state'
import Loading from './loading.js'

//a sparql component can be passed additional props (either by its parent or
//thanks to `mapStateToProps`and `mapDispatchToProps`)
function CorrespondenceDefinitions({ loaded, definitions, 
    correspondence, showDef, toggleDef }) {
  if (loaded !== LOADED){ return (<Loading from="Correspondence" plural={false}/>) } else {
  return (
    <span>
      <span style={{ cursor: 'pointer' }}
            onClick={() => toggleDef(correspondence) }>
        &#9662;
      </span>
      { showDef && 
        <div>{definitions.map(({ definition }) => definition).join('/')}</div>
      }
    </span> 
  )}
}

const mapStateToProps = (state, { correspondence }) => ({
  showDef: state.appState.showCorrespondenceDefs.hasOwnProperty(correspondence)
})

const mapDispatchToProps = {
  toggleDef: toggleCorrespondenceDefinitions
}

//sparqlConnect functions can be passed `mapStateToProps` and
//`mapDispatchToProps` in almost the same way than `redux.connect`
export default sparqlConnect.correspondenceDefinitions(
  mapStateToProps, mapDispatchToProps)(CorrespondenceDefinitions)
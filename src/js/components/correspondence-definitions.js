import React from 'react'
import { sparqlConnect } from '../sparql//configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { connect } from 'react-redux'
import { toggleCorrespondenceDefinitions } from '../actions/app-state'
import Loading from './loading'

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

export default connect( mapStateToProps, mapDispatchToProps)(
  sparqlConnect.correspondenceDefinitions(CorrespondenceDefinitions))
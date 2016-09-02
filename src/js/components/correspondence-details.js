import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { connectFromRoute, uriToLink } from '../router-mapping'
import Loading from './loading.js'

function CorrespondenceDetails({ loaded, classifications }) {
  if (loaded !== LOADED) return (
    <Loading from="Correspondence details" plural={false}/>
  )
  
  return (
    <div>
      It compares:
      <ul>
      { classifications.map(({ classification, code, label }) => 
          <li key={classification}>
          { code} - {label}
          </li> )}
      </ul>
    </div>
  )
}

export default connectFromRoute(
  sparqlConnect.correspondenceDetails(CorrespondenceDetails))
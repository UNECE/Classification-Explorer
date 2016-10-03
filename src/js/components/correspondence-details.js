import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { connectFromRoute, uriToLink } from '../router-mapping'
import Loading from './loading.js'
import SelectItemOptions from './select-item-options.js'

function CorrespondenceDetails({ loaded, classifications, correspondence }) {
  if (loaded !== LOADED) return (
    <Loading from="Correspondence details" plural={true}/>
  )

  return (
    <div>
      There is a correspondence table between:
      <ul>
      { classifications.map(({ classification, code, label }) =>
          <li key={classification}>
          {code} - {label}
          </li> )}
      </ul>
      <br/>
      <SelectItemOptions classification={classifications[0]} classificationId={classifications[0].classification } correspondence={correspondence} />
    </div>
  )
}

export default connectFromRoute(
  sparqlConnect.correspondenceDetails(CorrespondenceDetails))

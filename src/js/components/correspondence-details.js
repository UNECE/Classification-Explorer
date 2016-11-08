import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { connectFromRoute, uriToLink } from '../router-mapping'
import Loading from './loading.js'
import Associations from './associations'

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
      <Associations correspondence={correspondence} />
    </div>
  )
}

export default connectFromRoute(
  sparqlConnect.correspondenceDetails(CorrespondenceDetails))

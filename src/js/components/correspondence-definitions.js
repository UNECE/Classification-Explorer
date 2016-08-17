import React from 'react'
import { sparqlConnect } from '../sparql//configure-sparql'
import { LOADING, LOADED, FAILED } from '../utils/sparql-connector/index'

function CorrespondenceDefinitions({ loaded, definitions }) {
  if (loaded !== LOADED) return null
  return <div>{definitions.map(({ definition }) => definition).join('/')}</div>
}

export default sparqlConnect.correspondenceDefinitions()
  (CorrespondenceDefinitions)
import React, { Component } from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from '../utils/sparql-connector/index'
import CorrespondenceDefinitions from './correspondence-definitions'
import Loading from './loading.js'

function Correspondences({ loaded, correspondences }) {
  if (loaded !== LOADED) {return <Loading from="correspondences" plural={true}/>}
  else {
  return (
    <div>
      <h1>Correspondences</h1>
      <ul>
        { correspondences.map(correspondence =>
            <li key={correspondence.table}>
              {correspondence.table}
              <CorrespondenceDefinitions
                correspondence={correspondence.table} />
            </li>
  ) }
      </ul>
    </div>
  )
}
}

export default sparqlConnect.classificationCorrespondences()(Correspondences)

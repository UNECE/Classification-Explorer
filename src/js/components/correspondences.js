import React, { Component } from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import CorrespondenceDefinitions from './correspondence-definitions'

function Correspondences({ loaded, correspondences }) {
  if (loaded !== LOADED) return <span>loading correspondences</span>
  return (
    <div>
      <h1>Correspondences</h1>
      <ul>
        { correspondences.map(correspondence =>
            <li key={correspondence.table}>
              {correspondence.table}
              {/* <CorrespondenceDefinitions
                correspondence={correspondence.table} /> */}
            </li>) }
      </ul>
    </div>
  )
}

export default sparqlConnect.classificationCorrespondences(Correspondences)

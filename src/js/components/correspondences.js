import React, { Component } from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import CorrespondenceDefinitions from './correspondence-definitions'
import Loading from './loading'
import { Link } from 'react-router'
import { uriToLink } from '../router-mapping'

function Correspondences({ loaded, correspondences }) {
  if (loaded !== LOADED) {return <Loading from="correspondences" plural={true}/>}
  else {
  return (
    <div>
      <h1>Correspondences</h1>
      <ul>
        { correspondences.map(({ table, code, definition }) =>
            <li key={table}>
              <Link to={uriToLink.correspondenceDetails(table)}>
                {definition}
              </Link>
              {/* <CorrespondenceDefinitions
                correspondence={correspondence.table} /> */}
            </li>) }
      </ul>
    </div>
  )
}
}

export default sparqlConnect.classificationCorrespondences(Correspondences)

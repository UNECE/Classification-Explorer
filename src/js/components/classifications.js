import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Loading from './loading.js'
import { uriToLink } from '../router-mapping'

function Classifications({ loaded, classifications }) {
  if (loaded !== LOADED) return  <Loading from="Classification" plural={false} />

  return (
    <div>
      <h1>Classifications</h1>
      <ul>
        { classifications.map(({ classification }) =>
            <li key={classification}>
              <Link to={uriToLink.classificationDetails(classification)}>
                {classification}
              </Link>
            </li>
          )}
      </ul>
    </div>
  )
}

export default sparqlConnect.classifications(Classifications)

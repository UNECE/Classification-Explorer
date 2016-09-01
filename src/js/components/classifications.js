import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Loading from './loading.js'
import { URIToRoute } from '../router-mapping'

function Classifications({ loaded, classifications }) {
  if (loaded !== LOADED) return  <Loading from="Classification" plural={false} />

  //`URIToRoute.classification(...)` will return a string like `nacer2/nace`
  //where `nacer2` is the `classification` paremeter for the router, and `nace`
  //the `conceptScheme` paremeter
  return (
    <div>
      <h1>Classifications</h1>
      <ul>
        { classifications.map(({ classification }) =>
            <li key={classification}>
              <Link to={`/classification/${URIToRoute.classification(classification)}`}>
                {classification}
              </Link>
            </li>
          )}
      </ul>
    </div>
  )
}

export default sparqlConnect.classifications(Classifications)

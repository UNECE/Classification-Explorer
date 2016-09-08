import React from 'react'
import { connect} from 'react-redux'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'

function SearchResults({ loaded, results, keyword }) {
  if (loaded === LOADING) return <span>loading results for {keyword}</span>
  if (loaded === FAILED) return <span>Failed loading results for {keyword}</span>
  return (
      <ul>
        { results.map(({ subject, predicate, match, score }) =>
            <li key={subject+match}>
              {subject} - {predicate} - {match} - {score}
            </li>) }
      </ul>
  )
}


export default sparqlConnect.searchInstances(SearchResults)
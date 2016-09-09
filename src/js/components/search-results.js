import React from 'react'
import { connect} from 'react-redux'
import { sparqlConnect } from '../sparql/configure-sparql'
import { uriToLink, connectFromRoute } from '../router-mapping'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { Link } from 'react-router'
import { groupBy } from '../utils'
import ItemResult from './item-result'
import Menu from './menu'

function SearchResults({ loaded, items, keyword }) {
  if (loaded === LOADING) return <span>loading results for {keyword}</span>
  if (loaded === FAILED) return <span>Failed loading results for {keyword}</span>
  
  const clns = groupBy(items, 'classification', 'classificationLabel')
  
  return (
    <div>
      <Menu />
      <ul>
        { Object.keys(clns).reduce(
          (agregate, clnId) => {
            const cln = clns[clnId]
            const clnEntries = cln.entries
            const clnEl = 
            <li key={clnId}>
              <Link to={uriToLink.classificationDetails(clnId)}>
                {cln.props.classificationLabel}
              </Link>
              <ul>
              { clnEntries.map((rslt, i) => 
                //no obvious meaning ful key, so we use an index
                <li key={i}><ItemResult {...rslt} /></li>) }
              </ul>
            </li>
            agregate.push(clnEl)
            return agregate
          }, []) }
      </ul>
    </div>
  )
}


export default connectFromRoute(sparqlConnect.searchItems(SearchResults))

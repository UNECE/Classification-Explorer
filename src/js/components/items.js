import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { Link } from 'react-router'
import { URIToRoute } from '../router-mapping'
import Loading from './loading.js'

function Items({ loaded, items, levelLabel }) {
  if (loaded !== LOADED) return <Loading from="items" plural={true}/>
  return (
    <div>
      <h2>Items for {levelLabel}</h2>
      <ul>
        {items.map(({ item, code, label}) => 
          <li key={item}>
            <Link to={`/item/${URIToRoute.item(item)}`}>
              {item}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default sparqlConnect.levelItems(Items)
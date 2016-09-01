import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import Loading from './loading'
import { Link } from 'react-router'
import { URIToRoute } from '../router-mapping'

function ItemChildren({ item, loaded, items }) {
  if (loaded !== LOADED) return  <Loading from="Item children" plural={false} />
  return (
    <ul>
      { items.map(({ item, code, label }) =>
        <li key={item}>
          <Link to={`/classification/${URIToRoute.item(item)}`}>
            { code } - { label }
          </Link>
        </li>) }
    </ul>
  ) 
}
export default sparqlConnect.itemChildren(ItemChildren)
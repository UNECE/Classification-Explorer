import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import Loading from './loading'
import { Link } from 'react-router'
import { uriToLink } from '../router-mapping'
import Export from './export.js'

function ItemChildren({ item, loaded, items }) {
  if (loaded !== LOADED) return  <Loading from="Item children" plural={false} />
  return (
      <span>
      <Export dataToExport={items} name="export" />
    <ul>
      { items.map(({ item, code, label }) =>
        <li key={item}>
          <Link to={uriToLink.itemDetails(item)}>
            { code } - { label }
          </Link>
        </li>) }
    </ul>
    </span>
  )
}
export default sparqlConnect.itemChildren(ItemChildren)

import React from 'react'
import { connectFromRoute } from '../router-mapping'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import Loading from './loading'
import { Link } from 'react-router'
import { URIToRoute } from '../router-mapping'

import ItemChildren from './item-children'
function ItemDetails({ loaded, item, label, code, text, parent, parentCode, parentLabel }) {
  if (loaded !== LOADED) return  <Loading from="Item details" plural={false} />
  return (
    <div>
      <h1>{code} - {label}</h1>
      { parent && 
        <Link to={`/classification/${URIToRoute.item(parent)}`}>
          { parentCode } - { parentLabel }
        </Link>
      }
      { text && <div className="note">{text}</div> }
      <hr/>
      <ItemChildren item={item} />
    </div>
  )
}

export default connectFromRoute(sparqlConnect.itemDetails(ItemDetails))
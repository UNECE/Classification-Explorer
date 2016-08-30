import React from 'react'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from '../utils/sparql-connector/index'
import Loading from './loading.js'

function Items({ loaded, items, levelLabel }) {
  if (loaded !== LOADED){ return <Loading from="items" plural={true}/>
                        } else{
  return (
    <div>
      <h2>Items for {levelLabel}</h2>
      <ul>
        {items.map(({ item, code, label}) => 
          <li key={item}>{item}</li>
        )}
      </ul>
    </div>
  )
}
}

export default sparqlConnect.levelItems()(Items)
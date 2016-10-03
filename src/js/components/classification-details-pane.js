import React from 'react'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import Loading from './loading'

export default function ClassificationDetailsPane({ loaded, code, label, issued }) {
  if (loaded === LOADED) {
    return (
      <ul className="list-group">
        <li className="list-group-item">{code} ({issued})</li>
      </ul>
    )
  } else {
    return( <Loading from="Classification Details" plural={true}/>)
  }
}

import React from 'react'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import Loading from './loading'

export default function ClassificationDetailsPane({ loaded, code, label, issued }) {
  if (loaded === LOADED) {
  return (
    <div>
      <h1>Classification details</h1>
      <div>code: {code}</div>
      <div>label: {label}</div>
      <div>issued: {issued}</div>
    </div>
  )
  } else {
    return( <Loading from="Classification Details" plural={true}/>)
  }
}
//Stardog HTTP API documentation: http://docs.stardog.apiary.io/#

import fetch from 'isomorphic-fetch'
import credentials from '../../credentials'
import queries from './sparql-queries'
import _ from 'lodash'

const { username, password } = credentials
const authorization = 'Basic ' + btoa(`${username}:${password}`)

const urlClassifications =
  'https://unece-stardog.ichec.ie/annex/classifications/sparql/query'

const bodyFromSparql = query =>
  encodeURIComponent('query') + '=' +
  encodeURIComponent(query)

const callRest = query =>
  fetch(urlClassifications, {
    method: 'POST',
    headers: {
      'Authorization': authorization,
      'Accept': 'application/sparql-results+json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyFromSparql(query)
  })
  .then(res => res.json())

export default Object.keys(queries).reduce((rslts, key) => {
  rslts[key] = function (...args) {
    return callRest(queries[key](...args))
  }
  return rslts
}, {})

//Stardog HTTP API documentation: http://docs.stardog.apiary.io/#

import fetch from 'isomorphic-fetch'
import credentials from '../../credentials'

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
      // We need to pass some `x-www-form-urlencoded` data. `multipart/form-data`
      // created with `new FormData()` does not work.
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyFromSparql(query)
  })
  .then(res => res.json())

// We can also use a 'GET' verb if the query is not too long
/**
 * Retrieve all the classifications uri
 * @return {Promise} Resolves to json if success
 */
/* GET example 
export const remoteGetClassificationsList = () =>
  fetch(urlClassifications + '?' + bodyFromSparql(queryGetClassificationList), {
    method: 'GET',
    headers: {
      'Authorization': authorization, 
      'Accept': 'application/sparql-results+json',
    }
    body: bodyFromSparql(query)
  })
  .then(res => res.json())
*/

export const buildRemote = query => (...args) => callRest(query(...args))

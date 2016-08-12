//Stardog HTTP API documentation: http://docs.stardog.apiary.io/#

import fetch from 'isomorphic-fetch'
import credentials from '../../credentials'
const { username, password } = credentials
const authorization = 'Basic ' + btoa(`${username}:${password}`)

const urlClassifications =
  'https://unece-stardog.ichec.ie/annex/classifications/sparql/query'

const makeQueryGetClassificationItems = uri =>  `
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>

  SELECT ?poste  WHERE {
  	<${uri}> skos:hasTopConcept ?poste
  }
`
//TODO query Franck
const makeQueryGetClassificationLevels = uri =>  `
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>

  SELECT ?poste  WHERE {
  	<${uri}> skos:hasTopConcept ?poste
  }
`


const queryGetClassificationList = `
  select ?classification WHERE {   ?classification rdf:type skos:ConceptScheme . }
`

const bodyFromSparql = query =>
  encodeURIComponent('query') + '=' +
  encodeURIComponent(query)


// We need to pass some `x-www-form-urlencoded` data. `multipart/form-data`
// created with `new FormData()` does not work.
/**
 * Retrieve all the classification uri
 * @return {Promise} Resolves to json if success
 */
const remotePostClassificationsList = () =>
  fetch(urlClassifications, {
    method: 'POST',
    headers: {
      'Authorization': authorization,
      'Accept': 'application/sparql-results+json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyFromSparql(queryGetClassificationList)
  })
  .then(res => res.json())

// We can also use a 'GET' verb if the query is not too long
/**
 * Retrieve all the classifications uri
 * @return {Promise} Resolves to json if success
 */
const remoteGetClassificationsList = () =>
  fetch(urlClassifications + '?' + bodyFromSparql(queryGetClassificationList), {
    method: 'GET',
    headers: {
      'Authorization': authorization, 
      'Accept': 'application/sparql-results+json',
    }
  })
  .then(res => res.json())

/**
 * Retrieve all the items for a classification
 * @param  {String} uri uri of a classification
 * @return {Promise}    Resolves to json if success
 */
export const remoteGetClassificationItems = uri =>
  fetch(urlClassifications, {
    method: 'POST',
    headers: {
      'Authorization': authorization,
      'Accept': 'application/sparql-results+json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyFromSparql(makeQueryGetClassificationItems(uri))
  })
  .then(res => res.json())



  /**
   * Classification levels
   */
  export const remoteGetClassificationLevels = uri =>
    fetch(urlClassifications, {
      method: 'POST',
      headers: {
        'Authorization': authorization,
        'Accept': 'application/sparql-results+json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: bodyFromSparql(makeQueryGetClassificationLevels(uri))
    })
    .then(res => res.json())

import fetch from 'isomorphic-fetch'
import credentials from '../../credentials'
const { username, password } = credentials
const authorization = 'Basic ' + btoa(`${username}:${password}`)

const urlClassifications = 
  `https://unece-stardog.ichec.ie/annex/classifications/sparql/query`

const queryGetClassificationItems = `
PREFIX skos:<http://www.w3.org/2004/02/skos/core#>

SELECT ?poste  WHERE {
	<http://stamina-project.org/codes/cpfr21/cpf> skos:hasTopConcept ?poste
}`

const queryGetClassificationList = `
  select ?classification WHERE {   ?classification rdf:type skos:ConceptScheme . }
`

const bodyFromSparql = query => 
  encodeURIComponent('query') + '=' + 
  encodeURIComponent(query)


/**
 * Classification List
 */
export const remoteGetClassificationsList = () =>
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

/**
 * Classification items
 */
export const remoteGetClassificationItems = () =>
  fetch(urlClassifications, {
    method: 'POST',
    headers: {
      'Authorization': authorization,
      'Accept': 'application/sparql-results+json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyFromSparql(queryGetClassificationItems)
  })
  .then(res => res.json())

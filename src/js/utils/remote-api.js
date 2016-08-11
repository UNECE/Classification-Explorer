import fetch from 'isomorphic-fetch'

const queryGetClassificationList = encodeURIComponent(`
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>

  SELECT ?classification WHERE {
  	?classification rdf:type  skos:ConceptScheme .
  }
`)

const queryGetClassificationItems = encodeURIComponent(`
PREFIX skos:<http://www.w3.org/2004/02/skos/core#>

SELECT ?poste  WHERE {
	<http://id.insee.fr/codes/nafr2/naf> skos:hasTopConcept ?poste
}`)

//const urlGetSectionForClassification = `http://rdf.insee.fr/sparql?query=${queryGetSectionForClassification}`

const urlGetClassificationlist = `http://rdf.insee.fr/sparql?query=${queryGetClassificationList}`
const urlGetClassificationItems = `http://rdf.insee.fr/sparql?query=${queryGetClassificationItems}`


/**
 * Classification List
 * path like '/questionnaires'
 */

export const remoteGetClassificationsList = () =>
  fetch(urlGetClassificationlist, {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())

  export const remoteGetClassificationItems = () =>
    fetch(urlGetClassificationItems, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())

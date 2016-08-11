import fetch from 'isomorphic-fetch'

const queryGetClassificationList = encodeURIComponent(`
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>

  SELECT ?classification WHERE {
  	?classification rdf:type  skos:ConceptScheme .
  }
`)

const queryGetSectionForClassification = `
PREFIX skos:<http://www.w3.org/2004/02/skos/core#>

# http://id.insee.fr/concepts/definitions/scheme

SELECT ?poste  WHERE {
	<http://id.insee.fr/codes/nafr2/naf> skos:hasTopConcept ?poste
}`

const urlGetClassificationlist = `http://rdf.insee.fr/sparql?query=${query}`

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

